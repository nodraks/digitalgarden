---
{"dg-publish":true,"permalink":"/ideaverse/knowledge-work/eddystone-website/eddystone-website-requirements/","dg-note-properties":{"description":"the questions to put to Jim about the new Eddystone Search website, and his answers","created":"2026-08-24","categories":["[[ideaverse/Collection/Eddystone]]"],"provenance":"collaborative"}}
---

# Eddystone website requirements

Jim answered by audio on 27 August 2026; the transcription is [[ideaverse/Knowledge work/eddystone-website/2026-08-27-1129 Eddystone-Search website requirements audio1\|2026-08-27-1129 Eddystone-Search website requirements audio1]]. Each answer stands beneath its question; a question with nothing beneath it is still open.

## Purpose and audience

1. What is the site for? Winning candidates, winning clients, or standing as proof the firm exists when someone looks it up.

    A landing page for candidates responding to online job adverts. The immediate campaign, which will probably start soon, is about 20 jobs in Canada, advertised in perhaps four adverts on job boards, and each advert needs somewhere for applications to click through to. An email address alone would leave an inbox that gets swamped.


2. Who arrives at it, and how? A candidate sent a link, a hiring manager checking credentials, or someone searching for a recruiter in a sector.

    A candidate clicking a link in a job-board advert. No hiring managers checking credentials; Jim or somebody else reviews the applications.


3. What should a visitor do before leaving? Register, send a CV, telephone, or simply remember the name.

    Apply to a job, or send an email requesting a confidential time to talk about the opportunities.


4. Which of those matters most, if the site does only one thing well?

    Either of those two is equally important, Jim says.

## Content

5. Which sectors and role types does Eddystone Search cover? The AI project holds a role-types document from earlier work.

    Construction only, for now. Site management and construction management roles: site managers, senior site managers, quantity surveyors, project managers, estimators and planners.


6. Are live vacancies to be listed? If so, who posts them, how often, and what happens to one that is filled.

    Yes. The audio does not say who posts them, how often, or what happens to a filled one.


7. Whose names and faces appear? A single named consultant, a team, or no people at all.

    Jim's name and face. There may be a client logo, which he will confirm soon.


8. Is there existing copy?

9. Are there client logos, testimonials or case studies he can use, and has anyone given permission for them?

    A client logo, possibly, to be confirmed soon. The audio says nothing on testimonials or case studies.


## What the site has to do

10. Does it need a contact form, or is a telephone number and an email address enough?

    It probably does need a contact form, so that candidates can provide all the necessary information. Jim would also find it helpful if the form could carry gross negative disqualifiers, such as a minimum amount of experience or a clean criminal record, to kick out candidates who are not in the UK, have criminal convictions or cannot get passports.


11. Does it need CV upload? This is the single biggest decision: it turns a static site into one that receives and stores other people's personal data.

    Yes, a CV will be required.

> Accept PDF and DOCX only, validated server-side, never only in the browser;
> cap the file size;
> discard the browser-supplied filename, generate the storage key, keep the   original name as metadata;
> decide on malware scanning, which no platform here does by default. The exposure is to whoever opens a CV, so it stays small provided uploaded files are never served back to the public;
> check whether UK or EU data residency is required.


12. How long should an uploaded CV be kept?

    Maybe 12 months.


13. Who besides Jim should be able to read one?

    Lily Burke, who is working with Jim; he is going to try to give her access.


14. Does he expect to search across the CVs he holds?

    Yes, but through Recruit CRM, not through the site. Jim cancelled his Recruit CRM subscription because he was not using it much; it is on pause at £125 a month, cancellable whenever he wants, and he will probably revive it. The site would then use Recruit CRM's API so that candidates go straight through onto the CRM, which he says he can get happening overnight.


15. Should candidates be able to register an account, or is that more than the business needs?

    No.


16. Does anything connect to the Eddy-CV or Eddy-Jobs agents, now or later?

    Not now. Jim may later want candidate CVs put through the Eddy-CV agent so that they are transformed into his house style; Alec supplied this reading on 27 August 2026, the audio saying only that candidates might connect to the Eddy-CV and Eddy-Jobs agents later.

Question 14 decides the size of the build: a form that stores files is a small
project; a searchable store is a system. Jim's answer takes the searchable store off the build: Recruit CRM holds and searches the CVs.
## Data and obligations

14. If the site takes CVs or registrations, where does that data go, who reads it, and how long is it kept? A retention schedule will be needed, with something that enforces it.

    The data would go to Recruit CRM. Jim or somebody else reads applications, with access for Lily Burke intended, and an uploaded CV would be kept for maybe 12 months.


15. Who is the data controller, and is there an ICO registration?

    Jim says Recruit CRM are the data controller and have all the necessary data obligations in place. The audio says nothing about an ICO registration.


16. The prototype we produced a year ago carried terms, cookies and data privacy pages. Are those texts still wanted?

## Look and tone

17. Is there an SVG formatted file for the logo?

    Jim thinks so, but he would have to check.


18. What should the site sound like: formal and corporate, or plain and direct?

    Formal and corporate, probably.


19. Are there sites Jim likes, whether competitors or not, and what does he like about them?

    He will send some similar sites when he has more time.


## Practicalities

21. Is there a date it has to be ready by, and what drives that date?

    No date given, but the Canada campaign, four adverts for about 20 jobs, will probably start soon, and the client wants to do online advertising.

