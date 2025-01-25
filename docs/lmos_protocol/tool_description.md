---
title: Tools
sidebar_position: 4
---

A Tool in the LMOS Protocol refers to a resource or system that an agent can utilize to accomplish a specific task. For example, a weather API is a tool that an agent might interact with to get weather data.

LMOS Tools, similar to Agents, can have a state (properties), can perform actions and emit events. State represents the Tools’s current configuration. Actions define the tasks the Tool can perform. Events allow the Tool to proactively notify event consumers about important changes.

## Tool Description Format

The LMOS Tool Description Format builds on top of the Thing Description (TD) format from the Web of Things (WoT) specification, similar to the Agent Description Format.

Here is the table and description for a **Tool** in the context of the **LMOS Protocol vocabulary**:


| **Vocabulary Term** | **Value** | **Assignment** | **Type** |
|---------------------|-----------------|----------------|----------|
| **@context**         | https://eclipse.dev/lmos/protocol/v1 | Mandatory | URI |
| **@type**            | ns:Tool  | Mandatory | string


Example:

```
{
   "@context": [
      "https://www.w3.org/2022/wot/td/v1.1",
      {
         "lmos": "https://eclipse.dev/lmos/protocol/v1",
      }
   ],
   "@type": "lmos:Tool"
   "id": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "title": "Tool Name",
   "lmos:metadata": {
        "lmos:vendor": {
            "lmos:name": "Deutsche Telekom AG",
            "lmos:url": "https://telekom.de"
        }
   }
}
```

## Tool Discovery

> EDITOR’S NOTE: 
In order to guarantee interoperability we may want to prescribe which discovery mechanisms (defined in the WoT Discovery specification) must be supported by Tools and Consumers.
As a minimum we suggest that we may want to require that conformant Tools can serve their Thing Description from an HTTP URL.
For more details see [LMOS Discovery](https://eclipse.dev/lmos/docs/multi_agent_system/agent_discovery).


## Tool Communication

To ensure interaction between agents and tools, the following communication patterns must be supported:

1. **Request-Reply**  
   - Agents must be able to send requests to tools and receive a single response, providing the requested information or acknowledgment.

2. **One Request-Multiple Responses**  
   - Agents must be able to use tools that return multiple responses.

3. **Publish-Subscribe**: 
    - A mechanism must be in place to allow agents to subscribe to events from tools.