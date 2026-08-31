---
{"dg-publish":true,"permalink":"/ideaverse/collection/anapoly-notebook-home/","dg-note-properties":{"description":"Front page of the Anapoly Notebook","created":"2026-08-31","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"collaborative"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Anapoly Notebook

Anapoly Notebook is where we document our work in the day-to-day use of general-purpose AI. We reflect on what works and what doesn’t, and share our thinking as it develops. The diary provides a narrative thread through our thinking and development. [[ideaverse/Collection/The idea\|This is how it all started]].


```base
views:
  - type: table
    name: Recent diary entries
    filters:
      and:
        - categories.contains(link("Notebook diary"))
    order:
      - file.name
      - posted
      - description
    sort:
      - property: posted
        direction: DESC
    limit: 5
    columnSize:
      file.name: 300

```

