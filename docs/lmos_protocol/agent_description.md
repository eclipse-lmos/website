---
title: Agents
sidebar_position: 3
---

## Agent Description Format


The LMOS Agent Description Format builds on top of the Thing Description (TD) format from the Web of Things (WoT) specification and extends it by specifying an additional schema tailored to the needs of intelligent  agents. 

The format is structured similarly to the Thing Description but includes LMOS-specific properties to describe the agent’s capabilities and metadata. These additional properties are defined within the "lmos" namespace, ensuring they are clearly differentiated from standard WoT terms.

Here is the table and description for an **Agent** in the context of the **LMOS Protocol Vocabulary**:

| **Vocabulary Term** | **Value** | **Assignment** | **Type** |
|---------------------|-----------------|----------------|----------|
| **@context**         | https://eclipse.dev/lmos/protocol/v1 | Mandatory | URI |
| **@type**            | ns:Agent  | Mandatory | string


Example:

```
{
   "@context": [
      "https://www.w3.org/2022/wot/td/v1.1",
      {
         "lmos": "https://eclipse.dev/lmos/protocol/v1",
      }
   ],
   "@type": "lmos:Agent",
   "id": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
   "title": "Agent Name",
   "lmos:metadata": {
        "lmos:vendor": {
            "lmos:name": "Deutsche Telekom AG",
            "lmos:url": "https://telekom.de"
        }
   }
}
```

Full example:

```
{
   "@context": [
      "https://www.w3.org/2022/wot/td/v1.1",
      {
         "lmos": "https://eclipse.dev/lmos/protocol/v1",
      }
   ],
   "id": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
   "title": "WeatherAgent",
   "@type": "ex:Agent",
   "links": [{
      "rel": "service-doc",
      "href": "https://weatherai.example.com/manual.pdf",
      "type": "application/pdf",
      "hreflang": "en"
   }],
   "lmos:metadata": {
        "lmos:vendor": {
            "lmos:name": "Deutsche Telekom AG",
            "lmos:url": "https://telekom.de"
        }
   }
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic",
            "in": "header"
        }
    },
    "security": "basic_sc",
    "properties": {
        "modelConfiguration": {
            "description": "Current configuration of the underlying LLM, including version, temperature, and maximum tokens.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "modelName": {
                    "type": "string",
                    "description": "Name of the model in use, e.g., gpt-4o."
                },
                "temperature": {
                    "type": "number",
                    "description": "Temperature setting for controlling response randomness.",
                    "minimum": 0,
                    "maximum": 1
                },
                "maxTokens": {
                    "type": "integer",
                    "description": "Maximum number of tokens the model is allowed to generate."
                }
            },
            "forms": [
                {
                    "op": "readproperty",
                    "href": "https://weatherai.example.com/things/urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77/properties/modelConfiguration",
                    "contentType": "application/json"
                }
            ]
        }
    },
    "actions": {
        "getWeather": {
            "description": "Fetches weather information based on user input.",
            "safe": true,
            "idempotent": false,
            "synchronous": true,
            "input": {
               "type": "object",
                "properties": {
                    "question": {
                        "type": "string"
                    },
                    "interactionMode": {
                        "type": "string",
                        "enum": ["text", "voice"]
                    }
                },
                "required": ["question","interactionMode"]
            },
            "output": {
                "type": "string",
                "description": "Natural language output providing weather information."
            },            
            "forms": [
                {
                    "op": "invokeaction",
                    "href": "https://weatherai.example.com/things/urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77/actions/getWeather",
                    "contentType": "application/json",
                    "htv:methodName":"POST"
                }
            ]
        }
    },
    "events": {
        "userFeedbackReceived": {
            "description": "Emitted when a user provides feedback on the service, with a rating from 1 to 5.",
            "data": {
                "type": "object",
                "properties": {
                    "rating": {
                        "type": "integer",
                        "description": "User rating, where 1 is the lowest and 5 is the highest.",
                        "minimum": 1,
                        "maximum": 5
                    },
                    "comment": {
                        "type": "string",
                        "description": "Optional user comment providing additional feedback."
                    }
                },
                "required": ["rating"]
            },
            "forms": [
                {
                    "op": "subscribeevent",
                    "href": "https://weatherai.example.com/things/urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77/events/userFeedbackReceived",
                    "contentType": "application/json"
                }
            ]
        }
    }
}
```

## Agent Discovery

> EDITOR’S NOTE: 
In order to guarantee interoperability we may want to prescribe which discovery mechanisms (defined in the WoT Discovery specification) must be supported by Agents and Consumers.
As a minimum I suggest that we may want to require that Conformant Agents can serve their Thing Description from an HTTP URL. 
For more details see [LMOS Discovery](https://eclipse.dev/lmos/docs/multi_agent_system/agent_discovery)


## Agent Communication

To ensure interaction between agents, the following communication patterns must be supported:

1. **Request-Reply**  
   - Agents must be able to send requests and receive a single response, providing the requested information or acknowledgment.

2. **One Request-Multiple Responses**  
   - Agents must be able to handle requests that return multiple responses over time, accommodating ongoing updates or multiple pieces of information.

3. **Event-Driven/Notifications**  
   - Agents must support the ability to send notifications without expecting a reply, allowing for status updates.

4. **Publish-Subscribe**  
   - A mechanism must be in place to allow agents to publish messages or events and for other agents to subscribe and receive those messages.

5. **Request-Stream / Response-Stream**  
   - Continuous or real-time data streams must be supported, allowing agents to receive voice streams and response with voice streams.
