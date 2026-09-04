---
{"dg-publish":true,"permalink":"/ideaverse/collection/precision-content-prompt-pack/","dg-note-properties":{"description":"A six-step prompt pack that converts a source document into precision content, typed as reference, concept, principle, process or task, with human review at each step","created":"2026-09-01","posted":"2025-08-05","resource-type":"tool","url":"https://www.anapoly.co.uk/files/precision-content-prompt-pack.md","section":"resource","categories":["[[ideaverse/Collection/Anapoly Notebook]]","[[ideaverse/Collection/Prompts]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Precision Content Prompt Pack

Version: 01, 1 August 2025
Authors: Alec Fearon and ChatGPT-4o.

*Transparency label: AI-heavy

---

## Purpose

This is a six-step process for converting a source document into a structured format that is easy for an LLM to understand. The format is based on the [Darwin Information Typing Architecture](https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture) (DITA) and ideas developed by [Precision Content](https://www.precisioncontent.com). It has the following content types:

- Reference (what something is)
- Concept (how to think about it)
- Principle (why it works)
- Process (how it unfolds)
- Task (how to do it)

The six steps are carried out in sequence, one at a time. They clean, segment, type, clarify, and re-package the original source material. There is human review at the end of each step.

## To use

First, open a chat in ChatGPT and upload [this file](https://www.anapoly.co.uk/files/precision-content-prompt-pack.md) into the chat; it is in [Markdown](https://en.wikipedia.org/wiki/Markdown) (.md) because that is easy for LLMs to read.
Note: you can drag & drop the file into the chat or use the upload button.

Tell ChatGPT: “Please create a new canvas from this markdown file so we can work together using the precision content prompt pack.” ChatGPT will:

- Read the file
- Create a canvas
- Use each ## heading to split the file into separate cards
- Preserve formatting and headings

Then upload the source file into the chat. Tell ChatGPT: “Please convert the uploaded file [filename] into precision content using the steps defined in the canvas Anapoly AI Labs Precision Content Prompt Pack. Begin Step 0.”

ChatGPT will extract the content of the file and clean it as per Step 0 – Pre-Processing. It will paste the cleaned material into the “📄 Source Document” card for you to review. That sets you up to proceed with the following steps. The output of each step is put into the “Work Area – Output by Step” card in the canvas. Edit the output of each step as necessary before proceeding to the next step.

The final output is put into the card “Review Notes / Final Output / Glossary”. You can tell ChatGPT to export it from there as a file for download. If it is to be used as reference material, filetype .md is recommended.

---

## Step 0 – Pre-Processing

**Purpose:** Clean the raw input before analysis.

**Prompt:**

> Clean the following document for structured analysis. Remove:
>
> - Repeated headers/footers
> - Navigation links, timestamps, metadata
> - Formatting glitches (e.g. broken paragraphs)
>
> Retain all meaningful content exactly as written. Do *not* summarise, interpret, or reword.

---

## Step 1 – Segmenting the Document

**Purpose:** Divide into discrete, meaningful segments.

**Prompt:**

> Break this cleaned document into a numbered list of coherent segments. Each segment should reflect a single topic, paragraph, or unit of meaning.
>
> Format:
> **[1]** [text]
> **[2]** [text]

---

## Step 2 – Typing the Segments

**Purpose:** Label each segment by information type.

**Types:**

- Reference – what something is
- Concept – how to think about it
- Principle – why it works
- Process – how it unfolds
- Task – how to do it

**Prompt:**

> For each segment, assign the most relevant type. Include a short justification.
>
> Format:
> **[1]** Type: [type] – [reason]

---

## Step 3 – Rewriting for Precision

**Purpose:** Convert to structured, plain-language modules.

**Prompt:**

> Rewrite each segment according to its type:
>
> - Use short declarative sentences
> - Bullet points for steps or lists
> - Avoid vagueness or repetition

---

## Step 4 – Grouping by Type

**Purpose:** Reorganise output by information type.

**Prompt:**

> Sort all rewritten segments under clear headings:
>
> - 🗂 Reference
> - 🧠 Concept
> - ⚖️ Principle
> - 🔄 Process
> - 🔧 Task
>
> Preserve segment numbers.

---

## Step 5 – Structured Output Bundle

**Purpose:** Package the content for reuse.

**Prompt:**

> Format output with markdown or minimal HTML.
> Include metadata at the top:

```
Title: [your title]
Source: [file name or link]
Date: [today's date]
Content type: Precision Content
```

---

## Step 6 – Glossary Generation

**Purpose:** Extract and define key terms.

**Prompt:**

> Identify important terms in the text and define each using only information in the document.
>
> Format:
> **Term**: [definition]

---

## 📄 Source Document

[Paste the cleaned or raw source text here after Step 0.]

---

## Work Area – Output by Step

Use this section to draft segmented content, types, rewrites, and grouped outputs.

---

## Review Notes / Final Output / Glossary

Use this area for human commentary, final outputs, or glossary results.
