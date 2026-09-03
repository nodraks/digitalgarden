---
{"dg-publish":true,"permalink":"/ideaverse/collection/notebook-lab-notes/","dg-note-properties":{"description":"The Anapoly Notebook's lab notes, newest first","created":"2026-08-31","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"collaborative"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Lab notes

Each lab note records one experiment: what we set out to test, how we ran it, what we found, and what we recommend. Each carries its transparency label.


```base
views:
  - type: table
    name: All lab notes
    filters:
      and:
        - note["section"] == "lab-note"
    order:
      - file.name
      - posted
      - description
    sort:
      - property: posted
        direction: DESC
    columnSize:
      file.name: 300

```

