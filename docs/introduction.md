---
title: What is LMOS?
sidebar_position: 1
---

# What is LMOS?

## Our vision
Our vision is to create a **sovereign and open platform and ecosystem for intelligent agents** that makes it easy to develop, deploy, and connect agents across different networks and industries, regardless of the language or framework used for their implementation. <br />
Our principles — **Openness, Interoperability, Security and Transparency** — guide the development of this platform. We believe that systems built on these principles foster collaboration and innovation.

**Openness:** Embrace open standards and protocols to foster collaboration, innovation, and accessibility within the intelligent agent ecosystem, over closed proprietary systems that hinder collaboration and innovation.

**Interoperability:** Ensure seamless communication and interaction between diverse intelligent agents, allowing them to work across platforms and ecosystems, over isolated systems or lock-ins that restrict interoperability and limit user choice.

**Transparency and Accountability:** Prioritize transparency in agent design, operation, and decision-making processes, promoting user trust and accountability for ethical behavior, over opaque systems that conceal operations and lack accountability.

**Data Privacy and Security:** Uphold robust security measures and privacy standards to protect sensitive data, ensuring user confidentiality and trustworthiness of intelligent agents, over insecure systems that compromise user privacy and expose data to unauthorized access.

By aligning our development with these core principles, we aim to create a trustworthy and open multi-agent platform.

## An open multi-agent architecture

In an open multi-agent architecture, the goal is to enable agents to easily discover each other’s capabilities and to communicate efficiently across different networks, regardless of the language or framework used for their implementation. <br/>

![Internet of Agents](/img/internet_of_agents_intro.png)

The key requirements for an open multi-agent architecture are:

- **Agent & Tool Description Format**  
   A standardized format is essential for describing the capabilities and metadata of Agents and Tools. This specification should offer an appropriate level of abstraction to ensure interoperability across a wide range of agent platforms and domains.

- **Agent & Tool Discovery Process**  
   A discovery mechanism is needed for obtaining agent and tool descriptions, supporting both local and global networks. It must accommodate updates to descriptions and handle the dynamic nature of agents, allowing for their constant evolution.

- **Metadata Propagation Protocol**  
   Agents and Tools should be able to propagate metadata using suitable protocols. For local network discovery and registration, mDNS (Multicast DNS) can be used. For broader network discovery, agents can publish their metadata to a centralized Agent Registry.

- **Agent & Tool Registry**  
   A centralized Registry is necessary, serving as a repository where Agents and Tools can register themselves and query information about other registered Agents and Tools. This would facilitate easy discovery and integration across networks.

- **Dynamic Agent & Tool Discovery**  
   Agents should have the ability to dynamically discover other agents and tools. They can query the Registry based on specific criteria, such as capabilities or metadata, ensuring the right Agents or Tools are matched for a given task.

- **Agent Communication Protocol**  
   Agents should be able to communicate using open protocols, but the architecture must provide flexibility in choosing the best protocol for each agent’s purpose. Rather than enforcing a single transport protocol like HTTP, MQTT, or AMQP, the system should allow agents to select and adapt protocols based on their needs.

- **Group Management**  
   The architecture should support the creation and management of agent groups. This functionality allows the formation, management, and dissolution of agent groups while enforcing trust relationships among agents within the group. It enhances collaboration and coordination across agents in the system.


## What is LMOS?

**LMOS (Language Model Operating System)** is our attempt to implement an open multi-agent platform and ecosystem, designed to simplify the development, deployment, discovery and management of AI agents in the cloud. Our vision is to create an open, interoperable platform that empowers developers and enterprises to fully leverage AI-driven automation - free from the constraints of vendor lock-in - ensuring flexibility, innovation, and seamless integration across diverse networks. <br/>
The key features of LMOS are:

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


## What's the name's origin?

The name **LMOS** stands for **Language Model Operating System**. Just as an operating system abstracts hardware and manages software applications, LMOS abstracts reduces the complexity to develop AI Agents by providing APIs and libraries to interact with infrastructure and tools to manage the lifecycle of AI Agents. 

![Operating System Analogy](/img//os-analogy-light.png#light-mode-only)
![Operating System Analogy](/img/os-analogy-dark.png#dark-mode-only)
