---
title: What is LMOS?
sidebar_position: 1
---

# What is LMOS?

## Our vision of an Internet of Agents

Eclipse LMOS is paving the way for an **Internet of Agents (IoA)** — an internet-scale multi-agent system where AI agents and tools from different organizations can be easily **published, discovered, and interconnected**, regardless of the technologies they are built on. This vision builds upon the evolution of the Internet of Things (IoT), extending its principles to web-based multi-agent systems. 

## LMOS Protocol

To realize this, Eclipse LMOS incorporates **well-established W3C protocols and patterns** from the Internet of Things (IoT), adapting them to the realm of web-based multi-agent systems. This adaptation is formalized in the [LMOS Protocol](/lmos/docs/lmos_protocol/introduction), which builds upon the [W3C Web of Things (WoT) architecture](https://www.w3.org/TR/wot-architecture11/). By leveraging WoT's standardized metadata and abstraction layers, LMOS ensures discoverability, interoperability and transport protocol flexibility for AI agents and tools. 

![Internet of Agents](/img/internet_of_agents_intro.png)

By defining standardized metadata, data models, interaction patterns and a communication protocol on top of WoT, the **LMOS Protocol** provides:

- **Agent & Tool Description Format**  
   A standardized format for describing the capabilities and metadata of Agents and Tools. This specification offers an appropriate level of abstraction to ensure interoperability across a wide range of agent platforms and domains.

- **Agent & Tool Discovery Process**  
   A discovery mechanism for obtaining agent and tool descriptions, supporting both local and global networks. It accommodates updates to descriptions and handles the dynamic nature of agents, allowing for their constant evolution.

- **Metadata Propagation Protocol**  
   Agents and Tools are able to propagate metadata using suitable protocols. For local network discovery and registration, mDNS (Multicast DNS) can be used. For broader network discovery, agents can publish their metadata to a centralized Agent Registry.

- **Agent & Tool Registry**  
   A centralized Registry serving as a repository where Agents and Tools can register themselves and query information about other registered Agents and Tools. This  facilitates easy discovery and integration across networks.

- **Dynamic Agent & Tool Discovery**  
   Agents have the ability to dynamically discover other agents and tools. They can query the Registry based on specific criteria, such as capabilities or metadata, ensuring the right Agents or Tools are matched for a given task.

- **Agent Communication Protocol**  
   Agents are able to communicate using open protocols, but the LMOS protocol also provides flexibility in choosing the best transport protocol for each agent’s purpose. Rather than enforcing a single transport protocol like HTTP, MQTT, or AMQP, the LMOS protocol allows agents to select and adapt protocols based on their needs.

- **Group Management**  
   The LMOS protocol supports the creation and management of agent groups. This functionality allows the formation, management, and dissolution of agent groups while enforcing trust relationships among agents within the group. It enhances collaboration and coordination across agents in the system.


## LMOS Platform

In addition, Eclipse LMOS provides an open-source, vendor-neutral [cloud platform](/lmos/docs/lmos_platform/overview) to build and run enterprise-ready multi-agent systems on cloud or on-prem. It also serves as the reference implementation of the LMOS protocol, providing a standardized platform for multi-agent systems.
The key features of the LMOS platform are:

- **Simplified AI Agent Development:**  
   LMOS provides a framework called [Agent ReaCtor (ARC)](/lmos/docs/arc/index) to abstract the intricacies of large language models (LLMs), memory management, and tool integration. Just as an operating system manages applications and hardware, the LMOS framework acts as a virtual "OS" for AI agents, allowing developers to focus on creating intelligent, adaptable agents without getting bogged down by infrastructure complexity.

- **Open, Interoperable Architecture:**  
   Built on the principles of openness and interoperability, LMOS supports seamless integration of AI agents across diverse platforms and networks. By embracing open standards, LMOS ensures that agents from various platforms can communicate, share knowledge, and collaborate, fostering innovation across industries. You can leverage LMOS’s multi-agent capabilities with frameworks like Agent ReaCtor (ARC), Langchain4j, LlamaIndex or LangChain, seamlessly integrating them into the LMOS platform without being tied to a specific development language or framework. 

- **Agent Lifecycle Management:**  
   LMOS enables real-world deployment strategies, such as canary releases and advanced routing techniques based on Natural Language Understanding (NLU). These features allow enterprises to introduce new agent features incrementally, ensuring stability and reducing risk during updates.

- **Cloud-Native Scalability:**  
   Leveraging Kubernetes, LMOS ensures cloud-native scalability, allowing AI agents to grow alongside your business needs. Whether managing a small number of agents or deploying hundreds across multiple channels (e.g., web, mobile, IVR), LMOS dynamically scales to meet the demands of your enterprise while maintaining high performance.

- **Collaborative Agent Ecosystem:**  
   LMOS is designed to enable AI agents to collaborate efficiently, sharing tools, memory, and knowledge much like applications in a traditional operating system. This collaborative approach enhances adaptability, allowing agents to handle complex queries and deliver more accurate, comprehensive solutions.

- **Intelligent Task Management:**  
   LMOS utilizes both language model-based and vector-based approaches for intelligent task routing. Its integrated Runtime and Router ensure that tasks are dynamically assigned to the most suitable AI agents based on their registered capabilities, delivering fast, accurate query resolution and optimal resource utilization.

## Our principles

Our principles — **Openness, Interoperability, Security and Transparency** — guide the development of this platform. We believe that systems built on these principles foster collaboration and innovation.

**Openness:** Embrace open standards and protocols to foster collaboration, innovation, and accessibility within the intelligent agent ecosystem, over closed proprietary systems that hinder collaboration and innovation.

**Interoperability:** Ensure seamless communication and interaction between diverse intelligent agents, allowing them to work across platforms and ecosystems, over isolated systems or lock-ins that restrict interoperability and limit user choice.

**Transparency and Accountability:** Prioritize transparency in agent design, operation, and decision-making processes, promoting user trust and accountability for ethical behavior, over opaque systems that conceal operations and lack accountability.

**Data Privacy and Security:** Uphold robust security measures and privacy standards to protect sensitive data, ensuring user confidentiality and trustworthiness of intelligent agents, over insecure systems that compromise user privacy and expose data to unauthorized access.

## What's the name's origin?

The name **LMOS** stands for **Language Model Operating System**. Just as an operating system abstracts hardware and manages software applications, LMOS abstracts reduces the complexity to develop AI Agents by providing APIs and libraries to interact with infrastructure and tools to manage the lifecycle of AI Agents. 

![Operating System Analogy](/img//os-analogy-light.png#light-mode-only)
![Operating System Analogy](/img/os-analogy-dark.png#dark-mode-only)
