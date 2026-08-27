---
{"dg-publish":true,"permalink":"/ideaverse/knowledge-work/eddystone-website/recruit-crm-integration-findings/","dg-note-properties":{"description":"what Recruit CRM's jobs page, application forms and API offer the Eddystone website, researched from public documentation on 27 August 2026","created":"2026-08-27","categories":["[[ideaverse/Collection/Eddystone]]"],"provenance":"peka"}}
---

← Back to [[ideaverse/Knowledge work/eddystone-website/Eddystone website requirements\|Eddystone website requirements]]

# Recruit CRM integration findings

Researched by Peka on 27 August 2026 from Recruit CRM's public documentation, help centre and pricing page. Nothing here has been tested against a live account; Jim's subscription is paused, and the points marked open need his account or their support to settle.

## What Recruit CRM provides

Every account has a hosted public jobs page, configured under Admin Settings, Public Job Page Settings. The agency chooses the colour scheme and logo, and each job also carries a unique link that can be shared directly, which is what a job-board advert would point at. The page can be embedded in an external site through a "Website Integration" link on the Job Page Integration tab, pasted into an HTML embed block.

Each job has its own application form. The recruiter builds a library of questions, picks which appear on a given job's form, sets which fields are mandatory, hides the rest, reorders them, and edits the field labels. Candidates upload a CV, cover letter or portfolio per job. The application flows straight into the CRM.

The REST API at `api.recruitcrm.io/v1` authenticates with a bearer token. `GET /jobs/search?job_status=1` returns the open jobs as paginated JSON, including each job's description, salary fields and application URL. There is also an endpoint that creates a candidate. Recruit CRM's own careers-page guidance warns that the token must never be queried from the front end; a server must hold it.

## Plans and price

The published tiers are Pro at $85, Business at $125 and Enterprise at $165 per user per month, billed annually, with monthly billing costing more. Open API access starts at Business; Pro has none. Recruit Craft, their builder for full career pages and candidate portals, is Enterprise only, and nothing in Jim's requirements needs it. Which tier the subscription is on is a question for Jim, in the requirements file as question 22.

## Data roles

Recruit CRM's data processing agreement states that Recruit CRM acts as Processor and processes personal data only on behalf of the Controller. Eddystone would therefore be the data controller for candidate data, whatever the site's architecture, and would need its own privacy notice and, in the normal case for a UK recruiter, an ICO registration. This refines the answer to question 15 in [[ideaverse/Knowledge work/eddystone-website/Eddystone website requirements\|Eddystone website requirements]]: Recruit CRM handle the data obligations on their side, and the controller duties sit with Eddystone.

## What this means for the build

The finding that matters: the site never needs to receive a CV. The architecture that follows is a static site on the existing Cloudflare Worker, with the Worker fetching open jobs server-side from the API, so the token stays hidden, and each vacancy's apply button pointing at Recruit CRM's hosted per-job application form. The upload precautions in the requirements file, file validation, malware scanning, storage keys and retention enforcement, all fall to Recruit CRM. If Jim's tier turns out to lack the API, the fallback loses none of the flow: embed the hosted jobs page through the Website Integration link, which appears to need no particular plan.

## Open points

- Which tier Jim's subscription is on, and whether it includes the API. Jim can read this from his billing page when he unpauses.
- Whether the application form can disqualify automatically. The help centre documents custom questions but not knockout behaviour; Recruit CRM's site defines knockout questions only in a glossary. If the form cannot reject, the disqualifiers Jim wants become manual screening.
- How far the hosted application form can be styled towards the formal, corporate look Jim asked for, beyond colour scheme and logo.
- Where Recruit CRM stores the data, and whether UK or EU residency can be required.

## Sources

- [Jobs Page Integration](https://recruitcrm.io/jobs-page-integration/)
- [Integrating the Jobs Page with Wix](https://help.recruitcrm.io/en/articles/5269980-integrating-your-recruit-crm-jobs-page-with-wix)
- [Customize Job Application Form](https://help.recruitcrm.io/en/articles/2970457-customize-job-application-form)
- [Job-Specific Application Form](https://help.recruitcrm.io/en/articles/8819887-job-specific-application-form)
- [Commonly used API Endpoints for Careers Page, Part 1](https://help.recruitcrm.io/en/articles/11142291-commonly-used-api-endpoints-for-careers-page-part-1)
- [API reference, Getting Started](https://docs.recruitcrm.io/docs/rcrm-api-reference/ZG9jOjMyNzk0NA-getting-started)
- [Creates a new candidate](https://docs.recruitcrm.io/docs/rcrm-api-reference/ba451e2a3bd63-creates-a-new-candidate)
- [Pricing](https://recruitcrm.io/pricing/)
- [Data processing agreement](https://recruitcrm.io/legal/data-processing-agreement/)
- [Knockout questions glossary entry](https://recruitcrm.io/glossary/knockout-questions/)
