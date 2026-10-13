const { executeBaseQuery, renderViews } = require("./bases-engine");
const { createImageIndex, scanImageDir } = require("./bases-engine/imageIndex");
const linkUtils = require("./linkUtils");

const IMAGE_ROOT = "src/site/img/user";

// Cache rendered HTML keyed by YAML + notes fingerprint to avoid re-rendering
// identical queries within a single build. Cleared between builds.
const renderCache = new Map();
let renderCacheBuildId = 0;

// Image index for shortest-path wikilink covers, built lazily once per build
let cachedImageIndex = null;

function getImageIndex() {
  if (!cachedImageIndex) {
    cachedImageIndex = createImageIndex(scanImageDir(IMAGE_ROOT));
  }
  return cachedImageIndex;
}

/**
 * Clear the render cache. Call at the start of each build (e.g. --watch mode)
 * to avoid serving stale HTML across rebuilds.
 */
function clearRenderCache() {
  renderCache.clear();
  renderCacheBuildId++;
  cachedImageIndex = null;
}

/**
 * The Obsidian plugin expands `> ![[x.base#View]]` into a ```base fence
 * without the blockquote prefixes, so a base embed inside a callout arrives
 * as an empty callout followed by a bare fence. Re-attach such a fence to
 * the blockquote it directly follows by restoring the `> ` prefixes.
 * A fence separated from the blockquote by a blank line is left alone.
 */
function renestBaseFences(src) {
  const lines = src.split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "```base" && out.length > 0 && /^>/.test(out[out.length - 1])) {
      out.push("> " + line);
      i++;
      while (i < lines.length) {
        out.push("> " + lines[i]);
        if (lines[i].trim() === "```") {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    out.push(line);
    i++;
  }
  return out.join("\n");
}

function basesPlugin(md) {
  md.core.ruler.after("normalize", "dg_renest_base_fences", (state) => {
    state.src = renestBaseFences(state.src);
  });

  const origFence =
    md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];

    if (token.info.trim() === "base") {
      try {
        // Prefer enriched notes with links/backlinks (from graph builder),
        // fall back to plain notes from the data cascade
        const notes = linkUtils._basesNotesWithLinks || (env && env.basesNotes) || [];
        return renderBaseBlock(token.content, notes);
      } catch (err) {
        console.error("Error processing base query:", err);
        return '<div class="obsidian-base-error">' + escapeHtml(err.message || "Unknown error") + '</div>';
      }
    }

    return origFence(tokens, idx, options, env, self);
  };
}

/**
 * Build a fingerprint from the notes array that changes when notes are
 * added, removed, or modified. Uses buildId + count + paths hash.
 */
function notesFingerprint(notes) {
  let hash = 0;
  for (const note of notes) {
    const s = (note.url || note.fileSlug || "");
    for (let i = 0; i < s.length; i++) {
      hash = ((hash << 5) - hash + s.charCodeAt(i)) | 0;
    }
  }
  return renderCacheBuildId + ":" + notes.length + ":" + hash;
}

function renderBaseBlock(yamlContent, notes) {
  const cacheKey = yamlContent + "\0" + notesFingerprint(notes);
  if (renderCache.has(cacheKey)) return renderCache.get(cacheKey);
  const result = executeBaseQuery(yamlContent, notes);
  const html = renderViews(result, notes, { imageIndex: getImageIndex() });
  renderCache.set(cacheKey, html);
  return html;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

module.exports = { basesPlugin, clearRenderCache };
