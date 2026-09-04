---
{"dg-publish":true,"permalink":"/ideaverse/collection/banana-nano-pro-prompt-generator/","dg-note-properties":{"description":"A standard operating procedure for generating professional image prompts for Nano Banana Pro through a custom Gemini Gem, from Dylan Davis's source material","created":"2026-09-01","posted":"2025-12-17","resource-type":"tool","section":"resource","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Banana Nano Pro Prompt Generator

Source material *created by Dylan Davis and made freely available through his [YouTube channel](https://www.youtube.com/@d-squared70)*. Accessed: *17 December 2025*

*Transparency label: AI-only*

---

**Objective:** To consistently generate professional-grade image prompts for Nano Banana Pro by outsourcing the technical prompting to a custom AI “Gem”.

**Role:** The User acts as the “Creative Director” (providing intent), while the Gem acts as the “Technical Prompter” (formatting for the model).

### Tools Required

- Google Gemini Advanced (to create and use Gems)
- Nano Banana Pro (Image Generation Model)
- Reference Images (Optional but recommended)

---

## Phase 1: One-Time Setup (Creating the Gem)

*Note: This step only needs to be done once to build the tool.*

1. **Create a New Gem:** Open Gemini and start a new Gem (custom AI assistant).
2. **Define the Instructions:** In the instructions section for the Gem, paste the content of [[ideaverse/Collection/Base prompt for the Nano Banana Pro prompt generator\|the base prompt]]. The file contains directives that cover the following logic derived from the source:
    - **Role Definition:** You are an expert at prompting the Nano Banana Pro image model.
    - **Task:** Your job is to take five specific user inputs and synthesize them into high-quality image prompts.
    - **Input Guardrails:** If the user does not provide all five inputs (Purpose, Audience, Subject, Brand Rules, Reference Image), ask them to provide the missing information before generating prompts.
    - **Output Styles:** Generate three distinct prompt variations:
        - Literal
        - Creative
        - Premium
    - **Output Format:** The final output must be in JSON format (using labels and descriptions within brackets). This structure resonates most effectively with Nano Banana Pro.
    - **Research Logic:** Use internal reasoning to infer aspect ratios and styles based on the “Purpose” provided (e.g., if the purpose is “Instagram,” infer a vertical aspect ratio).

---

## Phase 2: Input Data (The 5-Step Context)

When you are ready to generate an image, open your custom Gem and provide the following five inputs. You do not need to worry about technical jargon; just use natural language.

1. **Purpose:** Why are you creating this image?
    - *Examples: Instagram ad, YouTube thumbnail, Pitch deck, Landing page hero section.*
    - *Why: This dictates aspect ratio and composition.*
2. **Audience:** Who is this image for?
    - *Examples: Luxury buyers, Tech executives, Gen Z consumers.*
3. **Subject:** What is the primary focus?
    - *Examples: A matte black ceramic mug, a specific person, a character.*
4. **Brand Rules:** What are the aesthetic guidelines?
    - *Examples: Warm tones, minimal styling, specific brand colors, or fonts.*
5. **Reference Image (Yes/No):** Are you providing a reference image to the image model?
    - *Context: Mention if you are inserting a product into a scene, using a sketch, or mimicking a competitor’s ad composition.*

---

## Phase 3: Generation & Execution

1. **Run the Gem:** Submit the five inputs. The Gem will “think” (reason) and output three blocks of code (Prompts A, B, and C) in JSON format.
2. **Copy the Prompt:** Select “Copy Code” on the variation you prefer (e.g., Prompt A).
3. **Paste into Nano Banana Pro:** Paste the copied JSON prompt into the Nano Banana Pro input field.
4. **Upload Reference Image:** If you specified a reference image in Phase 2 (e.g., a photo of your product), upload it now. Nano Banana Pro excels at taking existing references and inserting them into new scenes.
5. **Generate:** Run the model to produce the initial images.

---

## Phase 4: Refinement & Editing

Do not start from scratch if the image is close to perfect. Nano Banana Pro allows for high-quality minor edits without re-rolling the prompt.

1. **Analyze the Result:** If the image is 90% there but needs tweaks (e.g., background is wrong, text is misplaced), keep the image open.
2. **Conversational Edits:** Type instructions like a creative director to adjust specific elements.
    - *Example: “Make the background warmer,” “Move the text to the left,” or “Zoom out and place this mug in a coffee shop”.*
3. **Final Polish (Watermarks):** If the model leaves a watermark:
    - Download the image.
    - Upload it to a tool like Canva.
    - Use the “Magic Eraser” tool to remove the watermark.

---

### Summary checklist for every run:

- Did I provide all 5 inputs (Purpose, Audience, Subject, Brand, Reference)?
- Did I copy the JSON output?
- Did I attach my reference image in Nano Banana Pro?
