---
title: Introduction
description: Overview of LMOS protocol.
---

## Abstract

The primary goal of the **LMOS Protocol** is to pave the way for an **Internet of Agents (IoA)** — an internet-scale multi-agent system where AI agents and tools from different organizations can be easily **published, discovered, and interconnected**, regardless of the technologies they are built on. This vision builds upon the evolution of the **Social Web** and the **Internet of Things (IoT)**, extending its principles to web-based multi-agent systems.

To achieve this, the **LMOS Protocol** draws inspiration from existing technologies. For example, **Matter/Thread** enables smart home devices from different manufacturers to connect and work together seamlessly through a **mesh network**. In this network, devices communicate directly with one another, ensuring reliability and resilience without relying on a central hub. If one device fails, the network automatically reroutes the communication through other devices, providing a flexible and robust solution for smart homes.

Similarly, the [ActivityPub Protocol](https://activitypub.rocks/), which is a federated social media networking protocol, allows users to interact across different social media networks. It enables interoperability, ensuring that users are not locked into a single platform or provider, fostering an open and connected ecosystem. The analogy to social media networks is especially relevant, because agents should also be able to interact, share information, and collaborate in a decentralized manner. Just as humans can engage across various social media networks, agents should be able to discover and work with others in a flexible, open ecosystem. 

The **LMOS Protocol** shares these goals of federation and flexibility. It's designed for "big world" use cases. It enables tools to be discovered and connected to agents, agents to collaborate within multi-agent systems, and agents to be integrated into existing applications — **regardless of the underlying technologies**. This creates an ecosystem where diverse AI capabilities can easily interact and be applied in various scenarios, ensuring that the system is not restricted by specific providers or technologies.

![Internet of Agents](/img/internet_of_agents-light.png#light-mode-only)
![Internet of Agents](/img/internet_of_agents-dark.png#dark-mode-only)

import Standards from './_standards.mdx';

<Standards  />

## Protocol layers

To achieve this, we have designed a structured three-layer protocol architecture, as illustrated below:

- **Application Protocol Layer**  
   This layer defines discovery mechanisms, an agent and tool description format, a semantic data model and a websocket subprotocol. It standardizes agent and tool metadata for interoperability and supports dynamic discovery across local and global networks. 

- **Transport Protocol Layer**  
   This layer defines how agents negotiate and establish communication protocols for exchanging data and messages. By supporting multiple transport protocols agents can dynamically select and adapt the best protocol for each interaction, ensuring flexibility and reliability across networks.

- **Identity and Security Layer**  
   This layer establishes standards for secure identity authentication and encrypted communication between agents, especially in cross-platform environments. It includes a decentralized identity authentication scheme based on W3C DID, but also supports OAuth2, Bearer, and other security schemes.

![LMOS Protocol](/img/lmos_protocol-light.png#light-mode-only)
![LMOS Protocol](/img/lmos_protocol-dark.png#dark-mode-only)

## Protocol design

The LMOS Protocol is designed to leverage the established [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/) which addresses fragmentation across the Internet of Things (IoT) by building upon widely adopted web technologies. By introducing standardized metadata and reusable technological building blocks, W3C WoT facilitates seamless integration across platforms and application domains. A cornerstone of WoT is the Thing Description (TD), which provides an information model and JSON-LD representation format for describing the capabilities of "things".

By leveraging the Thing Description (TD) abstraction from the WoT, the LMOS Protocol simplifies the discovery, description, and interaction of agents and tools, while remaining transport-agnostic. This enables developers to switch communication standards (e.g., from HTTP to MQTT or WebSocket) or media types (e.g., from JSON to CBOR) without requiring changes to application logic.

The LMOS Protocol (Language Model Operating System Protocol) extends this concept to the realm of multi-agent systems and AI-driven applications. It offers a standardized way for agents, tools, data sources, and applications to interact with one another, leveraging the flexibility and protocol-agnostic nature of WoT. 

It offers the adaptability needed for modern distributed systems. For example, developers can seamlessly switch from HTTP to WebSocket or from JSON to CBOR, ensuring future-proof and scalable implementations. Furthermore, the protocol addresses challenges in ad-hoc interoperability by defining an HTTP sub-protocol for REST-based interactions and a WebSocket sub-protocol for real-time communication. These sub-protocols ensure compatibility with existing web standards, enabling real-time communication, secure data exchange, and scalable interoperability for multi-agent systems. By supporting both synchronous and asynchronous communication patterns, the LMOS protocol adapts to a broad range of use cases.

## Status of the LMOS Protocol
The LMOS Protocol is published by the Eclipse LMOS project. It is not a W3C Standard nor is it on the W3C Standards Track. However, we plan to initiate the formal W3C process once the protocol reaches a mature state.

Please note that this protocol is work in progress and contains empty sections.

[GitHub Issues](https://github.com/eclipse-lmos/website/issues) are preferred for discussion of this specification. Alternatively, you can [join our Discord channel](https://discord.gg/RDTHpAQG).


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
