---
title: WebSocket Sub-Protocol
sidebar_position: 4
---

# WebSocket Sub-Protocol

WebSockets provide a mechanism to upgrade a standard HTTP request into a full-duplex, persistent communication channel over a single TCP connection. 
This enables efficient, two-way communication between LMOS agents, tools, and consumers. However, since WebSockets offer a raw TCP socket with no inherent semantics, the LMOS protocol defines a specialized sub-protocol to structure and standardize the communication. 

## IANA Considerations

We propose the registration of a sub-protocol in the IANA "WebSocket Subprotocol Name Registry". The name of the sub-protocol and the published URL of its definition are to be confirmed. Currently, the name "lmosprotocol" and this document are used as a placeholder and draft proposal.

- **Subprotocol Identifier**:  
  `lmosprotocol`
  
- **Subprotocol Common Name**:  
  LMOS Protocol
  
- **Subprotocol Definition**:  
  This document

  
> EDITOR’S NOTE: Sub-protocol name is to be determined.  <br></br>
Other names:
> * lmos
> * v1.lmos
> * lmosprotocol
> * v1.lmosprotocol

## WebSocket Protocol Handshake

To communicate using the LMOS protocol, an LMOS Consumer **MUST** locate one or more communication endpoints provided by an agent or tool for a given set of interaction affordances. The specific requirements are as follows:  

- The URL of an endpoint to be used for a given interaction **MUST** be obtained from an Agent or Tool description:  
  - After being resolved against a base URL where applicable, the URI scheme [RFC3986] of the value of its `href` member is a valid transport protocol (e.g., `ws`, `wss`, `http`, `https`, or other supported transports).  
  - Its `subprotocol` member has a value of `lmosprotocol`.  

- To establish a connection over WebSocket with an LMOS-compatible agent or tool, an HTTP GET request **MUST** be upgraded to a WebSocket connection using a standard WebSocket protocol handshake and the `lmosprotocol` subprotocol.  

This handshake ensures that communication adheres to LMOS's communication protocol specification.  

#### Example HTTP Request  
```http  
GET wss://agentserver.com/agent
Host: agentserver.com  
Origin: https://agentserver.com  
Upgrade: websocket  
Connection: Upgrade  
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==  
Sec-WebSocket-Protocol: lmosprotocol  
Sec-WebSocket-Version: 13  
```  

#### Example HTTP Response  
```http  
HTTP 101 Switching Protocols  
Upgrade: websocket  
Connection: Upgrade  
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=  
Sec-WebSocket-Protocol: lmosprotocol  
```  
