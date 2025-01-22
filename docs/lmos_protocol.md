---
title: LMOS Protocol
---

# LMOS Protocol

## Abstract

This document outlines the use cases and requirements for the LMOS Protocol (Language Model Operating System Protocol). Designed as an ontology and sub-protocol within the [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/), the LMOS Protocol aims to establish interoperability between AI agents, tools, and other resources, bridging organizational boundaries and diverse ecosystems.

The primary goal of the LMOS Protocol is to pave the way for an Internet of Agents—a dynamic and interconnected ecosystem where AI agents and tools, developed by various organizations, can be easily published, discovered, and seamlessly utilized across platforms.
This vision builds upon the evolution of the Internet of Things (IoT), extending its foundational principles to internet-scale multi-agent systems. 

By defining standardized communication patterns, metadata models, and interaction mechanisms, the LMOS Protocol enables:

* Interoperability: Ensuring agents and tools from different ecosystems can understand and interact with each other.
* Discoverability: Facilitating the discovery of agents and tools that match specific needs or tasks.
* Scalability: Supporting the addition of new agents and tools without disruption.
* Transport Agnosticism: Allowing developers to use diverse communication protocols (e.g., HTTP, WebSocket, MQTT) without modifying application logic.
* Ecosystem Collaboration: Empowering organizations to integrate their AI capabilities into a larger ecosystem, benefiting from collective intelligence.


## Status of This Document
This document is published by the Eclipse LMOS Working Group. It is not yet a W3C Standard nor is it on the W3C Standards Track. However, we plan to initiate the formal W3C process once the document reaches a mature state.

Please note that this document is a work in progress and contains empty sections.

GitHub Issues are preferred for discussion of this specification. Alternatively, you can join our Discord channel.


