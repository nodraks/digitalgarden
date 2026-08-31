---
{"dg-publish":true,"permalink":"/ideaverse/collection/content-and-context-are-key/","dg-note-properties":{"description":"Content management and context engineering, the two levers over AI behaviour","created":"2026-08-31","posted":"2025-11-18","categories":["[[ideaverse/Collection/Notebook diary]]","[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [Garden](https://anapoly.netlify.app) | [Anapoly](https://anapoly.co.uk)

# Content and context are key

*Written by Alec Fearon on 18 November 2025 in Anapoly Diary*
*Transparency label: AI-assisted. AI was used to draft, edit, or refine content. Alec Fearon directed the process*
*<--- [[ideaverse/Collection/An AI-embedded business\|An AI-embedded business]]*
*---> [[ideaverse/Collection/Make ChatGPT mark its own homework\|Make ChatGPT mark its own homework]]*

---

… to successful use of AI. This is a distinction that matters now because many teams only notice the problem once their AI systems start giving confident but contradictory answers.

With acknowledgment to [Scott Abel](https://anapoly.co.uk/labs/thought-leaders/#scott-abel) and [Michael Iantosca](https://anapoly.co.uk/labs/thought-leaders/#michael-iantosca), whose writing provided the source material for this post.

---

[[ideaverse/Collection/An AI-embedded business\|In an earlier post]], I defined an AI-embedded business as one in which AI systems are deeply integrated into its operations. For this to be successful, I suggested that we needed contextual scaffolding to define the AI’s working environment for a given task, context engineering to manage that environment as part of the business infrastructure, and the disciplined management of knowledge. We can call the latter – the disciplined management of knowledge – content management.

> *Content management* governs *what goes into* the contextual scaffolding (the AI’s knowledge environment).  
> *Context engineering* governs *how the model uses it* at inference time.

Between them, they define the only two levers humans actually have over AI behaviour today, and crucially, they sit entirely outside the model. If either discipline is missing or under-performing, the system degrades:

- Without **content engineering**, you get **knowledge collapse** (defined below).  
	The sources of truth become out of date, fragment, contradict, and mislead the model.
- Without **context engineering**, you get **context rot** (defined below).  
	Even good content becomes unusable because it’s handed to the model in ways that overwhelm its attention budget.

Together, these two disciplines enable a coherent means of control:

- Content engineering → the quality, structure, governance, and lifecycle of the organisation’s knowledge.
- Context engineering → the orchestration of instructions, persona, reference materials, scope, constraints, and retrieval so the model actually behaves as intended.

---

## Definitions

### Knowledge collapse

*A systemic failure in an organisation’s knowledge environment where incorrect, outdated, conflicting, or poorly structured content overwhelms the reliable material, causing both humans and AI systems to lose the ability to determine what is authoritative.*

In plainer terms:

The knowledge base stops being a source of truth and becomes a source of error.

It happens when:

- Content ages faster than it’s maintained.
- There is no lifecycle governance.
- Tools ingest everything without curation.
- Retrieval yields contradictions rather than clarity.
- AI amplifies the mess until nobody can tell what’s accurate.

The collapse is not sudden; it is **accumulative and invisible** until a critical threshold is crossed, for example when a small business relies on an outdated onboarding manual and the AI dutifully repeats obsolete steps that no longer match how the company actually works.

### Context rot

The degradation of an LLM’s reasoning as the context window grows.  
The model becomes **distracted** by the sheer number of tokens it must attend to, because:

1. **Attention is a finite resource.**  
	Each new token drains the model’s “attention budget.”
2. **Transformers force every token to attend to every other token.**  
	As the number of tokens rises, the pairwise attention load explodes.
3. **Signal-to-noise collapses.**  
	Useful tokens become diluted by irrelevant ones, so the model fixates on the wrong cues or loses the thread entirely.

Anthropic’s researchers summarise it neatly:

> *Tokens accumulate beyond the model’s ability to meaningfully attend to them, so the context becomes increasingly noisy and less relevant.*

In short: **the more you give the model, the worse it thinks**, which is why practitioners often need to reset sessions or prune earlier inputs to keep the model focused on the task at hand.

This is a structural limitation of today’s transformer architecture, not a parameter-tuning issue. It sets a ceiling on long-context performance unless a new architecture replaces or supplements attention.
