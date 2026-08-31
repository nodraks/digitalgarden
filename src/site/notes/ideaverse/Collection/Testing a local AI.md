---
{"dg-publish":true,"permalink":"/ideaverse/collection/testing-a-local-ai/","dg-note-properties":{"description":"Running Mistral 7B locally over the Obsidian vault with Ollama and Smart Connections","created":"2026-08-31","posted":"2025-08-29","categories":["[[ideaverse/Collection/Notebook diary]]","[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Testing a local AI

*Written by Alec Fearon on 29 August 2025 in Anapoly Diary*
*Transparency label: Human-only*
*<--- [[ideaverse/Collection/Mind Maps, Podcasts, and a Pocket Brain\|Mind Maps, Podcasts, and a Pocket Brain]]*
*---> [[ideaverse/Collection/A more personalised way to learn with NotebookLM\|A more personalised way to learn with NotebookLM]]*

---

I am using Obsidian to build not a *second brain*, but a *workspace for my brain*: a space in which to think. The workspace is intended to become an ideas factory, designed as a *knowledge network*: a network of ideas at different stages of development.

There is scope for AI technology to enhance my thinking in that space. For example, ideas in the knowledge network can be embedded into a [[ideaverse/Collection/vector database\|vector database]], roughly similar to how an AI organises knowledge. This allows similarities among widely scattered notes — the [[ideaverse/Collection/semantic connection\|semantic connections]] — to be highlighted, and lets me search not just for specific words but also for ideas with related meaning. The [Smart Connections](https://smartconnections.app/) plugin implements these useful capabilities.

I can take this a step further by inviting an AI into my thinking space. [Ollama](https://ollama.com/) lets me run a large language model on my laptop and connect it to my Obsidian vault through the Smart Connections plugin, so the AI can query, summarise, and respond directly from my notes. I downloaded the Mistral 7B Q4\_K\_M model for this purpose. Put simply, it’s a compressed version of the 7B model that runs faster and uses less memory, at the cost of some accuracy.

I ran two tests. First, I pointed it to a short daily note and asked, “What is Claire’s new job?” After a pause of about half a minute, it gave me the correct answer.

For the second test, I pointed it to [[ideaverse/Collection/Goal-Directed Context Management v1\|a more substantial document]] and asked, “What is the purpose of Goal-Directed Context Management?” The reply took eight minutes, but the answer was very good:

> The purpose of Goal-Directed Context Management, as outlined in the provided document, is to manage a large language model (such as ChatGPT) effectively when it’s being used as a collaborator during the production or editing of knowledge-based products.
> 
> This framework aims to configure and adapt the behavior of the AI to suit different roles over the course of work, while also providing scaffolding in the form of project and program management techniques to keep the AI focused and effective over the lifecycle of an information-based product.
> 
> By aligning the AI’s evolving context with the purpose and structure of a project or program, Goal-Directed Context Management ensures that the AI always has the right information to contribute effectively to the current stage of work.

The test confirmed three things: I could run an AI locally to keep my data private, the model gave accurate responses, and, although performance was slow on my three-year-old Dell XPS, it still worked. Watching my own laptop pull a thoughtful answer from my notes was oddly satisfying, even if I had time to make tea while it thought.
