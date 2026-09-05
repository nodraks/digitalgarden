---
{"dg-publish":true,"permalink":"/ideaverse/collection/notebook-resources/","dg-note-properties":{"description":"The Anapoly Notebook's curated resources","created":"2026-08-31","categories":["[[ideaverse/Collection/Anapoly Notebook]]"],"provenance":"collaborative"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# Resources

A curated set of resources from our work with AI: case studies of the work itself, the people we read, and the standards, frameworks and tools we use. Each entry links to a short note saying what the resource is and where to find it.

> [!note]- Case studies: worked examples of a person and an AI assistant producing something useful together
> 
```base
views:
  - type: table
    name: Case studies
    filters:
      and:
        - note["section"] == "resource"
        - note["resource-type"] == "case-study"
    order:
      - file.name
      - description
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 250

```


> [!note]- Thought leaders: people whose writing and work shape how we think about AI
> 
```base
views:
  - type: table
    name: Thought leaders
    filters:
      and:
        - note["section"] == "resource"
        - note["resource-type"] == "thought-leader"
    order:
      - file.name
      - description
      - url
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 250

```


> [!note]- Standards: published standards we refer to
> 
```base
views:
  - type: table
    name: Standards
    filters:
      and:
        - note["section"] == "resource"
        - note["resource-type"] == "standard"
    order:
      - file.name
      - description
      - url
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 250

```


> [!note]- Frameworks: the frameworks Anapoly AI Labs works to
> 
```base
views:
  - type: table
    name: Frameworks
    filters:
      and:
        - note["section"] == "resource"
        - note["resource-type"] == "framework"
    order:
      - file.name
      - description
      - url
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 250

```


> [!note]- Tools: prompts and workflows we use and recommend
> 
```base
views:
  - type: table
    name: Tools
    filters:
      and:
        - note["section"] == "resource"
        - note["resource-type"] == "tool"
    order:
      - file.name
      - description
      - url
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 250

```

