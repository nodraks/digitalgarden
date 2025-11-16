---
{"dg-publish":true,"permalink":"/notes/2025-11-16-171505-hybrid-ai-system-agent/","title":"2025-11-16-171505 Hybrid AI system agent","created":"2025-11-16T17:15:05.786+00:00","updated":"2025-11-16T17:43:30.816+00:00"}
---

 <a href="https://anapoly.co.uk/labs">Anapoly Notebook</a> | [[digital garden/Digital Garden\|Digital Garden]] 
 
**Status:** 🔸 Seed → ✅ Growing → 🔸 Well-formed → 🔸 Fruitful → 🔸 Retired

Transparency label: AI-only

---

# The Agent in a Hybrid AI System

**The agent is a software system, not a model.**  
It’s written in ordinary code (Python, Node, Go, whatever). It has modules, APIs, state management, error handling, logs, and a workflow engine. Inside that software, the agent _calls_ AI models as needed. The models are interchangeable components, not the agent itself.

A workable agent usually contains:

1. **A planning module**  
    Sometimes powered by an LLM, sometimes rule-based.  
    It decides: “Do step A, then B, check conditions, then C.”
    
2. **A tool-calling layer**  
    This is pure software. It knows how to call your CRM API, your calendar API, your SLM inference endpoint, etc.
    
3. **A state store**  
    Agents need memory of what they’ve done. That’s conventional database logic, not AI magic.
    
4. **Guardrails and policy checks**  
    Also traditional software.  
    “You’re not allowed to call the LLM unless condition X is met.”
    
5. **SLM and LLM connectors**  
    These are wrappers: take a prompt, send it to a model, get structured output back.
    
6. **Human-in-the-loop integration**  
    An approval UI, an email with a link, a dashboard.  
    Again: software.
    

So the agent is software that happens to employ one or more AI models. If the agent were itself an SLM or an LLM, it would be a clever model with no hands — no API calls, no integrations, no persistence, no guarantees.

This distinction is important for risk, governance, and reliability:

- The **agent** handles control flow, safety, escalation, audit trails.
    
- The **SLM/LLM** provides judgement, classification, drafting, or reasoning.