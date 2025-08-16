---
{"dg-publish":true,"permalink":"/obsidian/digital-garden/goal-directed-context-management/","created":"2025-08-14T16:08:42.047+01:00","updated":"2025-08-16T12:48:16.324+01:00"}
---

<a href="https://anapoly.co.uk/labs">Anapoly Notebook</a> | [[obsidian/Digital Garden/Digital Garden\|Digital Garden]] 

# Goal-Directed Context Management
*Status: well advanced, but some important pieces missing. Not yet useable*
_With acknowledgement to Erling S. Andersen, whose book <a href="https://www.amazon.co.uk/Goal-Directed-Project-Management-Techniques/dp/0749453346">Goal Directed Project Management</a> inspired me in 1988_

---
## Introduction

To use a large language model such as ChatGPT (aka an AI) as a collaborator, we have to configure it's behaviour to suit the purpose of our work. We do this by giving it information. in the form of instructions, guidance, questions, and reference material. We put this information into the AI's context to govern how it behaves:
- in all chats through custom instructions;
- in groups of chats (organised as projects) through project instructions and project files;
- during individual chats through prompts, the canvas, and file uploads (prompts can include instructions, guidance and questions). 

 Thus, we control the AI by putting information into its context. This is similar to the way we control a computer by giving it a program to run. But there is an important difference: a computer executes the instructions in its program precisely; an AI (large language model) interprets the information we give it. We should aim, therefore, to give the AI only as much room for manoeuvre as we judge appropriate. A vague prompt gets a vague answer. A precise prompt with the right background information gets us something much more useful. 
 
 See [[obsidian/Digital Garden/What is context\|What is context]] for a more detailed explanation of context. It is important to understand it well. 



This document contains a framework for managing an AI's context when it is being used to create knowledge-based products. The aim is to keep the AI both useful and relevant by having the right information in its context throughout the progress of work. 
## Knowledge-Based Products

A knowledge-based product is any output whose primary value lies in the information, expertise, or analysis it contains. This can include documents (books, manuals, reports, policies), structured content (training courses, standards, knowledge bases), and digital artefacts such as software, where the embedded rules, logic, and data represent codified knowledge. In all cases, the emphasis is on creating, organising, and delivering knowledge in a usable form.

The lifecycle of such a product (see Appendix) typically begins with **concept** and **feasibility**, where needs are identified and options assessed. It moves through **definition** and **development**, where requirements are set and the product is created, followed by **acceptance** and **release** to confirm and deliver the output. The product then enters **operation and maintenance**, where it is used, monitored, and updated as necessary, before ultimately reaching **retirement**, when it is withdrawn or replaced. This sequence ensures the product remains valuable and relevant throughout its existence.

A goal might be to **develop a comprehensive staff onboarding procedure** that meets compliance requirements and supports consistent training. Another might be to **create a new organisational policy framework** covering governance, ethics, and operational standards. Each can be tackled in different ways, depending on how clearly the goal is defined and how much uncertainty it contains. Two broad approaches stand out:

**Project approach** — used when the goal is well understood and can be defined with little uncertainty. Here, acceptable levels of risk to quality, cost, and time allow for a single, goal-directed project.  
**Programme approach** — used when the goal contains too much uncertainty for a single tightly-bound project to be viable. The programme comprises successive phases, each with a well-defined purpose that is delivered using the project approach. The purpose is to reduce uncertainty and progressively stabilise towards a well-defined goal. By its nature, a complex goal will usually require this programme approach.
## Project Approach

For a knowledge-based product, a typical project might have the following stages:

- **Initiation** → confirm the product’s purpose, scope, and intended audience; agree acceptance criteria; and identify resources.
    
- **Design & Planning** → define the structure, content outline, and style; create a detailed plan for producing each component of the product.
    
- **Production** → develop the content according to the plan, integrating research, drafting, and iterative review.
    
- **Verification** → check the completed product against acceptance criteria through review, testing, or validation.
    
- **Release & Closure** → finalise, publish or distribute the product, obtain sign-off, and record lessons learned for future work.
    
## Programme Approach

For a knowledge-based product, a typical programme might have the following phases.

- **Concept** → framing the problem, identifying scope, exploring high-level options.
    
- **Feasibility** → evaluating identified options for viability, value, and alignment with objectives; estimating resources, time, and risks; and selecting the preferred approach to take forward.
    
- **Definition** → specifying content requirements, structure, style, and success criteria.
    
- **Development** → creating the material, integrating research, drafting, reviewing.
    
- **Acceptance** → stakeholder review, validation of accuracy, sign-off for publication.
    
