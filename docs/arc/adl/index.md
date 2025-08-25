---
sidebar_position: 2
---

# ARC Agent Definition Language

### Agent Definition Language (ADL) – Simplifying AI Agent Design

---

## Why it matters

Traditional prompting for AI agents is **complex, inconsistent, and brittle**.

Each new LLM release or behavior change requires re-tuning prompts—a process that is **time-consuming and hard to scale**.

**ADL (Agent Definition Language)** solves this by introducing a **structured, standardized, and model-agnostic way** to define agent behavior.

---

## Key Benefits

**1. Business-Friendly**

- Anyone not just technical experts—can define and manage agent behavior.
- Reduces reliance on prompt-engineering specialists and engineers.
- Business requirements are defined directly by business in the Agent  ( *highlight this )* especially useful in enterprises where complex reqs and overlaps impact time to market and need predivatlbit

**2. Standardized & Scalable**

- Encapsulates behavior into **use cases** with clear steps, solutions, and fallbacks.
- Provides **consistency across models** and across customer scenarios.

**3. Resilient to Model Changes**

- Decouples agent logic from raw prompts.
- When models evolve, ADL ensures **minimal rework**.

**4. Extensible & Flexible**

- Supports **conditionals** for personalization.
- Enables **tool calls** (@function()) for dynamic execution.
- Allows **use case references** to link complex workflows.

**5. Operational Reliability**

- Built-in **fallbacks** prevent failure loops.
- Structured **validation of tools and references** ensures robustness.

---

## Business Impact

- **Faster time-to-market** for new agent behaviors.
- **Lower cost of maintenance** as agents evolve.
- **Greater adoption** since business teams can contribute directly.
- **Future-proofing** against LLM drift and vendor lock-in.

---

👉 Think of ADL as the **“agent behavior standard”**—the same way SQL standardized database queries, ADL standardizes how we define intelligent agents.

- [Trying ADL](trying_adl.md)
- [Technical Details](adl_technical.md)
- [🚀 Learn ARC ADL in 15 Minutes: Business/Product](00-adl_learn.md)
- [ADL cheat sheet](adl_cheat.md)