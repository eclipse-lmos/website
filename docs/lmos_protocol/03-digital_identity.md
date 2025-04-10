---
title: Digital Identities
description: Secure agent identity management.
---

## Problem Statement

In the Internet of Agents (IoA), secure and reliable communication among software agents is crucial for establishing a network of trust. Just as humans rely on passports or official identification for authentication in various interactions, software agents also need verifiable credentials to ensure they are trustworthy. Without proper authentication mechanisms, malicious or unverified agents could infiltrate networks, leading to issues such as misinformation, fraud, and security breaches. Therefore, a standardized method for authenticating agents and verifying their metadata is essential for enabling trusted interactions among different entities in the IoA ecosystem.

### Analogy: Human Identification Mechanisms

To understand the significance of agent identity in the IoA, it helps to draw parallels with human systems of trust and verification.

- **Passports**: Just as a human passport serves as a proof of identity and allows international travel, agents in the IoA need verifiable digital identities. These digital identities enable agents to prove their legitimacy and authenticate interactions with other agents.
  
- **Visas and Stamps**: A visa or stamp in a passport indicates permissions or credentials granted to a traveler, such as the ability to enter a particular country. Similarly, agents can receive Verifiable Credentials (VCs) that indicate their qualifications or roles in the IoA, allowing them to access certain services or perform specific actions.

### Analogy: Human Organizations

The management of agent networks in IoA could mirror how human organizations handle teams and projects:

- **Formation**: In a human organization, teams are formed based on the qualifications and roles of members, often verified through resumes and certifications. Similarly, agents are selected for an IoA network based on their verifiable credentials (VCs), ensuring that only qualified agents are included.

- **Management**: As team members in human organizations gain new skills or roles, their responsibilities within the team are adjusted accordingly. In the same way, agent roles in an IoA network evolve over time, with their VCs dynamically updated to reflect changes in their qualifications, ensuring their responsibilities within the network are always accurate.

- **Dissolution**: Once a human project team completes its objectives, access to project resources is revoked, and the team is disbanded. Similarly, when an agent group in the IoA is no longer needed, their access rights are revoked, and the group is dissolved. The revocation is logged in the decentralized ledger, ensuring transparency and security.


## Solution

By using similar principles in the IoA, we can establish trusted networks where agents interact based on verified credentials, ensuring the integrity of communication and cooperation. A potential solution for securing digital identities in the IoA involves the integration of Self-Sovereign Identity (SSI), Decentralized Identifiers (DIDs), and Verifiable Credentials (VCs). This approach mirrors human identity verification through digital wallets, such as the EU Digital Wallet.

1. **Self-Sovereign Identity (SSI)**:
   - SSI allows individuals (or agents, in the case of IoA) to manage their identities digitally, putting control of identity and credentials in the hands of the agent itself. SSI ensures that agents can autonomously prove their identity without relying on central authorities, similar to how individuals use personal digital wallets to manage and control their real-world credentials.

2. **Decentralized Identifiers (DIDs)**:
   - DIDs are cryptographically secured identifiers that enable verifiable, decentralized digital identities. These identifiers are stored on a distributed ledger, ensuring they cannot be manipulated or forged. DIDs give agents the ability to authenticate themselves without relying on a single central authority, similar to the concept of decentralized identity verification used in the blockchain world.

3. **Verifiable Credentials (VCs)**:
   - VCs are cryptographically secure digital credentials issued to agents by trusted entities. These credentials can represent certifications, compliance records, or business partnerships, establishing trust between agents. Just like human identification documents, VCs can verify an agent's qualifications or certifications and ensure that any interactions with other agents are legitimate.



### Integrating SSI, DIDs, and VCs into Agent Network Lifecycle Management

1. **Creation of Agent Networks**:
   When forming a new agent network, each agent's unique DID serves as the foundational identity. These DIDs are associated with VCs that detail the agent's attributes, roles, and permissions. For example, in a supply chain network, agents representing manufacturers, suppliers, and logistics providers can present VCs verifying their industry certifications and operational roles. By validating these credentials, the system can dynamically assemble a group of agents with complementary functions and verified qualifications, ensuring that only credible entities are included.

2. **Management of Agent Groups**:
   The ongoing management of agent groups is facilitated by continuous verification of DIDs and associated VCs. As agents evolve or acquire new credentials, updates to their VCs can be propagated across the network. For instance, if an agent acquires a new certification, its VC is updated, and the system can adjust the agent's access rights within the group. This dynamic updating supports agile and responsive group management, ensuring that the right agents always have the appropriate roles and permissions.

3. **Dissolution of Agent Groups**:
   When dissolving an agent group, the SSI framework ensures that the process is secure and transparent. Revocation of VCs plays a critical role in this process. By revoking the credentials that granted agents access to the group, the system effectively terminates the group's existence. This revocation is recorded on the decentralized ledger, providing an immutable audit trail that confirms the dissolution and prevents unauthorized agents from retaining access.

### Example of DIDs and VCs for Agents

To illustrate how DIDs and VCs can be used in the IoA, here are examples of the DIDs for a manufacturer agent and a logistics provider agent:

