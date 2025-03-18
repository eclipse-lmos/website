---
title: LMOS Router
---

# LMOS Router

The **LMOS Router** is a vital component of the LMOS architecture. The LMOS Runtime and LMOS Router are usally part of a Supervisor Agent in a multi-agent system.

Upon receiving a query, the LMOS Runtime loads relevant channel routing configurations (agent metadata) via the LMOS Operator based on the specific channel and tenant involved. This enables the LMOS Runtime to make an informed routing decision through the LMOS Router, which leverages either a Vector Database or a Large Language Model (LLM) for this purpose. Once a routing decision is made, the Supervisor Agent coordinates with multiple specialized AI Agents to execute the necessary tasks.

![LMOS Router](/img/supervisor_agent-light.png#light-mode-only)
![LMOS Router](/img/supervisor_agent-dark.png#dark-mode-only)

The LMOS Router relies on agent metadata to identify the most appropriate agent for a given task, based on the agent's capabilities. To achieve this, the Router offers three distinct methods:

- **LLM-based Approach:** This method utilizes a language model to comprehend and match a task with the relevant agent's capabilities. It enables the Router to understand the context and requirements of the query at a deeper level, ensuring an optimal routing decision.
  
- **Vector-based Approach:** In this approach, semantic similarity is employed to identify the most suitable agent by comparing the query with agent profiles stored in a vector space. It helps the Router quickly determine the agent whose expertise most closely aligns with the task at hand.
  
- **Hybrid Approach:** This method combines the strengths of both LLM and vector-based approaches. Initially, the LLM extracts abstract requirements from the query, and then the Router performs a semantic search to find the agent that best matches those requirements. The Hybrid Approach maximizes the effectiveness of both techniques, improving the quality and accuracy of routing decisions.

## Routing Methods

### LLM-Based Approach

Uses advanced language models like OpenAI's GPT-3.5 to understand the context and semantics of user queries.

**Pros:**
- Understands complex queries and context.
- Flexible and adaptable to various scenarios.
- Utilizes state-of-the-art NLP techniques.

**Cons:**
- Expensive due to commercial language model costs.
- Higher response times.
- Dependent on external APIs with potential rate limits.

### Vector-Based Approach

Uses vector embeddings to represent queries and agent capabilities, comparing them using cosine similarity.

**Pros:**
- Fast and efficient for large-scale data.
- Scalable to handle more agents and queries.
- Independent of external APIs.

**Cons:**
- Limited in understanding complex queries.
- Requires initial setup and regular updates.
- Needs maintenance for embedding updates.

### Hybrid Approach

Extracts abstract requirements from the query using an LLM and then searches for an agent using semantic similarity.

**Pros:**
- Balances the strengths of both LLM and Vector-based approaches.
- Better understanding of complex queries than vector-based alone.
- More efficient than LLM-based alone.

**Cons:**
- Still dependent on external APIs for LLM.
- Requires integration of both LLM and vector-based systems.
