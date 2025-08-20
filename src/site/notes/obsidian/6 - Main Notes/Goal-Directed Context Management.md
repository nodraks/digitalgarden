---
{"dg-publish":true,"permalink":"/obsidian/6-main-notes/goal-directed-context-management/","created":"2025-08-20T09:29:12.259+01:00","updated":"2025-08-20T12:29:18.720+01:00"}
---

<a href="https://anapoly.co.uk/labs">Anapoly Notebook</a> | [[obsidian/Digital Garden/Digital Garden\|Digital Garden]] 

# Goal-Directed Context Management

**[[obsidian/6 - Main Notes/Status of ideas in the digital garden\|Status]]:** 🔸 Seed → 🔸 Growing → ✅ Well-formed → 🔸 Adapting → 🔸 Retired  
With acknowledgement to Erling S. Andersen, whose book *Goal Directed Project Management* inspired me in 1988

---

## Introduction

This document sets out a framework for managing a large language model such as ChatGPT (aka an AI) when it is being used as a collaborator during the production or editing of knowledge-based products. It traces a path through:

- how we manage the behaviour of a large language model (an AI);
- how we can adapt that behaviour to suit the AI's changing role over the course of work; and
- the use of project and programme management to provide the scaffolding needed to keep the AI focused and effective over the lifecycle of an information-based product.    

Finally, there are examples of the project and programme approaches applied to an information-based product.

## What is context?

**Context** is the information we give an AI to control its behaviour. It is additional to the knowledge it learned during training. We cannot alter the AI’s learned knowledge, but we can build its context by supplying instructions, guidance, questions, and reference material. The better the context, the better the output: a vague prompt yields a vague answer; a precise prompt with the right background yields something much more useful.

We can shape context in different ways:

- **Custom instructions** → apply across all chats.
- **Project instructions** and **project files** → apply across grouped chats in a project.
- **Prompts, canvas, file uploads** → apply within a single chat.
- **Agents (GPTs)** → bespoke roles configured with tailored instructions and reference material.

This method of steering an AI by loading its context is akin to programming a computer. But unlike a computer, which executes instructions precisely, an AI interprets them. This is more like managing a human: the AI, like a colleague, needs guidance, role definition, and access to reference material, but will interpret what it receives.

## Managing scale and uncertainty

Ad‑hoc prompting works for small tasks. As scale or complexity grows, this breaks down. Coordination becomes difficult, and there is a risk of the AI drifting or becoming overloaded. To manage larger or riskier work, we borrow scaffolding from project and programme management.

- A **project** is suitable when the goal is well defined and risk is acceptable. It progresses through stages, and its scaffolding includes plans, roles, tasks, and standards.
- A **programme** is needed when the goal is broader or less certain. It progresses through phases, each reducing uncertainty and risk, until the goal stabilises.

This scaffolding provides the plan, roles, information, and outputs needed to keep both humans and AI aligned.

## AI as a team member

When AI is used by a project team member, its characteristics make it more like an additional team member than a tool. The AI, like the human, must be given roles and tasks. It, too, must obtain information from the project scaffolding. Unlike a human, the AI cannot yet autonomously fetch what it needs; a human must load the right material into its context. Tools may automate this step, but it still relies on human choice and setup.

## Contextual scaffolding

A part of the project scaffolding — the **contextual scaffolding** — is reserved for managing the AI. It holds the artefacts needed to keep the AI’s behaviour and effectiveness aligned over the course of the project. This is the responsibility of the project’s AI manager.

Contextual scaffolding has two layers:

|Layer|Purpose|Contents|When it changes|
|---|---|---|---|
|**Persistent**|Enduring reference framework for the project|Project instructions, overall objectives, tone, quality standards, approved plans, manuals, legal guidelines|Rarely|
|**Current**|Active working set for the present stage|Structure of the current document, latest drafts, stage‑specific compliance requirements, outstanding inputs|Frequently|

By pruning old material from the current context and keeping persistent context stable, the AI remains focused while still connected to the big picture.

## AI artefacts

The project plan governs the creation and timing of AI artefacts. These artefacts live within the contextual scaffolding:

- **Bootstrap prompt** → configures the AI so it can help create the startup pack.
- **AI startup pack** → sets the AI’s initial objective: to help initiate the project by outlining contextual scaffolding and assisting with artefact definition.
- **Stage packs** → keep the AI aligned with the uses intended for each project stage; they begin in outline and fill with content as work progresses.
- **GPT packs** → create specialist AI agents configured with bespoke knowledge.
- **Information packs** → tailored inputs for other AIs in use.

## The art of goal‑directed context management

The art lies in always aligning the AI’s context with the purpose and structure of the project or programme. Three rules of thumb:

1. **Choose the right scaffolding** → project for well‑defined goals; programme for uncertain or complex goals.
2. **Split context** → persistent for enduring references; current for stage‑specific work.
3. **Evolve artefacts** → update stage packs as the work moves forward; retire outdated current context to prevent drift.    

## Knowledge‑based products

A knowledge‑based product is any output whose primary value lies in information, expertise, or analysis: books, manuals, policies, courses, standards, knowledge bases, or even software where rules and data embody codified knowledge. Such products follow a lifecycle:

	**Concept** → need identified.
	**Feasibility** → options evaluated.
	**Definition** → requirements specified.
	**Development** → content created.
	**Acceptance** → validated and signed off.
	**Release** → delivered to the audience.
	**Operation** → used in practice.
	**Maintenance** → updated for accuracy and relevance.
	**Retirement** → withdrawn or replaced.    

## Project approach example

The **staff onboarding procedure** illustrates the project approach: the goal is clear and risk is acceptable.

In the _Design & Planning_ stage, the contextual scaffolding includes:

- **Current context**: structure of the onboarding document, latest drafts, compliance requirements, and action items. Old exploratory material from Initiation is excluded to prevent drift.
- **Persistent context**: project objectives, target audience, scope, tone, quality standards, approved plan, HR manuals, and legal guidelines. This ensures connection to the big picture.

---

## Programme approach example

The **policy framework** illustrates the programme approach: the objective is broad and uncertain, requiring phased reduction of uncertainty.

- **Persistent context**: overarching objectives, governance arrangements, and phase plans.
- **Current context**: tightly scoped to the phase in progress — e.g., framework structure, key requirements, draft policy themes.
- **Referenced files**: the bulk of programme material (consultation summaries, draft sections, legal reviews, plans) are stored outside the current context. Humans load in only what is needed to keep the AI focused.    

By narrowing unknowns each phase, the programme steadily stabilises towards its goal.

## Conclusion

Goal‑directed context management is about keeping the AI on course and maintaining quality as the work grows in scale. It works by holding the goal steady, dividing context into what endures and what changes, and refreshing the AI’s working material as the project moves forward. Done well, it lets the AI play its part in producing knowledge‑based products that are both accurate and reliable.


---
*Tags*: 