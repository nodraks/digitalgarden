---
{"dg-publish":true,"permalink":"/ideaverse/knowledge-work/eddystone-website/eddystone-website-requirements/","dg-note-properties":{"description":"the questions to put to Jim about the new Eddystone Search website, and his answers","created":"2026-08-24","categories":["[[ideaverse/Collection/Eddystone]]"],"provenance":"collaborative"}}
---

# Eddystone website requirements

Jim's requirements, recorded as he gives them. The questions below are a first draft for Alec to cut down before meeting him; nothing here has been put to Jim yet.

Where an answer arrives, write it under the question and date it. Where Jim has no view, say so rather than leaving the question blank, so that a later reader can tell an unasked question from an open one.

## Purpose and audience

1. What is the site for? Winning candidates, winning clients, or standing as proof the firm exists when someone looks it up.
2. Who arrives at it, and how? A candidate sent a link, a hiring manager checking credentials, or someone searching for a recruiter in a sector.
3. What should a visitor do before leaving? Register, send a CV, telephone, or simply remember the name.
4. Which of those matters most, if the site does only one thing well?

## Content

5. Which sectors and role types does Eddystone Search cover? The AI project holds a role-types document from earlier work.
6. Are live vacancies to be listed? If so, who posts them, how often, and what happens to one that is filled.
7. Whose names and faces appear? A single named consultant, a team, or no people at all.
8. Is there existing copy?
9. Are there client logos, testimonials or case studies he can use, and has anyone given permission for them?

## What the site has to do

10. Does it need a contact form, or is a telephone number and an email address enough?
11. Does it need CV upload? This is the single biggest decision: it turns a static site into one that receives and stores other people's personal data.

> Accept PDF and DOCX only, validated server-side, never only in the browser;
> cap the file size;
> discard the browser-supplied filename, generate the storage key, keep the   original name as metadata;
> decide on malware scanning, which no platform here does by default. The exposure is to whoever opens a CV, so it stays small provided uploaded files are never served back to the public;
> check whether UK or EU data residency is required.
  
12. How long should an uploaded CV be kept?
13. Who besides Jim should be able to read one?
14. Does he expect to search across the CVs he holds?
15. Should candidates be able to register an account, or is that more than the business needs?
16. Does anything connect to the Eddy-CV or Eddy-Jobs agents, now or later?

Question 14 decides the size of the build: a form that stores files is a small
project; a searchable store is a system.
## Data and obligations

14. If the site takes CVs or registrations, where does that data go, who reads it, and how long is it kept? A retention schedule will be needed, with something that enforces it.
15. Who is the data controller, and is there an ICO registration?
16. The prototype carried terms, cookies and data privacy pages. Are those texts still wanted?

## Look and tone

17. Is there an SVG formatted file for the logo?
18. What should the site sound like: formal and corporate, or plain and direct?
19. Are there sites Jim likes, whether competitors or not, and what does he like about them?

## Practicalities

21. Is there a date it has to be ready by, and what drives that date?
## Answers


