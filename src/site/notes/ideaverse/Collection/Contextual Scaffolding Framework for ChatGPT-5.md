---
{"dg-publish":true,"permalink":"/ideaverse/collection/contextual-scaffolding-framework-for-chat-gpt-5/","dg-note-properties":{"description":"The Contextual Scaffolding Framework with guidance for GPT-5 integrated by NotebookLM from the GPT-5 Prompting Cookbook, on eagerness, statefulness, instruction adherence, preambles and verbosity","created":"2026-09-04","posted":"2025-08-12","section":"resource","resource-type":"framework","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Contextual Scaffolding Framework for ChatGPT-5

Note: The guidance shown in bold was extracted from the GPT-5 Prompting Cookbook by NotebookLM without human involvement. NotebookLM then integrated the guidance into the earlier version of the [[ideaverse/Collection/Contextual Scaffolding Framework\|Contextual Scaffolding Framework]] to produce this document.

*Transparency label: AI-heavy*

---

The development of a knowledge-based product in collaboration with an AI requires structured contextual scaffolding. This scaffolding takes the form of two complementary models: a *phase model* to structure the overall lifecycle, and a *project model* to guide collaborative work within each phase.

The phase and project models are flexible and should be applied with as light a touch as possible. The AI will assist in mapping out this programme of work – a key part of its contextual scaffolding. **To ensure optimal performance and continuous improvement of the scaffolding itself, GPT-5 should be leveraged as a meta-prompter to refine the instructions and context provided, thereby allowing for iterative enhancement of the prompts that guide the AI**.

---

## Phase Model (Cradle-to-Grave Structure)

The phase model provides end-to-end structure across the full lifecycle of the product. **When collaborating with GPT-5, the AI’s “agentic eagerness”—its balance between proactivity and awaiting explicit guidance—should be carefully calibrated for each phase to maximise efficiency and relevance**.

1. **Concept** – Explore potential benefits, clarify purpose, and draft a business case. **During this exploratory phase, prompt GPT-5 for *more eagerness* by increasing its `reasoning_effort` parameter. This encourages persistence and allows the AI to autonomously research and deduce without frequent clarification questions, promoting proactivity in ambiguous situations**.
2. **Definition** – Specify the intended final deliverable in sufficient detail to support structured development. **In this phase, as clarity increases, prompt for *less eagerness*. Define clear criteria in your prompt for how GPT-5 should explore the problem space, including specific goals, methods, early stop criteria, and depth. This reduces tangential tool-calling and focuses the AI on precise definition**.
3. **Development** – Develop and test the final product. **Similar to the Definition phase, prompt for *less eagerness* and potentially lower `reasoning_effort` to focus GPT-5 on the defined development objectives. Encourage the AI to proactively propose changes and proceed with plans for user approval/rejection, rather than constantly asking for confirmation. This aligns with a “management by exception” approach, where the human intervenes only when necessary**.
4. **Acceptance** – Validate the deliverable in the hands of its intended users, ensure it meets defined needs, and bring it into use. **For validation tasks, explicitly define detailed evaluation criteria in the prompt, guiding GPT-5 to assess outputs against specified needs and acceptance criteria**.
5. **Operation and Maintenance** – Use, monitor, and refine the product until it is retired. **In this ongoing phase, configure GPT-5’s prompts to support continuous monitoring and refinement, potentially adjusting eagerness based on the nature of maintenance tasks (e.g., more eagerness for problem diagnosis, less for routine updates)**.

---

## Project Model (Within-Phase Scaffolding)

Within each phase, a project-based approach provides structure for collaborative delivery.

##### 5. Human-AI Collaboration

The AI acts as a **collaborator.**

- The **human is the decision-maker**.
- The AI adapts to the nature of work at hand.
- Because contextual scaffolding keeps pace with the progress of work, the AI remains grounded and its responses stay relevant and precise.
- **To maximise this effectiveness, leverage GPT-5’s advanced capabilities as follows:**
    - **Utilise the Responses API for Statefulness:** Always use the Responses API to pass previous `reasoning_items` back into subsequent requests. This allows GPT-5 to refer to its prior reasoning traces, which **eliminates the need for the AI to reconstruct a plan from scratch after each tool call**, leading to improved agentic flows, lower costs, and more efficient token usage.
    - **Ensure Surgical Instruction Adherence:** GPT-5 follows prompt instructions with **“surgical precision”**. Therefore, all contextual scaffolding prompts—including product descriptions, acceptance criteria, and stage objectives—must be **thoroughly reviewed for ambiguities and contradictions**. Poorly-constructed prompts can cause GPT-5 to waste reasoning tokens trying to reconcile conflicts, significantly impairing performance. Structured XML specifications (e.g., `<context_gathering>`, `<code_editing_rules>`) are highly effective for defining context, rules, and expectations explicitly.
    - **Manage Communication with Tool Preamble Messages:** GPT-5 is trained to provide clear upfront plans and consistent progress updates via **“tool preamble” messages**. Prompts should steer the frequency, style, and content of these preambles (e.g., using `<tool_preambles>` tags) to enhance the human user’s ability to follow the AI’s thinking and progress, facilitating effective feedback loops and improving the interactive user experience.
    - **Control Verbosity Strategically:** Use the `verbosity` API parameter and natural-language overrides within prompts to tailor the length of GPT-5’s final answers. For “managing progress” products or status updates, prompt for **concise status updates**. For “technical” interim products or final deliverables, prompt for **higher verbosity** where detailed explanations or more comprehensive content (e.g., heavily commented code, detailed report sections) are required.

---

## Quality Management

A simplified quality management process ensures control:

- Each product has a defined **description** or acceptance criteria. **For knowledge-based products, prompt GPT-5 to iteratively execute against *self-constructed excellence rubrics* to elevate output quality. The AI can internalise and apply high-quality standards based on criteria defined in the prompt, thereby ensuring deliverables meet the highest standards**.
- Quality is assessed at **stage gates**.
- Feedback loops enable iteration and correction. **When developing knowledge products, provide GPT-5 with explicit instructions on design principles, structure, style guides, and best practices (e.g., citation formats, required sections, tone of voice) within the prompt. This ensures the AI’s contributions adhere to established standards and “blend in” seamlessly with existing work, maintaining consistency and professionalism**.

---

## Example: Preparing a Competitive Tender

When preparing a competitive tender, the required knowledge product is a complete, high-quality bid submission. However, at the outset, the scope, fulfillment strategy, resource requirements, and pricing model will not be clear.

**Phase Model in Action**
The work progresses through phases – starting with a concept phase to assess feasibility and value, followed by definition (specifying scope and win themes), development (producing the actual bid), acceptance (review and sign-off), and finally operation and maintenance (post-submission follow-up or revision).

**Project Model in Each Phase**
Within each phase, a lightweight project structure is applied to guide collaboration with the AI. For example, in the definition phase, the AI helps analyse requirements, map obligations, and develop outline responses. In the development phase, it helps draft, refine, and format bid content.

**Contextual Scaffolding**
At every stage, contextual scaffolding ensures the AI is working with the right background, priorities, and current materials. Thus it can focus on what matters most, and contribute in ways that are coherent, precise, and aligned with both the tender requirements and internal strategy.

*[[ideaverse/Collection/Transparency Framework\|Transparency label justification]]. This document was developed through structured collaboration between Alec Fearon, ChatGPT and NotebookLM. Alec provided the core ideas, framing, and sequence. ChatGPT contributed to the organisation, refinement, and drafting of the text, under Alec’s direction. NotebookLM provided GPT-5 updates. The content reflects a co-developed understanding, with human oversight and final decisions throughout.*
