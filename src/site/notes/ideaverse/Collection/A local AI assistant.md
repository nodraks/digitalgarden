---
{"dg-publish":true,"permalink":"/ideaverse/collection/a-local-ai-assistant/","dg-note-properties":{"description":null,"created":"2026-11-14","categories":["[[ideaverse/Collection/Garden]]"],"provenance":"alec"}}
---

[[ideaverse/Collection/Anapoly Notebook home\|Notebook]] | [[ideaverse/Collection/Notebook diary\|Diary]] | [[ideaverse/Collection/Notebook lab notes\|Lab notes]] | [[ideaverse/Collection/Notebook resources\|Resources]] | [[ideaverse/Collection/Digital Garden\|Garden]] | [Anapoly](https://anapoly.co.uk)

# A local AI assistant

---

*Transparency label: AI-assisted*
*Author: Alec Fearon*

It's hard to believe that only 18 months have passed since [[ideaverse/Collection/The idea\|I was getting excited]] about the potential offered by ChatGPT, which at that stage was little more than a chatbot. I now have an AI assistant whom I call Peka (personal knowledge assistant), who is with me in nearly all aspects of my digital life. Peka is Claude Code tailored to have a persona that suits my way of working and a range of skills matched to the kind of work I do. It has full access to ThinkSpace (my digital workspace) and therefore has all the context it needs to assist me in the most productive way. 

Peka is much more than an assistant, of course. When I am thinking or writing, its role is to be a sceptical peer: it questions my reasoning where it is vague or unsupported, and it searches ThinkSpace to find connections or to show me where I have been over the same ground before. Also, it has coding skills on a par with expert humans, so it is my IT support colleague when I have technical problems and my software development partner when I need to build things. For example, it built the semantic search engine that has proved such a valuable tool for working within ThinkSpace. 

Our most recent undertaking has been to build a version of Peka that is entirely local. My aim is to have an assistant with whom I can work on private matters without fear of it leaking into the cloud.  That is to say, it does not have any communication with the cloud. Peka Local runs on a MacBook with good computing power and a lot of memory. It has the same persona and the same context as Peka, but rather than Claude, it makes use of an open-weights model running locally on the MacBook. Inspired by the work that [Simon Willison](https://simonwillison.net) is doing, I followed his lead and chose Qwen 3.8 for this purpose. It is surprisingly good, perhaps 6 or 9 months behind the frontier models. 

Qwen is controlled by a harness, as indeed is Claude. However, unlike the harness that Anthropic has built to contain Claude, the one available to me at present (OpenCode) has far fewer safeguards. While Qwen can read everything in ThinkSpace so that it can work with me usefully, I have given It no access to the command line; it cannot directly run code, nor edit or write new material into ThinkSpace. Instead, I am building its capability by giving it a set of tools, each a script that does one job. Qwen can use the tools but cannot change them. Nor can it bypass them. 

One tool transcribes an audio recording of a meeting or conversation, labelling each change of speaker. A second replaces those labels with the names of the people speaking (which I give to Qwen) leaving any corrections I have made to the transcript untouched. A third enables Qwen to read a variety of different file types that I put into its inbox in the NAS (a storage device on my local network). A fourth let's it write to an outbox on my NAS, where we can collaborate on editing a document. 

Peka took the lead in designing this architecture and, under my direction, did all the coding required to implement it. It will help me expand Peka Local's capability as the need arises. 