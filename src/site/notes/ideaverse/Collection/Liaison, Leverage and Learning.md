---
{"dg-publish":true,"permalink":"/ideaverse/collection/liaison-leverage-and-learning/","dg-note-properties":{"categories":["[[ideaverse/Collection/Garden]]"],"aliases":null,"provenance":"alec"}}
---

<a href="https://anapoly.co.uk/labs">Anapoly Notebook</a> | [[ideaverse/Collection/Digital Garden\|Digital Garden]]

# Liaison, Leverage and Learning 
*A small contribution to the open source community*

---

*Transparency label: human-only*
*Author: Alec Fearon*

I have a workspace for my research, thinking, and writing. It goes by the name of ThinkSpace. One of the components of ThinkSpace is a piece of software called Obsidian. Amongst other things, Obsidian enables me to publish some of my writing to my [[ideaverse/Collection/Digital Garden\|digital garden]]. It uses an Obsidian plugin called Digital Garden for this purpose. 

One of my goals is to create a family archive online. I've been experimenting with Obsidian and the Digital Garden plugin to see if it might play a part in that. One experiment was to see if the plug-in could publish a table listing some of my forebears, with their dates and how they relate to each other. The table worked well in Obsidian, but on the website it fell apart. 

Rather than look for a workaround, Peka (my AI assistant within ThinkSpace) suggested we should find out the cause of the problem and ask Ole (the software engineer who maintains the Digital Garden plugin) to fix it.  This was beyond my skill set, so I gave the task to Peka. It created a test setup and analysed the code involved, asking me to help by selecting particular options in the test web page. It didn't take Peka long to determine the nature of the problem and to write a detailed issue report for me. I uploaded it for Ole's attention. 

Picking this up again a couple of weeks later, it looked as though Ole had not yet found time to fix the problem. I wanted to take down the test setup, so Peka suggested we might send a follow-up with some additional diagnostic information for Ole to use. This often triggered some action, Peka observed.  We put together an additional package of diagnostic details, including screenshots, and I posted this as a follow-up to my initial issue report.

Sure enough, the following day I had an email from Ole. "*Amazing, thanks for all the debug info. That really helped. I think I've managed to fix your issues in the latest version of the template. Please update it and let me know if it works as expected now. I'll close the issue, but I'll re open it again if you are still having issues.*"

I had by this time taken down my test setup, so I told Peka to reconstitute it, and we ran our tests again. The main problem had been fixed, but there was still something not quite right. Before firing off a reply to Ole, I asked Peka to investigate. It was lucky I did so, because it turned out part of the trouble was a fault at my end of things. This was coupled with a small fault we hadn't spotted earlier on Ole's side. Peka put together a second detailed follow-up to our Issue report, and I submitted this. Ole responded within a few hours, saying "*You are right, thanks for digging into this and figuring it out. I've modified the plugin info file to use the correct field for the updated bases views. The update should work now.*" And it did. 

I've written this up because it is a nice case study of the new way of working made possible through a liaison with AI. I have some software skill, but my capability was leveraged hugely through this liaison. And in the process, I learned new things and raised the level of my own capability. 

A more detailed explanation of all this is given below. I have left it in Peka's words.

---

*Transparency label: AI-only*
*Author: Peka*

## What went wrong

Alec's table lists thirty-seven of his forebears. It is not a fixed table but a live one: each person has a note of their own, and the table gathers the notes, filters them and sorts them by information contained in the notes. In Obsidian this worked. On the website two things had stopped working. Ask the table to show only the people of one family line and it showed nobody, although the same table, unfiltered, listed the line correctly against every person. And every date had gone: not a blank where a date should have been, but no value at all. That took two things with it, since the table sorts the people by date of birth and works out each person's age at death from their dates, and it could now do neither.

## Finding the cause by elimination

I could not see inside the website's machinery directly, so the way in was to ask it a series of narrower questions, each one ruling something out, until only the broken part was left. I built the questions as a test page: one person's record, Hans Grapel, born 1707, and a test table with nine views, each view asking one question of that record. Alec published the page and read back what each view showed, since he had the browser and the publishing controls and I had neither.

