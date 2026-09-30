---
{"dg-publish":true,"permalink":"/ideaverse/collection/search-now-works-on-a-phone/","tags":["collection"],"dg-note-properties":{"description":"The Notebook's search box never worked on a phone; the cause was an invisible part of the page lying over the button, one line fixed it, and the fault is reported to the template's author","created":"2026-09-18","posted":"2026-09-18","section":"diary","resource-type":"case-study","categories":["[[ideaverse/Collection/Anapoly Notebook]]","[[ideaverse/Collection/Case studies]]"],"provenance":"collaborative","tags":["collection"]}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Search now works on a phone: a small case study

*Written by Alec Fearon on 18 September 2026 in Anapoly Diary*
*Transparency label: AI-assisted*
*<--- [[ideaverse/Collection/A notice beside the phone\|A notice beside the phone]]*

---

Until today the search box at the top of each page in this Notebook did not work on a phone. The same was true on a computer unless the browser window filled the whole screen. This morning Peka and I found out the cause. 

The search function itself does work. However, Peka found that an invisible part of the page layout lay over the button (so a mouse click or screen tap could not reach it) and fixed it by editing one line in the site's styling. 

The fault lay in the Digital Garden template this Notebook is built on. This is a piece of open source code used by many thousands of sites, all of which suffer from it too. We have reported it to the template's author as [issue 418](https://github.com/oleeskild/digitalgarden/issues/418), explaining the cause and supplying a fix. 