---
{"dg-publish":true,"permalink":"/ideaverse/collection/do-ai-models-have-a-prompt-appetite/","dg-note-properties":{"description":"Prompt appetites, each frontier model now preferring its own instruction style","created":"2026-08-31","posted":"2025-11-27","categories":["[[ideaverse/Collection/Notebook diary]]","[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [Garden](https://anapoly.netlify.app) | [Anapoly](https://anapoly.co.uk)

# Do AI models have a prompt appetite?

*Written by Alec Fearon on 27 November 2025 in Anapoly Diary*
*Transparency label: Human-only*
*<--- [[ideaverse/Collection/A three-layer instruction set for use in ChatGPT Projects\|A three-layer instruction set for use in ChatGPT Projects]]*
*---> [[ideaverse/Collection/Methodology & tool-kits\|Methodology & tool-kits]]*

---

About once a week, I use ChatGPT to pull out the main themes from the stack of newsletters I receive. This week I was surprised to be told that different AI models now have different prompt appetites. So I got the AI to explain what this means and the implications for Anapoly.

---

ChatGPT’s response to the question “ *What is meant by different models now have different prompt appetites*?”

> It means the era of “one prompting style works everywhere” is over.
> 
> Models used to behave broadly the same: structure your instructions, specify roles, delimit sections, and you’d get predictable results. Now the frontier models diverge. They respond differently not just in *quality* but in *preference* for instruction style.
> 
> A “prompt appetite” is the set of conditions in which a model performs best: how much structure it wants, how explicit you need to be, how conversational you can be, and how sensitive it is to examples, delimiters, or verbosity. In other words, each model now has its own diet.
> 
> Gemini 3, for example, performs better with example-rich, lightly structured, conversational prompts. Too much rigid scaffolding and it feels choked. GPT-5.1, by contrast, still thrives on formal instruction and well-defined control layers. Claude it is noticeably sensitive to tone and framing. Even small changes in wording can push these models into noticeably different modes of reasoning.
> 
> For Anapoly, that has two implications.
> 
> First, your governance and context layers can’t be one-size-fits-all. If you’re orchestrating across multiple models—internal RAG, foundation models, domain-specific SLMs—you need a prompting strategy that adapts to the quirks of each one. Your orchestration layer becomes, in part, a “dietician”: matching tasks to the right model and the right prompt genre.
> 
> Second, this strengthens your case for standardised, model-agnostic knowledge units. If models vary in appetite, the only way to keep outputs consistent is to control the inputs: modular content blocks, transparent context, and structured reasoning artefacts that can be rephrased per model without degrading meaning.
> 
> In short: prompt appetite is emerging as a genuine design constraint. Ignore it and you get erratic behaviour; work with it and you get reliability.
