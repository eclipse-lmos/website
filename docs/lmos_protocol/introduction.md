---
title: Introduction
sidebar_position: 1
---

## Abstract

The following pages outline the use cases and requirements for the LMOS Protocol. 

The primary goal of the LMOS Protocol is to pave the way for an Internet of Agents (IoA) — a dynamic and interconnected ecosystem where AI agents and tools, developed by various organizations, can be easily published, discovered, and seamlessly utilized across platforms.
This vision builds upon the evolution of the Internet of Things (IoT), extending its principles to internet-scale multi-agent systems. 

![Internet of Agents](/img/internet_of_agents.png)

Much like Bluetooth enables a variety of devices to be discovered, connect and exchange data regardless of the manufacturer or underlying hardware, the LMOS Protocol allows tools to be discovered and plugged into agents, agents to collaborate within multi-agent systems, and agents to be integrated into existing applications, regardless of the underlying technologies. This flexibility fosters an ecosystem where diverse AI capabilities can be easily interconnected and utilized in a wide range of scenarios.

By defining standardized interaction patterns, metadata and information models, and a communication protocol, the LMOS Protocol enables:

* **Interoperability:** Ensuring agents and tools from different ecosystems can understand and interact with each other.
* **Discoverability:** Facilitating the discovery of agents and tools that match specific needs.
* **Scalability:** Supporting the addition of new agents and tools without disruption.
* **Transport Agnosticism:** Allowing developers to use diverse communication protocols (e.g., HTTP, WebSocket, MQTT) without modifying application logic.
* **Ecosystem Collaboration:** Empowering organizations to publish their AI Agent and Tools into a larger ecosystem.

![LMOS Protocoll](/img/lmos_protocoll.png)

The goal of [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/) is to address fragmentation across the Internet of Things (IoT) by building upon widely adopted web technologies. By introducing standardized metadata and reusable technological building blocks, W3C WoT facilitates seamless integration across platforms and application domains. A cornerstone of WoT is the Thing Description (TD), which provides an information model and JSON-LD representation format for describing the capabilities of "things".

By leveraging the Thing Description (TD) abstraction from the WoT, the LMOS Protocol simplifies the discovery, description, and interaction of agents and tools, while remaining transport-agnostic. This enables developers to switch communication standards (e.g., from HTTP to MQTT or WebSocket) or media types (e.g., from JSON to CBOR) without requiring changes to application logic.

The LMOS Protocol (Language Model Operating System Protocol) extends this concept to the realm of multi-agent systems and AI-driven applications. It offers a standardized way for agents, tools, data sources, and applications to interact with one another, leveraging the flexibility and protocol-agnostic nature of WoT. 

Unlike other protocols, like the Model Context Protocol (MCP) by Anthropic, that tie communication to specific technologies (JSON-RPC), LMOS Protocol offers the adaptability needed for modern distributed systems. For example, developers can seamlessly switch from HTTP to WebSocket or from JSON to CBOR, ensuring future-proof and scalable implementations. Furthermore, the protocol addresses challenges in ad-hoc interoperability by defining an HTTP sub-protocol for REST-based interactions and a WebSocket sub-protocol for real-time communication. These sub-protocols ensure compatibility with existing web standards, enabling real-time communication, secure data exchange, and scalable interoperability for multi-agent systems. By supporting both synchronous and asynchronous communication patterns, the LMOS protocol adapts to a broad range of use cases.

## Status of the LMOS Protocol
The LMOS Protocol is published by the Eclipse LMOS project. It is not a W3C Standard nor is it on the W3C Standards Track. However, we plan to initiate the formal W3C process once the protocol reaches a mature state.

Please note that this protocol is work in progress and contains empty sections.

