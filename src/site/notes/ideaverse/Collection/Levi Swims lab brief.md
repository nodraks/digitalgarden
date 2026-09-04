---
{"dg-publish":true,"permalink":"/ideaverse/collection/levi-swims-lab-brief/","dg-note-properties":{"description":"The brief for the Levi Swims lab, a SEND swimming micro-enterprise, mapping where AI can help across booking, parent communication, third-party coordination, lesson delivery and safety information","created":"2026-09-04","posted":"2025-11-25","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Levi Swims Lab Brief

*Transparency label: human-led (human-authored, with AI input limited to suggestions, edits, or fact-checking)*

---

## The Scenario

Levi Swims is a micro-enterprise; it provides swimming lessons to children and young people, with a particular emphasis on those who have special educational needs and disabilities (SEND). Lessons are delivered one-to-one or in small groups and are tailored to individual needs.

The enterprise has begun a progamme to develop a system better able to support its operation. Phase 1 of this system is described in a [Concept of Operation](https://www.anapoly.co.uk/files/levi-swims-phase1-conop.pdf). It is being kept deliberately simple. Parents and carers will be able to learn about Levi Swim services via a WordPress.com website, request lessons through a booking form, and receive personal confirmation directly from Levi. Bookings will continue to be recorded in a shared bookings calendar, implemented, as now, in an Excel spreadsheet stored on Google Drive. Invoicing and payments will continue to be handled as a third-party service through Community Support Team (CST), using their own accounting tools.

Phase 1 does **not** include automated booking, live availability display, integrated payment processing, nor automated reminder functions. These capabilities are recognised as desirable but are planned for later phases.

## Purpose of the Lab

To explore the potential usefulness of AI to the enterprise, judging this against what a micro-business can sustain without unreasonable risk.

## Opportunities for use of AI

Levi Swims is a classic micro-enterprise built around a single skilled practitioner. The work involves a few high-level operational processes: lesson delivery, booking and calendar management, parent communication, coordination with third-parties, and the handling of SEND/safety information. Phase 1 will rely on manual routines and tools: a static website, standard email capabilities, and a spreadsheet-based bookings calendar.

## Strengths of AI in this context

Creating simple procedural workflows that reduce human load.

Capturing structured information from unstructured messages.

Drafting clear, consistent customer communications.

Triage: spotting missing information, contradictions, or conflicts.

Scheduling optimisation and constraint-checking (within limits).

Automating recurring admin: reminders, confirmations, follow-ups.

Summarising or condensing overlong information into actionable points.

Template-driven document or message generation.

Basic data hygiene (spotting duplicates, inconsistencies).

## Mapping of AI strengths across high-level processes

### A. Booking and Calendar Management

Tasks Levi performs:

- Receiving booking requests.
- Extracting key details.
- Spotting missing information.
- Checking availability in the spreadsheet.
- Negotiating alternatives.
- Confirming bookings.
- Maintaining the calendar manually.

AI match: very high. It can parse requests, extract details, flag missing fields, draft responses, and detect clashes. It cannot replace the spreadsheet calendar or make safety decisions.

### B. Parent Communication

Tasks Levi performs: initial responses and clarifications, explaining SEND considerations, confirmations, reminders, handling cancellations.

AI match: high. It can draft replies, generate explanations, and maintain consistent tone. Levi must always send messages himself.

### C. Third-Party Coordination

Tasks Levi performs: communicating invoice details, responding to payment flags, ensuring calendar consistency.

AI match: moderate. It can draft summaries for CST and detect mismatches. It cannot integrate with Xero or make credit decisions.

### D. Lesson Planning and Delivery

Tasks Levi performs: planning and delivering lessons, tailoring approach, ensuring safety.

AI match: very low. AI can suggest ideas or summarise notes but cannot replace judgment.

### E. SEND and Safety Information Handling

Tasks Levi performs: sifting information, extracting essentials, writing concise notes, deleting unnecessary material.

AI match: high but delicate. AI can summarise long messages and highlight relevant points while Levi retains all safety decisions.

## Analysis

Where could AI provide benefit?

- The biggest operational pain point is booking administration. Many use cases and scenarios revolve around manual admin, potentially creating delays and errors. This problem is well suited to AI.
- Parent communications are frequent, repetitive, and not safety-critical; AI could support drafting and clarification.
- SEND/safety note extraction could benefit from AI’s ability to condense overshared information.
- Third-party coordination could benefit to a small extent.
- Lesson delivery gains nothing.

AI could assist in booking admin, parent communication, and SEND/safety information triage.

Constrain the AI’s role to that of administrative augmentation, not automation, the goal being a safe, valued, low-risk application.

## Approach to Lab Work

Model Levi Swim’s business operation, defining processes and creating a minimal synthetic data environment.

Apply the principles of the three-layer context model to produce the context window components needed to configure a Booking Admin Copilot.

Deploy the Copilot and then run a progression of experiments to:

- extract structured data,
- identify missing information,
- draft clear responses,
- summarise SEND notes,
- flag potential scheduling conflicts, and
- prepare invoice requirements.
