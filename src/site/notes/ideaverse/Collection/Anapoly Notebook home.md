---
{"dg-publish":true,"permalink":"/ideaverse/collection/anapoly-notebook-home/","dg-note-properties":{"description":"Front page of the Anapoly Notebook","created":"2026-08-31","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"collaborative"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Anapoly Notebook

Anapoly Notebook is where we document our work, reflecting on what succeeds and what doesn’t, and share our thinking as it develops. The diary provides a narrative thread through our progress. This dairy post explains [[ideaverse/Collection/The idea\|how it all started]].

*Note: the search box at the top of the screen does not yet work on a mobile phone.*


```base
views:
  - type: table
    name: Recent diary entries
    filters:
      and:
        - note["section"] == "diary"
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

