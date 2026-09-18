---
{"dg-publish":true,"permalink":"/ideaverse/collection/search-now-works-on-a-phone/","tags":["collection"],"dg-note-properties":{"description":"The Notebook's search box never worked on a phone; the cause was an invisible part of the page lying over the button, one line fixed it, and the fault is reported to the template's author","created":"2026-09-18","posted":"2026-09-18","section":"diary","resource-type":"case-study","categories":["[[ideaverse/Collection/Anapoly Notebook]]","[[ideaverse/Collection/Case studies]]"],"provenance":"collaborative","tags":["collection"]}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Search now works on a phone: a small case study

*Written by Alec Fearon on 18 September 2026 in Anapoly Diary*
*Transparency label: AI-assisted*
*<--- [[ideaverse/Collection/A notice beside the phone\|A notice beside the phone]]*

---

Until today the search box at the top of each page in this Notebook did not work on a phone. You could tap it as often as you liked and nothing happened. The same was true on a computer unless the browser window filled the whole screen. The Notebook's front page carried a note apologising for this fault.

This morning Peka and I found out the cause. The search function itself does work. However, an invisible part of the page layout lay over the button, so a mouse click or screen tap could not reach it. Peka found the overlap by asking the browser what sat at the spot where the button appeared, and the answer was the page's main block of text, not the button. An edit to one line in the site's styling fixed it. Search now works as it should, and Peka has taken the apology off the Notebook front page.

The fault lay in the free Digital Garden template this Notebook is built on, so every site using the template (and there are many thousands) has it too. We have reported it to the template's author, with the cause and the fix, as [issue #418](https://github.com/oleeskild/digitalgarden/issues/418).