**Latest published version:**  
[https://eclipse.dev/lmos/docs/lmos_protocol](https://eclipse.dev/lmos/docs/lmos_protocol)  

**GitHub Repository:**  
[https://github.com/eclipse-lmos/lmos-protocol](https://github.com/eclipse-lmos/lmos-protocol)  

**Issue Tracker:**  
[https://github.com/eclipse-lmos/lmos-protocol/issues](https://github.com/eclipse-lmos/lmos-protocol/issues)  

**Commit History:**  
[https://github.com/eclipse-lmos/lmos-protocol/commits/main/](https://github.com/eclipse-lmos/lmos-protocol/commits/main/)  

**Editors:**  
* Robert Winkler (Deutsche Telekom AG)  

**Contributors:**   
https://github.com/eclipse-lmos/lmos-protocol/graphs/contributors

## Introduction 

The LMOS Protocol is designed to standardize communication between AI agents, their tools, and consumers, providing a universal interface for seamless integration. Similar to how a USB-C port enables a wide variety of devices and accessories to connect, the LMOS Protocol allows tools to be easily plugged into agents, agents to collaborate within multi-agent systems, and agents to be integrated into existing applications, regardless of the underlying technologies. This flexibility fosters an ecosystem where diverse AI capabilities can be easily interconnected and utilized in a wide range of scenarios.

The goal of [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/) is to address fragmentation across the Internet of Things (IoT) by building upon widely adopted web technologies. By introducing standardized metadata and reusable technological building blocks, W3C WoT facilitates seamless integration across platforms and application domains. A cornerstone of WoT is the Thing Description (TD), which provides an information model and JSON-LD representation format for describing the capabilities of "things".

By leveraging the Thing Description (TD) abstraction from the WoT, the LMOS Protocol simplifies the discovery, description, and interaction of agents and tools, while remaining transport-agnostic. This enables developers to switch communication standards (e.g., from HTTP to MQTT or WebSocket) or media types (e.g., from JSON to CBOR) without requiring changes to application logic.

The LMOS Protocol (Language Model Operating System Protocol) extends this concept to the realm of multi-agent systems and AI-driven applications. It offers a standardized way for agents, tools, data sources, and applications to interact with one another, leveraging the flexibility and protocol-agnostic nature of WoT. 

Unlike other protocols, like the Model Context Protocol (MCP) by Anthropic, that tie communication to specific technologies (JSON-RPC), LMOS Protocol offers the adaptability needed for modern distributed systems. For example, developers can seamlessly switch from HTTP to WebSocket or from JSON to CBOR, ensuring future-proof and scalable implementations. Furthermore, the protocol addresses challenges in ad-hoc interoperability by defining an HTTP sub-protocol for REST-based interactions and a WebSocket sub-protocol for real-time communication. These sub-protocols ensure compatibility with existing web standards, enabling real-time communication, secure data exchange, and scalable interoperability for multi-agent systems. By supporting both synchronous and asynchronous communication patterns, the LMOS protocol adapts to a broad range of use cases.

## Use Cases

The LMOS Protocol is particularly designed for multi-agent systems, where interoperability and flexibility are critical. 

Below are use cases for the LMOS protocol:

### Customer Service

#### **Scenario 1: Agent Collaboration with Natural Language**

1. **Proactive Resolution of Connectivity Issues**  
   - **Scenario**: A telecom customer interacts with a chatbot to report an internet connection issue.  
   - **Agent Collaboration**: The chatbot uses natural language to request troubleshooting data from a network diagnostics agent and interacts with a service agent from the equipment provider to ensure that the issue is investigated in real-time.  
   - **Outcome**: The chatbot provides proactive troubleshooting by collaborating across multiple agents in different companies, helping the customer resolve the issue quickly.

#### **Scenario 2: Agents Using Tools Provided by Other Companies**

1. **Supply Chain Issue Resolution**  
   - **Scenario**: A customer service agent from an online store is handling a supply chain delay due to raw material shortages.  
   - **Agent Collaboration**: The agent uses a tool (LLM functions) provided by a third-party logistics provider to check inventory availability and estimate shipping dates.  
   - **Outcome**: The agent provides the customer with a resolution that is based on an external tool to find alternative suppliers, ensuring that the shipping process continues smoothly despite delays.

### **Manufacturing**

#### **Scenario 1: Agent Collaboration with Natural Language**

* **Collaborative Quality Control Across Suppliers**  
   - **Scenario**: A quality control agent detects defects in components from a supplier.  
   - **Agent Collaboration**: The agent uses natural language to query a production data agent from the supplier to request defect details and interacts with a process optimization agent to suggest improvements.  
   - **Outcome**: By using natural language, the agents from different companies collaborate effectively to identify the issue and propose corrective actions, leading to improved product quality.

#### **Scenario 2: Agents Using Tools Provided by Other Companies**

* **Machine Diagnostics with Third-Party Tools**  
   - **Scenario**: A factory’s machine breakdown is affecting the production schedule.  
   - **Agent Collaboration**: The factory’s maintenance agent invokes a diagnostics tool (LLM function) provided by a machine manufacturer to remotely diagnose the issue and suggest repairs.  
   - **Outcome**: The agent uses an external tool to identify the problem and resolve the issue without requiring direct manufacturer intervention, ensuring production downtime is minimized.

### **Smart Home**

#### **Scenario 1: Agent Collaboration with Natural Language**

* **Energy Consumption Optimization Across Devices**  
   - **Scenario**: A user wants to adjust the temperature in both the living room (connected to Google Home) and the bedroom (connected to Amazon Alexa). The devices are from different providers and don't natively communicate.
   - **Agent Collaboration**: The user sends a natural language command: “Set the living room to 70°F and the bedroom to 70°F.” to a central smart agent which relays the request to Amazon Alexa for the bedroom thermostat and Google Assistant for the Nest thermostat. 
   - **Outcome**: Both thermostats are adjusted to 70°F, with the command seamlessly passed between different ecosystems, providing a unified user experience.

#### **Scenario 2: Agents Using Tools Provided by Other Companies**

* **Home Security Management**  
   - **Scenario**: A home security system identifies an anomaly in video surveillance.  
   - **Agent Collaboration**: The security agent invokes a facial recognition tool (LLM function) provided by a third-party service to analyze the video feed and identify the person.  
   - **Outcome**: The security agent uses an external tool to verify and alert the homeowner about potential security threats, enhancing the security system’s effectiveness.


## Terminology
Fundamental WoT terminology such as Thing, Consumer or WoT Consumer, WoT Thing Description or Thing Description, Interaction Model, Interaction Affordance, Property, Action and Event are defined in the Terminology section of the [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/).

## Namespace

The LMOS Protocol Vocabulary will be identified under the following IRI:

* Namespace IRI:
https://eclipse.dev/lmos/protocol/v1


## Requirements

### Agents

#### Agent Description Format


The Agent Description Format builds on top of the Thing Description (TD) format from the Web of Things (WoT) specification and extends it by specifying an additional schema tailored to the needs of intelligent  agents. 

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

#### Agents Discovery

> EDITOR’S NOTE: 
In order to guarantee interoperability we may want to prescribe which discovery mechanisms (defined in the WoT Discovery specification) must be supported by Agents and Consumers.
As a minimum I suggest that we may want to require that Conformant Agents can serve their Thing Description from an HTTP URL. 
For more details see [LMOS Discovery](https://eclipse.dev/lmos/docs/multi_agent_system/agent_discovery)


#### Agent Communication

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
   - Continuous or real-time data streams must be supported, allowing agents to receive ongoing information as it becomes available.

### Tools

A Tool in the LMOS Protocol refers to a resource or system that an agent can utilize to accomplish a specific task. For example, a weather API is a tool that an agent might interact with to get weather data.

#### Tools Description Format

The Tool Description Format builds on top of the Thing Description (TD) format from the Web of Things (WoT) specification, similar to the Agent Description Format.

Here is the table and description for a **Tool** in the context of the **LMOS Protocol Vocabulary**:


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

#### Tools Discovery

> EDITOR’S NOTE: 
In order to guarantee interoperability we may want to prescribe which discovery mechanisms (defined in the WoT Discovery specification) must be supported by Tools and Consumers.
As a minimum I suggest that we may want to require that Conformant Tools can serve their Thing Description from an HTTP URL. 
For more details see [LMOS Discovery](https://eclipse.dev/lmos/docs/multi_agent_system/agent_discovery)


#### Tool Communication

To ensure interaction between agents and tools, the following communication patterns must be supported:

1. **Request-Reply**  
   - Agents must be able to send requests to tools and receive a single response, providing the requested information or acknowledgment.

2. **One Request-Multiple Responses**  
   - Agents must be able to use tools that return multiple responses.

3. **Publish-Subscribe**: 
    - A mechanism must be in place to allow agents to subscribe to events from tools.

## LMOS Sub-Protocol

### Common Message Requirements
- Every message MUST contain:
  - `thingID`: A unique identifier of the Thing. If the Thing Description contains an `id` member, its value MUST be used. Otherwise, the URL from which the Thing Description was retrieved MAY be used. The value MUST be a valid URI.
  - `messageID`: A unique identifier for the current message in UUIDv4 format [RFC9562](https://datatracker.ietf.org/doc/html/rfc9562).
  - `messageType`: A string denoting the type of message, based on the [LMOS message types](#lmos-message-types).
  - `correlationID` (Optional): A unique identifier in UUIDv4 format shared between messages related to the same operation (e.g., request and response).

All date and time values MUST use the `date-time` format defined in [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557).

### Common Message Members Table
| Member         | Type   | Assignment | Description                                                                                 |
|----------------|--------|------------|---------------------------------------------------------------------------------------------|
| `thingID`      | string | Mandatory  | The ID (URI) of the Thing to which the Property belongs.                                    |
| `messageID`    | string | Mandatory  | A unique identifier (UUID) for the current message.                                         |
| `messageType`  | string | Mandatory  | A string denoting the type of message, based on the [WebSocket message types](#websocket-message-types). |
| `correlationID`| string | Optional   | A unique identifier (UUID) shared between messages for the same operation, e.g., request and response. |
| `traceparent`    | string    | Optional              | A trace context header that carries the trace information across service boundaries. It includes the `traceId`, `spanId`, and trace flags. Example: `"00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01"`. |
| `tracestate`     | string    | Optional              | A trace context header that provides additional vendor-specific or system-specific trace information. Example: `"congo=BleGNlZWRzIHRohbCBwbGVhc3VyZS4"`. |


### LMOS Message Types

The `messageType` member MUST have a value from the following table:

| **Message Type**             | **Description**                                         | **Entity**            | **Direction**        |
|------------------------------|---------------------------------------------------------|-----------------------|----------------------|
| `invokeAction`               | Invoke an action on a Thing                             | `ActionAffordance`    | Request              |
| `cancelAction`               | Cancel an ongoing or scheduled action                  | `ActionAffordance`    | Request              |
| `queryAction`                | Retrieve the latest status of an action                | `ActionAffordance`    | Request              |Consumer ➡ Thing     |
| `actionStatus`                | Status of a previously invoked action                   | `ActionAffordance`    | Thing ➡ Consumer     |
| `subscribeEvent`              | Subscribe to a specific event from a Thing              | `EventAffordance`     | Consumer ➡ Thing     |
| `unsubscribeEvent`            | Unsubscribe from a specific event from a Thing          | `EventAffordance`     | Consumer ➡ Thing     |
| `subscribeAllEvents`          | Subscribe to all events from a Thing                    | `EventAffordance`     | Consumer ➡ Thing     |
| `unsubscribeAllEvents`        | Unsubscribe from all events from a Thing                | `EventAffordance`     | Consumer ➡ Thing     |
| `readProperty`                | Request a property reading from a Thing                 | `PropertyAffordance`  | Consumer ➡ Thing     |
| `propertyReading`             | A property reading from a Thing                         | `PropertyAffordance`  | Thing ➡ Consumer     |
| `writeProperty`               | Write a property value to a Thing                       | `PropertyAffordance`  | Consumer ➡ Thing     |
| `writeMultipleProperties`     | Write multiple property values to a Thing               | `PropertyAffordance`  | Consumer ➡ Thing     |
| `observeProperty`             | Start observing a property value change in a Thing      | `PropertyAffordance`  | Consumer ➡ Thing     |
| `unobserveProperty`           | Stop observing a property value change in a Thing       | `PropertyAffordance`  | Consumer ➡ Thing     |
| `error`                       | Error response from a Thing                             | `ErrorAffordance`     | Thing ➡ Consumer     |

### Interaction Patterns Realization

#### **Request-Reply**  
In this pattern, an agent sends a request and expects a single response, typically with the requested information or acknowledgment.

**Message Types Used**:  
- **`readProperty`** and **`propertyReading`**: Requesting the current value of a property, expecting a reply with the value.  
- **`invokeAction`** and **`actionStatus`**: You can invoke an action and then expect the action status (e.g., pending, in progress, completed, or failed) as a reply. The Thing can return multiple response messages providing updates on the status of the action until it is completed.  
- **`writeProperty`**, **`writeMultipleProperties`**: After writing a property, the system must respond with a **`propertyReadings`** message confirming that the properties have been successfully written.  
- **`cancelAction`**: Request to cancel an ongoing or scheduled action. The system responds with an **`actionStatus`** message indicating whether the cancellation was successful or if the action could not be canceled (e.g., already completed).  
- **`queryAction`**: Request to retrieve the latest status of a previously invoked action. The system replies with an **`actionStatus`** message showing the most recent state of the action (e.g., pending, in progress, completed, failed).  


#### **One Request-Multiple Responses**  
This pattern is useful for cases where a single request may result in multiple responses over time, like ongoing updates or multiple pieces of information. 
In some cases, a request may initiate an action, and the status of that action may be reported multiple times until the action completes. This is useful when long-running or asynchronous operations are involved, and intermediate status updates are needed.

**Message Types Used**:
- **`subscribeEvent`**: When subscribing to events, the system sends multiple event notifications over time as the event occurs.
- **`event`**: This message type provides the event notifications as responses to the subscription.
- **`observeProperty`**: If an agent observes a property, it will receive multiple updates about the property value over time.
- **`propertyReading`**: Multiple readings of a property over time (e.g., temperature sensor sending periodic updates).

#### **Event-Driven/Notifications**  
This pattern allows an agent to send events without expecting a reply. The agent informs other agents about events or property status changes.

**Message Types Used**:
- **`event`**: This is the notification sent by the Thing when an event occurs, such as a temperature alert or an error condition.
- **`error`**: Sent to inform the consumer of any issues or failures that have occurred.

#### **Publish-Subscribe**  
In this pattern, agents can **publish** events and other agents **subscribe** to receive those messages. It supports loose coupling and real-time communication.

**Message Types Used**:
- **`subscribeEvent`**: Allows agents to subscribe to specific events emitted by a Thing. Once subscribed, the agent will receive notifications (event messages) whenever the event occurs.
- **`event`**: The published event message sent to all subscribers.
- **`subscribeAllEvents`**: Allows agents to subscribe to all events emitted by a Thing, enabling broad notifications from the Thing.

#### Summary

| **Interaction Pattern**                 | **Message Type(s)**                                          | **Description**                                                                                   | **Example Scenarios**                                                                                                 |
|-----------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Request-Reply**                    | `readProperty` / `propertyReading`, `invokeAction` / `actionStatus`, `writeProperty` / `propertyReading`, `queryAction` / `actionStatus` | The sender requests information or performs an action and waits for a single response from the receiver. | A marketing agent requests a generative AI agent to draft ad copy based on specific keywords. The AI responds with the completed draft.  |
| **One Request-Multiple Responses**   | `invokeAction` / `actionStatus`, `observeProperty` / `propertyReading`, `subscribeEvent` / `event`                                             | A request is made, and the system sends multiple responses over time (e.g., progress updates) until completion. | A video editing software requests an Image Generator agent to generate multiple versions of an image. The agent sends periodic updates as it creates each design, followed by a final batch of all thumbnails for review. |
| **Event-Driven / Notifications**     | `subscribeEvent` / `event`, `observerProperty` / `propertyReading`                               | Notifications are sent to inform other agents about an event or status change, without expecting a reply. | An AI agent detects when a trending topic emerges and notifies a social media agent, which then requests the creation of relevant posts. |
| **Publish-Subscribe**                | `subscribeEvent` / `event`, `observerProperty` / `propertyReading`                                  | Agents subscribe to events and receive updates whenever those events occur.                         | A news publishing agent subscribes to updates from a generative AI summarization agent. Whenever the summarization agent processes a breaking news article, it publishes the summary, which the news agent formats and distributes in text and video formats.  |

### Properties

#### readProperty
To request a property reading from a Thing, a Consumer MUST send a message containing the following members:

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`    | string   | "readProperty"   | Indicates the request is for a `readProperty` operation.                        |
| `name`           | string   | Mandatory          | The name of the Property to read, as per its key in the `properties` member of the Thing Description. |

##### Example 
```json
{
  "thingID": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageID": "c370da58-69ae-4e83-bb5a-ac6cfb2fed54",
  "messageType": "readProperty",
  "name": "modelConfiguration",
  "correlationID": "5afb752f-8be0-4a3c-8108-1327a6009cbd"
}
```

When the Thing receives a `readProperty` message and successfully reads the value, it MUST respond with a `propertyReading` message containing the value.


#### writeProperty
To update a property value on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`  | string    | "writeProperty | Indicates the request is for a writeProperty operation.         
| `name`     | string    | Mandatory | The name of the property to update.                                          |
| `data`         | object  | Mandatory | The new value for the property.                                              |


##### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "9876abcd-5432-10ef-ghij-klmnopqrstuv",
  "messageType": "writeProperty",
  "name": "modelConfiguration",
  "data": {
      "modelName": "gpt-4o",
      "temperature": 0.7,
      "maxTokens": 1000
   }
}
```


#### **writeMultipleProperties**
To update multiple properties on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType` | `string`    | "writeMultipleProperties" |  Indicates the request is for a writeMultipleProperties operation.   |       |
| `data`        | `object`    | Mandatory | Map of property names and their new values.                    |


##### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "writeMultipleProperties",
  "data": { 
      "modelConfiguration": {
         "modelName": "gpt-4o",
         "temperature": 0.7,
         "maxTokens": 1000
      }, 
      "otherProperty": 60 
   }
}
```

#### propertyReading
To notify a Consumer of the value of a Property, a Thing MUST send a message containing the following members:

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`    | string   | `"propertyReading"`  | Indicates this message provides the value of a Property.                        |
| `name`           | string   | Mandatory            | The name of the Property being read.                                           |
| `value`          | any      | Mandatory            | The current value of the Property, matching the data schema in the Thing Description. |
| `timestamp`      | string   | Mandatory             | A timestamp in `date-time` format indicating when the property was read.        |

If the `propertyReading` message is sent in response to a message containing a `correlationID`, the response SHOULD include the same `correlationID`.

##### Example 
```json
{
   "thingID": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "messageID": "79057736-3e0e-4dc3-b139-a33051901ee2",
   "messageType": "propertyReading",
   "name": "modelConfiguration",
   "value": {
      "modelName": "gpt-4o",
      "temperature": 0.7,
      "maxTokens": 1000
   },
   "timestamp": "2024-01-13T23:20:50.52Z",
   "correlationID": "5afb752f-8be0-4a3c-8108-1327a6009cbd"
}
```

#### **propertyReadings**
To notify a Consumer of the value of a multiple properties, a Thing MUST send a message containing the following members:

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `data`          | `object`    | Mandatory | Map of property names and their corresponding readings.             |
| `timestamp`     | `string`    | Mandatory |Timestamp when the property readings were taken.                    |
| `messageType`   | `string`    | "propertyReadings" | Always "propertyReadings".                                          |

##### Example 
```json
{
   "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
   "messageType": "propertyReadings",
   "data": { 
      "modelConfiguration": {
         "modelName": "gpt-4o",
         "temperature": 0.7,
         "maxTokens": 1000
      }, 
      "otherProperty": 60 
   },
   "timestamp": "2025-01-20T19:00:00Z"
}
```

#### observeProperty
To begin observing a specific property of a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `name`        | `string`    | Mandatory | The name of the property to observe.                           |
| `messageType`     | `string`    | "observeProperty" | Always "observeProperty".                                      |

##### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "observeProperty",
  "name": "modelConfiguration"
}
```

#### unobserveProperty
To stop observing a specific property of a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `thingId`     | `string`    | Identifier of the Thing to stop observing the property.     |
| `messageId`   | `string`    | Unique identifier for this message.                         |
| `name`    | `string`    | The name of the property to stop observing.                 |
| `messageType` | `string`    | Always "unobserveProperty".                                 |

##### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "unobserveProperty",
  "name": "modelConfiguration"
}
```

### Actions

#### invokeAction
To invoke an action on a Thing, send this message.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`       | string    | Mandatory | The name of the action to invoke.                                            |
| `input`        | data  | Optional | Input data required by the action.                                |
| `messageType`  | string    | Mandatory | Always "invokeAction".                                                     |

##### Example Request
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c",
  "messageType": "invokeAction",
  "action": "getWeather",
  "input": {
    "question": "What is the weather in New York?",
    "interactionMode": "text"
  }
}
```

#### queryAction
To query the latest status of an action on a Thing, send this message.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`      | string    | Mandatory | The name of the action to query.                               |
| `messageType`   | string    | "queryAction" | Always "queryAction".                                                     |

##### Example Request
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "c67a2e10-8834-4d12-ab23-d8f5ccad3e9f",
  "messageType": "queryAction",
  "action": "getWeather"
}
```

#### cancelAction
To cancel an ongoing or scheduled action on a Thing, send this message.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`      | string    | Mandatory | The name of the action to cancel.                                |
| `reason`        | string    | Optional | (Optional) The reason for cancellation.                                     |
| `messageType`   | string    | "cancelAction" | Always "cancelAction".                                                    |

##### Example Request
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "d92c4f20-1284-4f92-bc99-f6e3ccbc4f9d",
  "messageType": "cancelAction",
  "action": "getWeather",
  "reason": "User requested cancellation before completion."
}
```

#### actionStatus
Provides the status of a previously invoked action.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`        | string      | Mandatory | The name of the action being reported.                                     |
| `status`        | string      |  Mandatory |  The status of the action (`pending`, `completed`, `failed`).               |
| `output`        | data    | Optional |  Output data from the action, if available.                      |
| `messageType`   | string      |  "actionStatus" |  Always "actionStatus".                                                   |

##### Example Response
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "a9b8c2f6-7e11-4293-a589-0d123456789a",
  "messageType": "actionStatus",
  "correlationId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c",
  "action": "getWeather",
  "status": "completed",
  "output": "The weather in New York is sunny with a temperature of 25°C."
}
```

### Events

#### subscribeEvent
To subscribe to a specific event on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `event`        | string    | Mandatory | The name of the event to subscribe to.                                       |    |
| `messageType`  | string    | "subscribeEvent" | Always "subscribeEvent".                                                   |

##### Example Request
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "subscribeEvent",
  "event": "userFeedbackReceived",
  "correlationId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c"
}
```

#### event
Provides event notifications from a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `correlationId` | string      | Mandatory | Identifier linking this event to a subscription.                |
| `event`         | string      | Mandatory |  The name of the event being reported.                                      |
| `data`          | JsonNode    | Mandatory |  Event-specific data.                                                       |
| `timestamp`     | Instant     | Mandatory |  Timestamp of the event occurrence.                                         |
| `messageType`   | string      | Mandatory |  Always `"event"`.                                                          |

##### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "defg4567-8901-2345-hijk-lmnopqrstuvw",
  "correlationId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c",
  "messageType": "event",
  "event": "userFeedbackReceived",
  "data": {
    "rating": 4,
    "comment": "The service is good, but could provide more details on the weather forecast."
  },
  "timestamp": "2025-01-20T19:00:00Z"
}
```

#### unsubscribeEvent
To unsubscribe from a specific event on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `event`       | `string`    | Mandatory | The name of the event to unsubscribe from.             |
| `messageType` | `string`    | "unsubscribeEvent" | Always "unsubscribeEvent".                             |

##### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "unsubscribeEvent",
  "event": "userFeedbackReceived"
}
```

#### subscribeAllEvents
To subscribe to all events emitted by a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`      | string              | "subscribeAllEvents" | Always "subscribeAllEvents".                               |

##### **Example Request:**
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "subscribeAllEvents"
}
```

---

#### unsubscribeAllEvents
To unsubscribe from all events emitted by a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`      | string              | "unsubscribeAllEvents" | Always "unsubscribeAllEvents".                             |

##### Example Request
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "xyz1234-5678-90ef-abcd-efghijklmnop",
  "messageType": "unsubscribeAllEvents"
}
```


### Error Handling

#### error
To notify about an error that occurred during processing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `type`         | `string`    | Mandatory | URI reference to the type of error.                           |
| `title`        | `string`    | Mandatory |  A short, human-readable summary of the error.                 |
| `status`       | `string`    | Mandatory |  Error status code associated with the error.                   |
| `detail`       | `string`    | Mandatory |  Detailed explanation of the error.                            |
| `instance`     | `string`    | Mandatory |  URI reference to the specific occurrence of the error.        |
| `messageType`  | `string`    | "error" | Always "error".                                               |

**Example Response**
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "error",
  "correlationId": "efgh5678-1234-abcd-ijkl-mnopqrstuvwx",
  "type": "https://example.com/error-type",
  "title": "Failed to fetch weather data",
  "status": "500",
  "detail": "The weather service encountered an internal error.",
  "instance": "urn:uuid:abcd1234-5678-90ef-ghij-klmnopqrstuv"
}
```

## Observability Considerations

In multi-agent systems, multiple Agents (and Tools) interact with each other, often across different platforms and protocols. Without observability, debugging issues, identifying performance bottlenecks, and ensuring overall system reliability becomes exceedingly difficult.

Key reasons why observability is important:
- **Real-time Monitoring**: Allows operators to monitor the health of the overall system and detect anomalies early.
- **Performance Optimization**: Provides insights into where delays or inefficiencies occur in the system.
- **Fault Isolation**: Helps pinpoint the exact location of failures or errors, speeding up the troubleshooting process.

### Distributed Tracing

LMOS supports **distributed tracing**, allowing for the tracking of messages as they traverse multiple Agents and Tools. 

- **Trace Context Integration**: LMOS protocol messages are designed to propagate trace context (via `traceparent` and `tracestate`).
- **Propagation of Trace Metadata**: The trace information includes the **trace ID**, **span ID**, and **trace flags**, ensuring that each component participating in the interaction can log its part of the trace.

### Contextual Metadata

- **`traceparent`**: Used for linking different services in a trace. This header includes the `TraceId`, `SpanId`, and `TraceFlags` to ensure consistency and traceability across the system.
  

  **Example**:
  ```text
  traceparent: 00-<trace-id>-<span-id>-<trace-flags>
  ```

- **`tracestate`**: This optional header can carry vendor-specific or system-specific trace information, enhancing observability by incorporating metadata that reflects the capabilities of different tracing systems.
  
  **Example**:
  ```text
  tracestate: <key1>=<value1>,<key2>=<value2>
  ```

**Message Example**:
```json
{
   "thingID": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "messageID": "c370da58-69ae-4e83-bb5a-ac6cfb2fed54",
   "messageType": "readProperty",
   "name": "modelConfiguration",
   "correlationID": "5afb752f-8be0-4a3c-8108-1327a6009cbd",
   "traceparent": "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01",
   "tracestate": "congo=BleGNlZWRzIHRohbCBwbGVhc3VyZS4"
}
```

  


### Trace IDs vs Message and Correlation IDs

LMOS supports message correlation using **Message IDs** and **Correlation IDs**, which help track the lifecycle of specific messages or interactions across the system. While these IDs are not as comprehensive as distributed traces, they provide an additional layer of tracking for individual request-response pairs.

- **Message ID**: Used to identify and track individual messages within the system.
- **Correlation ID**: Useful for grouping related messages or interactions, particularly in request-response patterns. While it doesn't carry the full trace context, it serves to link messages that are part of the same process.

**Difference Between Trace and Message IDs**:
- **Message IDs** are typically limited to a specific interaction, whereas trace IDs provide end-to-end visibility across multiple systems or components.
- **Trace IDs** give a hierarchical view of requests, allowing developers to track multiple interactions (spans) that are part of a larger workflow.


## Security & Privacy Considerations

Security & Privacy in the **LMOS Protocol** is aligned with the principles and best practices outlined in the **Web of Things (WoT) Architecture**. The **WoT Security & Privacy Considerations**, as defined by the W3C, provide a comprehensive framework to ensure secure interactions within interconnected "Things".

### Key Security Principles

1. **Authentication and Authorization**:  
      - Ensure that all agents and tools interacting through LMOS are authenticated, and access is granted based on clearly defined permissions.
      - Use token-based or certificate-based mechanisms, following WoT’s best practices.

2. **Data Confidentiality and Integrity**:  
      - All communications must use secure transport protocols (e.g., HTTPS, WebSockets over TLS) to protect data from interception and tampering.
      - Adopt mechanisms such as digital signatures or encryption to maintain the integrity and confidentiality of data exchanged between agents.

3. **Privacy and Data Minimization**:  
      - Collect and store only the data that is essential for operation, adhering to principles of data minimization.
      - Ensure compliance with privacy standards (e.g., GDPR) by implementing clear policies for data retention, anonymization, and user consent.

4.  **Access Control**: 
      - Restrict access to sensitive data based on roles and permissions, ensuring only authorized agents or tools can view or modify private information.

## Out of Scope

### New Transport Protocols

The LMOS Protocol does not aim to create a new transport protocol. Instead, it relies on existing, widely adopted transport protocols such as HTTP, WebSocket, and other standards, ensuring compatibility with established technologies. The focus is solely on defining an application model that operates on top of these protocols.


### New Security Mechanisms

LMOS does not introduce new security mechanisms. Instead, it leverages proven and standardized security practices such as TLS for secure communication, OAuth 2.0 for authorization, and existing encryption methods to ensure secure interactions. T

### New Media Types

The LMOS Protocol does not define new media types. Instead, it supports existing formats such as JSON, JSON-LD, and CBOR, ensuring flexibility and compatibility with a wide range of applications and systems.

## IANA Considerations

> EDITOR’S NOTE: Sub-protocol name <br></br>
The name of the WebSocket sub-protocol should be defined here and eventually registered with IANA. 
Sub-protocol name is to be determined.  <br></br>
Example potentialsub-protocol values:
> * lmos
> * v1.lmos
> * lmosprotocol
> * v1.lmosprotocol

This specification proposes the registration of a sub-protocol in the IANA "WebSocket Subprotocol Name Registry". The name of the sub-protocol and the published URL of its definition are to be confirmed. Currently, the name "lmosprotocol" and this document are used as a placeholder and draft proposal.

- **Subprotocol Identifier**:  
  `lmosprotocol`
  
- **Subprotocol Common Name**:  
  LMOS Protocol
  
- **Subprotocol Definition**:  
  This document

## References

[THINGDESC]

Web of Things (WoT) Thing Description. Michael Koster; Sebastian Käbisch; Zoltan Kis; Victor Charpenay; Matthias Kovatsch. W3C Recommendation. URL: https://www.w3.org/TR/wot-thing-description/

[WOTARCH]

Web of Things (WoT) Architecture. Sebastian Käbisch; Michael Koster; Victor Charpenay; Kunihiko Toumura; Matthias Kovatsch. W3C Recommendation. URL: https://www.w3.org/TR/wot-architecture/