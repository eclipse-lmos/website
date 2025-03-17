---
title: Requirements
sidebar_position: 2
---

## In Scope

### Agent and Tool Description an Discovery
- **Requirement**: Define a standardized mechanism for agents and tools to describe their capabilities and interface in a machine-readable format.  
- **Purpose**: Facilitate consistent discovery between agents, tools, and consumers, regardless of their platform or implementation.  

### Transport Protocol Flexibility
- **Requirement**: Ensure compatibility with a wide range of transport protocols (e.g., HTTP, MQTT, WebSockets) through protocol-agnostic design principles.  
- **Purpose**: Enable communication and collaboration across agents, tools, and systems implemented on different platforms and technologies.  

### Dynamic Discovery and Metadata Propagation  
- **Requirement**: Implement mechanisms for agents and tools to dynamically register and propagate their metadata to registries for efficient querying.  
- **Purpose**: Allow real-time discovery of agents and tools based on specific needs, capabilities, or roles.  

### Security and Trust  
- **Requirement**: Incorporate robust security frameworks that ensure encrypted communication, authentication, and authorization.  
- **Purpose**: Protect sensitive data, maintain trustworthiness, and ensure secure interactions within the ecosystem for both agents and tools.  

### Interaction Pattern Flexibility
- **Requirement**: Provide support for multiple interaction patterns, including request-response, request-multiple responses and publish-subscribe.  
- **Purpose**: Allow agents and tools to select the most suitable interaction model for specific scenarios.  

## Out of Scope

### New Transport Protocols

The LMOS Protocol does not aim to create a new transport protocol. Instead, it relies on existing, widely adopted transport protocols such as HTTP, WebSocket, and other standards, ensuring compatibility with established technologies. The focus is solely on defining an application protocol that operates on top of these transport protocols.


### New Security Mechanisms

LMOS does not introduce new security mechanisms. Instead, it leverages proven and standardized security practices such as TLS for secure communication, OAuth 2.0 for authorization, and existing encryption methods to ensure secure interactions. 

### New Media Types

The LMOS Protocol does not define new media types. Instead, it supports existing formats such as JSON, JSON-LD, and CBOR, ensuring flexibility and compatibility with a wide range of applications and systems.