[GitHub Issues](https://github.com/eclipse-lmos/website/issues) are preferred for discussion of this specification. Alternatively, you can [join our Discord channel](https://discord.gg/RDTHpAQG).


**Latest published version:**  
[https://eclipse.dev/lmos/docs/lmos_protocol](https://eclipse.dev/lmos/docs/lmos_protocol)  

**Editors:**  
* Robert Winkler (Deutsche Telekom AG)  

## Use Cases

The LMOS Protocol is particularly designed for multi-agent systems, where interoperability and flexibility are critical. 

### Customer Service

#### Scenario 1: Agent Collaboration with Natural Language

1. **Proactive Resolution of Connectivity Issues**  
   - **Scenario**: A telecom customer interacts with a chatbot to report an internet connection issue.  
   - **Agent Collaboration**: The chatbot uses natural language to request troubleshooting data from a network diagnostics agent and interacts with a service agent from the equipment provider to ensure that the issue is investigated in real-time.  
   - **Outcome**: The chatbot provides proactive troubleshooting by collaborating across multiple agents in different companies, helping the customer resolve the issue quickly.

#### Scenario 2: Agents Using Tools Provided by Other Companies

1. **Supply Chain Issue Resolution**  
   - **Scenario**: A customer service agent from an online store is handling a supply chain delay due to raw material shortages.  
   - **Agent Collaboration**: The agent uses a tool (LLM functions) provided by a third-party logistics provider to check inventory availability and estimate shipping dates.  
   - **Outcome**: The agent provides the customer with a resolution that is based on an external tool to find alternative suppliers, ensuring that the shipping process continues smoothly despite delays.

### Manufacturing

#### Scenario 1: Agent Collaboration with Natural Language

* **Collaborative Quality Control Across Suppliers**  
   - **Scenario**: A quality control agent detects defects in components from a supplier.  
   - **Agent Collaboration**: The agent uses natural language to query a production data agent from the supplier to request defect details and interacts with a process optimization agent to suggest improvements.  
   - **Outcome**: By using natural language, the agents from different companies collaborate effectively to identify the issue and propose corrective actions, leading to improved product quality.

#### Scenario 2: Agents Using Tools Provided by Other Companies

* **Machine Diagnostics with Third-Party Tools**  
   - **Scenario**: A factory’s machine breakdown is affecting the production schedule.  
   - **Agent Collaboration**: The factory’s maintenance agent invokes a diagnostics tool (LLM function) provided by a machine manufacturer to remotely diagnose the issue and suggest repairs.  
   - **Outcome**: The agent uses an external tool to identify the problem and resolve the issue without requiring direct manufacturer intervention, ensuring production downtime is minimized.

### Smart Home

#### Scenario 1: Agent Collaboration with Natural Language

* **Energy Consumption Optimization Across Devices**  
   - **Scenario**: A user wants to adjust the temperature in both the living room (connected to Google Home) and the bedroom (connected to Amazon Alexa). The devices are from different providers and don't natively communicate.
   - **Agent Collaboration**: The user sends a natural language command: “Set the living room to 70°F and the bedroom to 70°F.” to a central smart agent which relays the request to Amazon Alexa for the bedroom thermostat and Google Assistant for the Nest thermostat. 
   - **Outcome**: Both thermostats are adjusted to 70°F, with the command seamlessly passed between different ecosystems, providing a unified user experience.

#### Scenario 2: Agents Using Tools Provided by Other Companies

* **Home Security Management**  
   - **Scenario**: A home security system identifies an anomaly in video surveillance.  
   - **Agent Collaboration**: The security agent invokes a facial recognition tool (LLM function) provided by a third-party service to analyze the video feed and identify the person.  
   - **Outcome**: The security agent uses an external tool to verify and alert the homeowner about potential security threats, enhancing the security system’s effectiveness.


## Terminology
Fundamental WoT terminology such as Thing, Consumer or WoT Consumer, WoT Thing Description or Thing Description, Interaction Model, Interaction Affordance, Property, Action and Event are defined in the terminology section of the [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/).

## Namespace

The LMOS Protocol vocabulary will be identified under the following URI:

* Namespace URI:
https://eclipse.dev/lmos/protocol/v1
