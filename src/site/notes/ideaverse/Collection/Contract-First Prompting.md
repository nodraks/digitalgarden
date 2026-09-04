---
{"dg-publish":true,"permalink":"/ideaverse/collection/contract-first-prompting/","dg-note-properties":{"description":"A transcript of a chat with Perplexity AI on 4 August 2025 on what contract-first prompting is, how compliance with the contract is achieved, a glossary, and what a prompt contract comprises","created":"2026-09-04","posted":"2025-08-05","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Contract-First Prompting

Transcript of a chat with Perplexity AI on 4 August 2025. Scope:

- What is contract-first prompting?
- How can we achieve compliance with the contract?
- Glossary
- What does the Prompt Contract comprise?

The AI cited a range of sources which are not listed here.

---

***Alec***

I’m reading about contract-first prompting. Is this a well known idea?

***Perplexity***

Contract-first prompting is an emerging approach in the field of prompt engineering for large language models (LLMs), but it is not yet a broadly established or widely recognized term in the AI community. The concept centers on treating the prompt as a contract: before the LLM begins generating output, both the human and the model arrive at a clear, mutual understanding of the task, success criteria, requirements, and constraints—essentially simulating the way engineers or teams agree on specifications before work begins.

The main advocate for this method, as of August 2025, appears to be Nate B. Jones, who describes contract-first prompting as a way to overcome mismatches in intent that often lead to prompt failures. His process involves explicitly communicating the mission, listing out unknowns, having the LLM ask clarifying questions until it is highly confident it understands, and then “locking” the agreement before any generative work starts. This ensures a precision in the model’s output that typical, single-shot instructions often lack.

Key features of contract-first prompting include:

- **Explicit Agreement:** Agreed-upon goals, constraints, and deliverables set before generation begins.
- **Clarification Loop:** The LLM systematically asks questions about any gaps or ambiguities until it reaches a high confidence threshold (often cited as 95%).
- **Echo Check:** Before proceeding, the model summarizes (in a single crisp sentence) the mission to confirm everyone is aligned.
- **Token Efficiency:** The approach aims for clarity without unnecessarily long prompts, relying instead on a structured negotiation for understanding.

While the term “contract-first” has broader use in software (such as API design) and business contract processes, its specific application to prompting LLMs is recent and is only beginning to gain attention outside of Jones’ blog, newsletter, and talks. There are no signs (as of August 2025) that this is a standard technique in mainstream AI literature, though it is being applied practically and seems to be gaining traction among advanced prompt engineers seeking more reliable, aligned outputs from AI models.

In summary: **Contract-first prompting is a new, not-yet-mainstream idea in LLM prompting, but its principles are resonating with users frustrated by intent failures and iterative prompt re-writing. Its adoption and notoriety may grow as more practitioners experiment with the method and share results.**

---

***Alec***

Having locked the agreement – the contract – how is compliance achieved?

***Perplexity***

Compliance in contract-first prompting—after “locking” the agreement—relies on both process and mechanisms designed to minimize misunderstanding and enforce the original intent as the model generates outputs.

Here’s how compliance is typically achieved:

**1. Mutually Verified Understanding—Before Execution**

- Before any generative task begins, both the human user and the LLM go through a structured clarification phase. The LLM actively interrogates gaps or ambiguities, asking targeted questions until a high confidence threshold (such as 95% clarity) is met.
- An “echo check” is performed, where the model summarizes the mission and requirements in a single definitive sentence. If this summary matches the human’s expectations, the contract is “locked,” making intent explicit and verifiable.

**2. Process-Driven Output Generation**

- Once agreement is locked, the LLM proceeds to generate according to the contract. The steps and constraints defined upfront become the rubric against which the output will be compared.
- The contract includes not just the end goals, but also deliverables, must-hit facts, hardest constraints, and even “guardrails” for creativity, tone, or style—allowing for precise post-generation comparison of what was promised versus what was delivered.

**3. Internal Self-Testing and Critique**

- Advanced workflows employ “self-testing” or “self-critique” phases, where the LLM is asked to evaluate its output against the agreed contract. This can involve the model itself (or a second critique pass) systematically checking for alignment with requirements, completeness, and accuracy—much as code is tested against a written specification.
- This may be repeated or budgeted with a cap on retries to avoid an endless critique loop.

**4. Human Oversight and Feedback**

- If the output fails to satisfy the locked contract, a feedback stage allows the user to flag deficiencies, inconsistencies, or missed constraints for another iteration—always referencing the specific terms of the locked agreement as the benchmark for compliance.

**5. Traceability and Amendments**

- The locked contract (“prompt contract”) and any conversation history serve as a transparent audit trail. If outputs diverge or intent drifts over time, the contract can be revisited, amended with new information, and relocked to renew mutual understanding.

**Key Principles for Enforcing Compliance:**

- **Explicit rubrics:** Every required element and forbidden omission is made explicit.
- **Model-enabled self-verification:** The LLM is prompted to “mark its own homework” before delivering.
- **External criticism:** Human or model-based critics can review the output, pinpointing contract breaches.
- **Iterative negotiation:** In the case of failures, the process can resume from clarification, not starting from scratch.

In sum: Contract-first prompting doesn’t just minimize ambiguity upfront—it supports compliance by converting vague expectations into actionable, checkable commitments, and by making the verification of those commitments part of the generation and review process itself.

This “contract discipline” borrows best practices from software engineering and project management, tailored to the specifics of LLM interaction.

---

***Alec***

Please provide a glossary for the content of this chat.

***Perplexity***

Here’s a glossary for key terms and concepts related to contract-first prompting, as discussed in this conversation:

**Contract-First Prompting**
An approach to prompt engineering where both the user and the language model establish an explicit, mutual understanding of the task, requirements, constraints, and deliverables before generating any outputs. The prompt acts as a “contract” guiding model behavior and evaluation.

**Locked Contract / Agreement**
The state achieved when both the human user and the language model have fully clarified, summarized, and agreed upon the task and its criteria. Generation begins only after this “contract” is accepted by both parties.

**Clarification Loop**
A process in which the language model asks targeted questions about the prompt or assignment until all gaps or ambiguities are resolved. This loop continues until a certain confidence threshold (e.g., 95%) is achieved, ensuring both parties understand exactly what is required.

**Echo Check**
A final summary step, where the language model restates the mission or main goal in a single, explicit sentence to confirm mutual understanding. This is usually the step before locking the contract.

**Compliance**
The act of ensuring that the model’s outputs adhere to the requirements, constraints, and expectations set out in the locked contract. Compliance involves explicit rubrics, self-testing, and human or model review to verify that the “contract” is fully honored.

**Self-Testing / Self-Critique**
A process where the language model evaluates its own output versus the locked contract, checking for alignment on deliverables, content, tone, and constraints. This may involve specific prompt instructions for the model to “mark its own homework”.

**Rubric**
A set of explicit, measurable criteria used to judge whether the model’s output meets the contract. Rubrics can cover required facts, tone, structure, style, and any “must-not” constraints.

**Guardrails**
Rules or boundaries in the contract that keep output within the intended scope, such as stylistic requirements, forbidden content, or strict adherence to facts.

**Iterative Negotiation**
The process of returning to the clarification loop or contract stage when outputs fail to comply, allowing for further refinement and amendments rather than starting over from scratch.

**Prompt Contract**
Another term for the locked prompt; the full, mutually agreed prompt specification defining the agreed work, constraints, and criteria.

**Audit Trail**
The conversation history, including contract negotiations, clarifications, and amendments. This record provides transparency for how compliance and intent alignment were achieved.

**Confidence Threshold**
A percentage (such as 95%) representing the degree of certainty the model must reach before locking the contract. Achieved through questions and summarization steps.

**Token Efficiency**
The principle of using prompt and process structure (such as contract-first negotiation) to achieve clarity and compliance without relying on excessively long or verbose prompts.

These terms form the core vocabulary for understanding and using contract-first prompting as a discipline in language model interactions.

---

***Alec***

What does the Prompt Contract comprise, in this approach to working with an LLM?

***Perplexity***

A Prompt Contract, in contract-first prompting for large language models (LLMs), is a structured, mutually agreed specification between the user and the model that defines exactly what is expected—turning vague intentions into an explicit, checkable work order before any output is generated. Its main components include:

- **Mission Statement/Task Description:**
  A concise summary of the specific task or objective the model is asked to accomplish. This is the “headline” of the work assignment and sets the frame for all further instructions.
- **Deliverables:**
  Explicit details about the output format, length, style, structure, and any other properties the response must have. For example, “a 500-word summary,” “Python code with comments,” or “a list of five strategic recommendations.”
- **Must-Include Facts and Requirements:**
  Any key pieces of information, facts, or arguments that must appear in the output. These are non-negotiable and serve as the backbone for measuring compliance.
- **Constraints (Hardest Constraints and Guardrails):**
  Limitations or boundaries the model should not cross—such as “do not speculate,” “no first-person language,” “avoid repetition,” or “never reference X.” Guardrails may also cover tone, audience, or domain-specific restrictions.
- **Success Criteria/Rubric:**
  Criteria or checklist for what constitutes a “successful” output. This could involve accuracy, completeness, style, tone, or inclusion of certain sections. These criteria become the basis for self-testing or human review of the model’s output.
- **Clarified Unknowns and Assumptions:**
  List of any remaining ambiguities, potential edge cases, or unstated assumptions. These are surfaced and explicitly agreed upon through a clarification loop before locking the contract.
- **Echo Check/Summary Statement:**
  The language model returns a single, crisp summary statement of the agreed task and constraints. The user confirms this matches their intent—at which point, the “contract” is locked and execution (output generation) can begin.

In practice, the Prompt Contract acts as both a plan and a testable checklist. If model output deviates or is incomplete, parties return to the contract to clarify or amend terms, ensuring high accuracy and alignment. This disciplined, engineering-inspired approach is especially useful for high-stakes, complex, or collaborative tasks, reducing intent gaps and making model behavior more predictable and auditable.
