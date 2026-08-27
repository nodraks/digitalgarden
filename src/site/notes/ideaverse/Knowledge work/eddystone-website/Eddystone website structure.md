---
{"dg-publish":true,"permalink":"/ideaverse/knowledge-work/eddystone-website/eddystone-website-structure/","dg-note-properties":{"description":"the proposed page structure for the new Eddystone Search site, built against the Recruit CRM architecture, for Jim to react to","created":"2026-08-27","categories":["[[ideaverse/Collection/Eddystone]]"],"provenance":"peka"}}
---

[[ideaverse/Knowledge work/eddystone-website/Eddystone website requirements\|Requirements]] · [[ideaverse/Knowledge work/eddystone-website/Recruit CRM integration findings\|Recruit CRM findings]] · **Site structure**

# Eddystone website structure

A draft for Jim to react to, written 27 August 2026 against his answers in [[ideaverse/Knowledge work/eddystone-website/Eddystone website requirements\|Eddystone website requirements]] and the architecture in [[ideaverse/Knowledge work/eddystone-website/Recruit CRM integration findings\|Recruit CRM integration findings]]: a static site on the existing Cloudflare Worker, vacancies fetched from Recruit CRM, applications made on Recruit CRM's own forms. The site never receives a CV.

## The candidate's route

A candidate clicks an advert on a job board and lands on that vacancy's page on the site. The page shows the job and two actions: apply, which opens Recruit CRM's application form for that job, or request a confidential conversation, which is an email. Everything else on the site exists to make that landing feel credible: the firm's name, Jim's face, the other live vacancies, and the legal pages a careful candidate looks for.

## Pages

**Home** (`/`). Who Eddystone Search is and what it recruits: construction, site management and construction management roles. Jim's name and photograph, the client logo if confirmed, and two prominent routes onward, to the vacancies and to a confidential conversation. Formal and corporate in tone, built on the existing brand: the wordmark, the lighthouse watermark, `#223C5B` and `#99995D`.

**Vacancies** (`/jobs`). The live list, fetched by the Worker from the Recruit CRM API and cached for a few minutes. Each entry links to its own page. A job closed in the CRM drops off the site on its own, which answers the maintenance half of question 6: Jim posts and closes jobs in Recruit CRM and the site follows.

**One page per vacancy** (`/jobs/<reference>`). Title, location, salary where given, and the description, all from the API. The apply button opens Recruit CRM's hosted application form for that job, which takes the CV and the screening questions. Job-board adverts point at these pages, so every advert shows the candidate the brand and the rest of the live list before Recruit CRM takes over.

**About** (`/about`). Jim, his background, and Lily Burke if he wants her named. This page needs facts from Jim; the 2024 design document in OneDrive may already hold them.

**Contact** (`/contact`). The route for the confidential conversation. The candidate's other action, applying, already has its form, so this page can stay light: an email address, presented properly. A contact form is possible without storing anything, the Worker passing the message straight to email, but a bare address may serve; Jim's answer to question 10 leant towards a form, so this is his call once he sees the draft.

**Legal pages** (`/privacy`, `/terms`, `/cookies`). Required, and more than furniture: Eddystone is the data controller, so the privacy notice must say what is collected, that applications go to Recruit CRM as processor, and that CVs are kept for around twelve months. The 2024 prototype carried texts for all three; question 16 asks Jim whether they are still wanted, and they are the drafting base either way.

## Navigation

Header: wordmark linking home, then Vacancies, About, Contact. Footer: the three legal pages, the email address, and the registered business details. Nothing else; five public pages do not need menus within menus.

## Behaviour and fallback

The API token lives as a Worker secret and never reaches the browser, which is Recruit CRM's own requirement. If the API call fails, the vacancies page says the list is temporarily unavailable and gives the email address instead of an empty page. If Jim's tier turns out not to include the API at all, question 22, the structure keeps its shape with one substitution: `/jobs` embeds the hosted jobs page through the Website Integration link, the per-vacancy pages go, and adverts point at Recruit CRM's per-job links instead.

## What the draft needs from Jim

His answer to question 22 on the subscription tier; the SVG of the logo, question 17; a photograph and the facts for the About page; the client logo decision, question 7; whether the prototype's legal texts stand, question 16; and the example sites he mentioned, question 19. None of these blocks the build starting: the page frames, the Worker routing and the vacancies plumbing can all be built against a test job and restyled when the examples arrive.
