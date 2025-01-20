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
This specification is published by the Eclipse Foundation LMOS Working Group. It is not an official W3C Standard nor is it part of the Eclipse Foundation Specification Process (EFSP). 

GitHub Issues are preferred for discussion of this specification. Alternatively, you can join our Discord channel.

## Introduction 

The LMOS Protocol is designed to standardize communication between AI agents, their tools, and consumers, providing a universal interface for seamless integration. Similar to how a USB-C port enables a wide variety of devices and accessories to connect, the LMOS Protocol allows tools to be easily plugged into agents, agents to collaborate within multi-agent systems, and agents to be integrated into existing applications, regardless of the underlying technologies. This flexibility fosters an ecosystem where diverse AI capabilities can be easily interconnected and utilized in a wide range of scenarios.

The goal of Web of Things (WoT) architecture is to address fragmentation across the Internet of Things (IoT) by building upon widely adopted web technologies. By introducing standardized metadata and reusable technological building blocks, W3C WoT facilitates seamless integration across platforms and application domains. A cornerstone of WoT is the Thing Description (TD), which provides an information model and JSON-LD representation format for describing the capabilities of "things".

By leveraging the Thing Description (TD) abstraction from the WoT, the LMOS Protocol simplifies the discovery, description, and interaction of agents and tools, while remaining transport-agnostic. This enables developers to switch communication standards (e.g., from HTTP to MQTT or WebSocket) or media types (e.g., from JSON to CBOR) without requiring changes to application logic.

The LMOS Protocol (Language Model Operating System Protocol) extends this concept to the realm of multi-agent systems and AI-driven applications. It offers a standardized way for agents, tools, data sources, and applications to interact with one another, leveraging the flexibility and protocol-agnostic nature of WoT. At its core, LMOS Protocol builds upon the Thing Description to define the capabilities of AI agents and tools. By doing so, it ensures a universal approach to communication that supports interoperability while remaining transport-agnostic.

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


## Namespace

The LMOS Protocol Vocabulary will be identified under the following IRI:

* Namespace IRI:
https://eclipse.dev/lmos/protocol/v1


## Requirements

### Agents

#### Agent Description Format

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
    "@type": "lmos:Agent"
}
```

#### Agents Discovery

#### Agent Communication

To ensure interaction between agents, the following communication patterns must be supported:

1. **One-Way (Fire-and-Forget)**  
   - The system should allow agents to send messages or commands without expecting any acknowledgment or response.

2. **Request-Reply**  
   - Agents must be able to send requests and receive a single response, providing the requested information or acknowledgment.

3. **One Request-Multiple Responses**  
   - Agents must be able to handle requests that return multiple responses over time, accommodating ongoing updates or multiple pieces of information.

4. **Event-Driven/Notifications**  
   - Agents must support the ability to send notifications without expecting a reply, allowing for status updates.

5. **Publish-Subscribe**  
   - A mechanism must be in place to allow agents to publish messages or events and for other agents to subscribe and receive those messages.

6. **Request-Stream / Response-Stream**  
   - Continuous or real-time data streams must be supported, allowing agents to receive ongoing information as it becomes available.

### Tools

A Tool in the LMOS Protocol refers to a resource or system that an agent can utilize to accomplish a specific task. For example, a weather API is a tool that an agent might interact with to get weather data.

#### Tools Description Format

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
}
```

#### Tools Discovery

#### Tool Communication

To ensure interaction between agents and tools, the following communication patterns must be supported:

1. **Request-Reply**  
   - Agents must be able to send requests to tools and receive a single response, providing the requested information or acknowledgment.

2. **One Request-Multiple Responses**  
   - Agents must be able to use tools that return multiple responses.

3. **Publish-Subscribe**: 
    - A mechanism must be in place to allow agents to subscribe to events from tools.

## 

## Security Considerations

## Privacy Considerations

## Out of Scope

## References