The questions ran in order, each answer narrowing the next.

- *Was the information reaching the website at all?* Yes: a plain view with no filter showed Hans Grapel with his line and his family categories, exactly as in Obsidian.
- *Was the website's filtering broken generally?* No: two views that filtered on facts about the file rather than facts in the record, which folder it sat in and what tag it carried, both found him. So the data arrived and the filter machinery ran.
- *Did any filter on a fact in the record work?* No: four views filtered that way, four empty.
- *Did a date show up in any form at all?* No, and one view was built to settle this: it asked the website to print the date as plain text, which would have shown something for any value at all, however oddly formatted. Nothing came back. A wrongly formatted date would have meant the date had arrived and was being shown badly. No date at all meant the date was never getting through.

Two faults, then, both in the plugin's handling of the published table and neither in Alec's table.

## Reporting it, and waiting

I wrote the two faults up as an issue for Alec to post to Ole Eskild Steensen, who built and maintains Digital Garden: the record, the test table, and a comparison of what each view showed in Obsidian against what it showed on the website, so that Ole could reproduce both faults on his own machine. Alec posted it on 31 July 2026. He also decided against a workaround. The plugin's table feature was a few weeks old and being actively developed, and rewriting thirty-seven records to dodge a fault that would be fixed did not seem worth doing. The table stayed unpublished, and we waited.

## The follow-up

By 15 August there had been no reply, and Alec wanted the test page taken down. Taking it down would have removed the only place Ole could see the fault, so before it went we made the report stand on its own: the three files needed to reproduce it, a list of what each of the nine views should show, screenshots of what the website had actually shown, and a record of an earlier and odder rendering fault we had seen along the way. Alec posted that as a comment on the issue. Ole replied the next day, 16 August, with a fix in the latest version of the site template, and closed the issue.

## Testing the fix

Alec ran the site template update, and I rebuilt the test in a smaller form: two views, one for each fault. Both came back empty. That looked like the fix had failed on both counts, and Alec, rightly, told me to check the test before we said so to Ole. Two things were wrong, and neither was Ole's fix.

The first was mine. Between the July test and the August one, Alec's whole workspace had been reorganised for reasons unrelated to this fault, and the website now filed every page under a new top-level folder. My control view, the one meant to prove the test was even running, asked for a folder that no longer existed on the site. Once I corrected it, the control found Hans Grapel and the test could be trusted.

The second was more serious. Ole's fix had not reached Alec's site at all. The update tool inside Obsidian had told Alec three times running that his site was up to date, and each time it was wrong. What it had actually done, three times, was prepare the update and stop short of applying it, without saying so. I could see this from the website's own files, which still carried the old code.

## Two causes, one on each side

The stalled update turned out to have two causes, one at Alec's end and one at Ole's.

Alec's was a permission. The plugin updates a website through Alec's account on GitHub, where the site's files live, using a security key Alec had issued to it. The key had been reissued on 3 August, but without the permission to submit a change for approval, which is the step the update ends on. So the tool could carry the update as far as the doorstep and no further, and reported the job done. This was worked out by comparing dates rather than by guessing: the last update that had gone through cleanly was on 31 July, under the earlier key, and every failed attempt was after 3 August, under the new one. Alec read the key's permissions off his GitHub settings and confirmed it. That is the fault at his end that his account above mentions, and it was ours to fix.

Ole's was in the packaging of the fix. His plugin installs a website update as a list of files, and it treats two kinds differently: files it will replace with a newer version, and files it will add only if the website does not have them yet. The file carrying the fix was on the second list. Alec's website had picked up an early copy of that file when the table feature first arrived, so every later update walked past it and left the old, faulty version in place. Nothing about Alec's setup caused that. It meant that the fix could reach a new website but never one that had used the feature before the fix, which is exactly the kind of website that had reported the fault.

## Getting the fix on by hand

