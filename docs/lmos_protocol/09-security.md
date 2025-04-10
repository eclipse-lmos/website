---
title: Security & Privacy
description: Secure agent communication protocols.
---

# Security & Privacy Considerations

Security and privacy in the LMOS Protocol is aligned with the principles and best practices outlined in the Web of Things (WoT) architecture. 

## Key Security Principles

1. **Authentication and Authorization**:  
      - Ensure that all agents and tools interacting through LMOS are authenticated, and access is granted based on clearly defined permissions.
      - Use token-based or certificate-based mechanisms, following WoT’s best practices. 
      - W3C Decentralized Identifiers (DIDs) can also be utilized as a method for digital identities, providing secure, verifiable, and self-sovereign authentication.

2. **Data Confidentiality and Integrity**:  
      - All communications must use secure transport protocols (e.g., HTTPS, WebSockets over TLS) to protect data from interception and tampering.
      - Adopt mechanisms such as digital signatures or encryption to maintain the integrity and confidentiality of data exchanged between agents.

3.  **Access Control**: 
      - Restrict access to sensitive data based on scopes.

## W3C DID

A **DID (Decentralized Identifier)** is a type of identifier that enables verifiable, self-sovereign digital identity management. DIDs are part of the broader movement toward decentralized identity systems, which aim to give individuals control over their own digital identities without relying on a centralized authority. W3C defines DIDs as part of a specification aimed at providing users with secure, self-sovereign, and decentralized identifiers that are not tied to any central registry, identity provider, or certificate authority.

DIDs are designed to be:

1. **Decentralized**: They don't rely on any central authority or registry. Instead, DIDs are anchored to distributed ledger technologies (blockchain), or any decentralized network that provides verifiable, immutable data.
   
2. **Self-sovereign**: The user or entity that owns the DID has complete control over it. They can update, revoke, or change it as necessary.
   
3. **Interoperable**: The DID standard is intended to be widely used across various systems, enabling cross-platform identity solutions.


### Structure of a DID

A typical DID consists of three parts:

1. **Scheme**: `did:`, followed by the DID method (e.g., `did:web:12345`).
2. **Method**: A DID method describes how the DID is resolved and how the associated data is managed. Examples are `did:web`.
3. **Method-specific identifier**: This is the unique identifier within the specified DID method (e.g., `12345` in `did:web:12345`).

### Example of a DID


Example of a DID that includes a `serviceEndpoint` to an Agent:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1"
  ],
  "id": "did:web:telekom.de:agents:billing",
  "controller": "did:web:telekom.de",
  "verificationMethod": [
    {
      "id": "did:web:telekom.de:agents:billing#keys-1",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:web:telekom.de:agents:billing",
      "publicKeyBase58": "5K7X5M1M9fjp2tLDgb5mtJfa2v4eqHGKZ9bdU2R6gKkF"
    }
  ],
  "authentication": [
    "did:web:telekom.de:agents:billing#keys-1"
  ],
  "assertionMethod": [
    "did:web:telekom.de:agents:billing#keys-1"
  ],
  "service": [
    {
      "id": "did:web:telekom.de:agents:billing#td",
      "type": "WotThing",
      "serviceEndpoint": "https://billings.agents.telekom.de/.well-known/wot"
    }
  ]
}
```

- **@context**: Defines the W3C standard context for DID documents.  
- **id**: The unique identifier for this DID
- **controller**: Specifies who controls the DID.  
- **verificationMethod**: Contains a **public key** used for cryptographic verification.  
- **authentication**: References the **public key** that can be used for authentication .  
- **assertionMethod**: Defines which keys can be used to **issue and sign verifiable credentials**.