- **Operation & Maintenance** → publishing, version control, updates, ongoing relevance checks.
## Contextual Scaffolding

When an AI is part of the team working towards a knowledge-related goal, we need the AI to stay helpful and relevant. To achieve this we must give it the information it needs to do its job in the way we want it done, and that information must evolve alongside the work being done. We use the term contextual scaffolding for this.

Contextual scaffolding defines the scope and substance of what the AI should know at any point in the work. Context is the operational environment in which that scaffolding is applied. In other words, scaffolding determines _what_ information and guidance are relevant, while context determines _how_ that information is held, combined, and used in real time to produce outputs. Together, they ensure the AI is both well-informed and immediately effective.
## Context

An AI’s context is its active workspace, where different layers of information combine to guide its responses. For ChatGPT, these layers are:

- **Project Instructions** — persistent, high-level guidance that defines objectives, constraints, tone, and priorities for the work.
    
- **Canvas** — the shared document workspace holding the current working material for drafting, structuring, and revising.
    
- **Conversation Context** — the running record of the current conversation, enabling continuity between exchanges.
    
- **Referenced Files and External Inputs** — documents or data sources explicitly loaded into the project to provide factual grounding.
    
- **System Layer** — underlying rules and behaviours set by OpenAI and project settings.
    

The layers work together as follows: the System Layer and Project Instructions establish long-term guidance; the Canvas and Conversation Context manage the immediate working state; Referenced Files supply just-in-time knowledge. The AI blends these elements within the limits of its context window, which determines how much information it can use at one time.
## Goal-Directed Context Management

The art of goal-directed context management is to align the evolving context with the structure and purpose of the chosen approach, ensuring the AI always has the right information, at the right level of detail, to contribute effectively to the current stage of work.

## Example of the Project Approach

Here is an [[obsidian/Digital Garden/example of the project approach\|example of the project approach]] applied to the creation of a staff onboarding procedure. 

In the _Design & Planning_ stage of the staff onboarding procedure project, the contextual scaffolding would comprise both **persistent context** and **current context**.

The **current context** is the stage-specific working information actively loaded into the AI’s working memory — for example, the agreed structure of the onboarding document, the latest draft text, HR compliance requirements relevant to this stage, outstanding stakeholder inputs, and immediate action items. It excludes earlier exploratory materials from the Initiation stage to prevent distraction or drift.

The **persistent context** holds the enduring reference framework for the project. This includes the project instructions — overall objectives, target audience, scope boundaries, tone, and quality standards — and referenced files such as the approved project plan, HR manuals, legal guidelines, and IT setup checklists. Persistent context ensures the AI retains a clear understanding of the big picture — how the current stage connects to prior work and fits into the overall sequence toward final delivery.

## Example of the Programme Approach

Here is an [[obsidian/Digital Garden/example of the programme approach\|example of the programme approach]] applied to the development of a policy framework. In a programme such as this, the **volume and diversity of information** will be significantly greater than in a single project. Multiple phases will generate numerous and often lengthy documents: consultation summaries, draft policy sections, legal reviews, implementation plans, and more.

Here, **persistent context** contains the programme’s overarching objectives, governance arrangements, phase plans, and other enduring references that anchor all phases. The **current context** is tightly scoped to the phase in progress. For example, during the Definition phase, it might hold the agreed structure for the framework, key stakeholder requirements, and a shortlist of draft policy themes under development. 

Most of the programme’s working materials will be stored as **referenced files** rather than loaded directly into the current context. This approach allows the AI to retrieve and use relevant material on demand, without overloading its active workspace. By carefully selecting which elements to bring into the current context, we ensure the AI remains focused on the present phase while retaining quick access to the broader and more complex body of programme knowledge.

---

## Appendix: Knowledge-Based Product Lifecycle

A knowledge-based product life-cycle typically follows this flow:

1. **Concept** – Identify the need or opportunity and outline broad ideas for the product.
    
2. **Feasibility** – Evaluate options for viability, resource needs, and potential impact; select the best option to pursue.
    
3. **Definition** – Specify detailed requirements, structure, and quality criteria.
    
4. **Development** – Produce the product content or code, integrating research, drafting, and review.
    
5. **Acceptance** – Validate the product against agreed requirements and secure formal sign-off.
    
6. **Release** – Publish, distribute, or implement the product for its intended audience.
    
7. **Operation** – The product is used in practice; monitor for performance and relevance.
    
8. **Maintenance** – Update and refine the product to keep it accurate and effective over time.
    
9. **Retirement** – Withdraw the product when it is obsolete, replacing or archiving it as needed.