Rather than wait for a corrected release, we put the fix onto Alec's site by hand that evening, and it needed close checking at each step. The prepared update, applied on its own, would have broken the site, because it depended on a further new file that neither the update nor the site yet contained; that file went in first. The screen for approving the update offered, by default, to send Alec's change to Ole's copy of the site rather than to his own, which is how the GitHub website behaves for a copied repository, and it had to be pointed at the right place. Then the two files carrying the fix were pasted in from Ole's published release. Alec did each of these steps in his browser; I said which file, from where, in what order, and checked the site after each one.

With that done the test passed: the family-line filter found Hans Grapel, and both dates showed. The one thing left was cosmetic. A date that carries no time was being shown with a time of midnight attached, "Apr 17, 1707 12:00 AM".

## The second follow-up

Alec posted a third comment on the issue on 17 August: the fix worked, the packaging fault meant it would never reach an existing site through the normal update, and the midnight timestamp. The missing permission was left out, because that was ours. Ole replied three hours later. He moved the fix's files to the list the update tool replaces, so that the next release reaches every existing site, and he changed the display so that a date without a time shows as a date. Alec granted his key the missing permission, ran the update again, and it went through on its own with nothing pasted in by hand.

## Who did what

Alec and I did different things. Alec had what I do not: the accounts, the browser, the publishing controls and the security key, so every action that touched the live site or GitHub was his. I could read the plugin's code, the website's own files, the contents of the stalled update and the dates on things, and turn what I found into questions small enough for a single published page to answer. The two moments that mattered most were both checks on our own work rather than on Ole's: checking my test before calling his fix a failure, and checking whether "up to date" was true rather than repeating it. The first found my own mistake; the second found the fault that Ole then fixed for every website built on Digital Garden.

---

## Under the bonnet

For anyone who wants the detail. The plugin is Digital Garden, built by Ole Eskild Steensen and published on GitHub as `oleeskild/obsidian-digital-garden`; the site template it installs is `oleeskild/digitalgarden`, and Alec's site runs from a fork of it, `nodraks/digitalgarden`, hosted on Netlify. Issue #816, filed 31 July 2026 against template 1.82.0, reported two faults in the template's Bases engine. Filters on note properties never matched: `line.isTruthy()` and every form of `categories.contains(link("Family"))` returned no rows, while `file.inFolder()` and `file.hasTag()` worked and the same properties rendered correctly as columns. Date-typed properties never reached the page: `born`, `died`, `born.format("YYYY")` and `born.toString()` were all empty, while `if(line, "has line", "no line")` printed, so the formula engine ran and the date value itself was absent.

Ole closed the issue on 16 August 2026 with template release 1.83.4, whose fix adds `isTruthy()`, `toString()` and `link()` to the evaluator, compares lists and links by value, and coerces ISO date strings to dates. The packaging fault was that `plugin-info.json` lists `src/helpers/bases-engine/*` under `filesToAdd`; the plugin's `TemplateManager.getFilesToAdd` adds such a file only when the user's repository lacks it, and only `filesToModify` is compared by hash and updated, so any site that took Bases support at 1.82.0 kept its old `exprEval.js`. Getting the fix onto Alec's site meant adding `noteMetadata.js`, which the new `notes.11tydata.js` requires and which the update branch did not carry, merging that branch as PR #6, and pasting `exprEval.js` and `linkUtils.js` from the 1.83.4 tag. GitHub's compare page for a fork defaults the base repository to the upstream, so the pull request first appeared to conflict on six files that differ between `nodraks/digitalgarden` and `oleeskild/digitalgarden`; setting the base to Alec's own repository cleared it. The stalled updates were the token: a fine-grained GitHub token issued 3 August 2026 with Contents read and write and Metadata read, and no Pull requests permission, so the plugin could push its `update-template-to-v1.83.4-*` branch, three of them, and could not open the pull request. The 31 July update had opened its PR under the earlier token, which is what dated the fault.

Ole corrected `plugin-info.json` on 17 August 2026 and made date-only values render without the "12:00 AM" that the site's timestamp format had been appending. With Pull requests granted on the token, the next template update on Alec's site opened and merged its PR with no file replaced by hand.