**Manufacturer Agent DID**:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1"
  ],
  "id": "did:web:abcmanufacturing.com:agents:manufacturer",
  "controller": "did:web:abcmanufacturing.com",
  "verificationMethod": [
    {
      "id": "did:web:abcmanufacturing.com:agents:manufacturer#keys-1",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:web:abcmanufacturing.com:agents:manufacturer",
      "publicKeyBase58": "6L8hN7wQZb8jU9xF1k3Dq2M5tZrXwY7P"
    }
  ],
  "authentication": [
    "did:web:abcmanufacturing.com:agents:manufacturer#keys-1"
  ],
  "assertionMethod": [
    "did:web:abcmanufacturing.com:agents:manufacturer#keys-1"
  ],
  "service": [
    {
      "id": "did:web:abcmanufacturing.com:agents:manufacturer#vc",
      "type": "VerifiableCredentialService",
      "serviceEndpoint": "https://abcmanufacturing.com/agent/vc"
    }
  ]
}
```

**Logistics Provider Agent DID**:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1"
  ],
  "id": "did:web:xyzlogistics.com:agents:logistics",
  "controller": "did:web:xyzlogistics.com",
  "verificationMethod": [
    {
      "id": "did:web:xyzlogistics.com:agents:logistics#keys-1",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:web:xyzlogistics.com:agents:logistics",
      "publicKeyBase58": "4F9d7WqYhZr8vK2sL3Bp5C6xTjVwM1N"
    }
  ],
  "authentication": [
    "did:web:xyzlogistics.com:agents:logistics#keys-1"
  ],
  "assertionMethod": [
    "did:web:xyzlogistics.com:agents:logistics#keys-1"
  ],
  "service": [
    {
      "id": "did:web:xyzlogistics.com:agents:logistics#vc",
      "type": "VerifiableCredentialService",
      "serviceEndpoint": "https://xyzlogistics.com/agent/vc"
    }
  ]
}
```

#### 1. **How do agents verify each other’s identity?**

Each agent has a **DID** and a **Verification Method** listed in the JSON. This method includes the public key that allows the agent to authenticate themselves. Here’s how the verification works in practice:

- **Manufacturer Agent**: The manufacturer has a DID (`did:web:abcmanufacturing.com:agents:manufacturer`), and there is a **Verification Method** associated with it. This method lists the public key (`publicKeyBase58`) that the agent uses to prove its identity.
  
  - **Verification Method**: This public key is like a "proof" that the Manufacturer Agent really is who it claims to be. The **public key** is cryptographically linked to the DID.

- **Logistics Provider Agent**: Similarly, the logistics provider has a DID (`did:web:xyzlogistics.com:agents:logistics`) and a **Verification Method** with their own public key that proves their identity.

#### 2. **How do they verify each other’s DID?**

To verify each other’s identity, the agents can follow these steps:

1. **Look up the DID**: 
   - When the Manufacturer Agent wants to communicate with the Logistics Provider Agent, it can use the Logistics Provider’s DID (`did:web:xyzlogistics.com:agents:logistics`) to **look up** the agent’s public key from the decentralized ledger or registry.

2. **Check the public key**: 
   - Once the Manufacturer Agent retrieves the Logistics Provider’s public key, it can use that public key to authenticate messages or transactions that are signed by the Logistics Provider. If the Logistics Provider signs a message (e.g., a digital contract or data exchange), the Manufacturer Agent can check the signature using the public key and confirm that the message came from the real Logistics Provider (and not a fake one).

3. **Confirm the Verification Method**:
   - The **Verification Method** section in the DID specifies which public key is used to verify the identity. This ensures that both agents can trust the key they are using for verification is the correct one for that particular agent.

#### 3. **How do they verify the VerifiableCredentialService?**

Both agents also have a **VerifiableCredentialService** (under the `service` field in the JSON). This service is essentially a URL endpoint where an agent can request and verify its credentials. Here’s how they verify that the service is valid:

1. **Look up the service endpoint**: 
   - In the Manufacturer Agent’s DID, there’s a field `serviceEndpoint: "https://abcmanufacturing.com/agent/vc"`. This URL tells other agents where to go to verify the Manufacturer Agent’s credentials (e.g., certifications, compliance records, etc.).
   - Similarly, the Logistics Provider Agent has a service endpoint: `https://xyzlogistics.com/agent/vc`.

2. **Request and verify credentials**: 
   - If the Logistics Provider wants to verify the Manufacturer Agent’s credentials, it would go to this service endpoint (`https://abcmanufacturing.com/agent/vc`).
   - The service would provide a **Verifiable Credential** (VC) that contains the Manufacturer Agent’s qualifications, certifications, or any other relevant information. The Logistics Provider can check the authenticity of this VC by verifying its cryptographic signature (using the DID’s public key from the verification method).

3. **Verify the VC**:
   - The Verifiable Credential contains proof that a trusted issuer (such as a certification authority) has verified the Manufacturer Agent's qualifications. The Logistics Provider can check this credential against the decentralized ledger and confirm that the Manufacturer Agent holds valid credentials.

4. **Ensure the VC is valid and up-to-date**:
   - If the VC is valid and issued by a trusted authority, and if the service endpoint is accessible, the Logistics Provider can trust that the Manufacturer Agent has the correct qualifications.
