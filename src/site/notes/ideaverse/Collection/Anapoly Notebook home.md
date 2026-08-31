---
{"dg-publish":true,"permalink":"/ideaverse/collection/anapoly-notebook-home/","dg-note-properties":{"description":"Front page of the Anapoly Notebook","created":"2026-08-31","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"collaborative"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [Garden](https://anapoly.netlify.app) | [Anapoly](https://anapoly.co.uk)

# Anapoly Notebook

Stub. The Notebook's front page: what the Notebook is, with the latest diary entries listed below.

## Recent diary entries


```base
views:
  - type: table
    name: Recent entries
    filters:
      and:
        - categories.contains(link("Notebook diary"))
    order:
      - file.name
      - published
      - description
    sort:
      - property: published
        direction: DESC
    limit: 5
    columnSize:
      file.name: 300

```

