---
title: LMOS Control Plane
---

# LMOS Control Plane

The Kubernetes control plane is the central component of a Kubernetes cluster, responsible for managing the overall system, ensuring the desired state of the applications, and orchestrating the resources. 

The LMOS Control Plane extends the Kubernetes control plane to manage and orchestrate intelligent agents. It builds upon Kubernetes' native capabilities while adding specific features to support the development, deployment and management of AI agents.

![LMOS Platform](/img/lmos_platform-light.png#light-mode-only)
![LMOS Platform](/img/lmos_platform-dark.png#dark-mode-only)

## LMOS Operator

### Custom Resource Definitions

The LMOS operator introduces new Kubernetes resources definitions:

* **Custom Resource Definitions (CRDs) for Agents:** LMOS introduces a new resource type called **Agent**. This allows agents to be treated as first-class citizens within the Kubernetes ecosystem, similar to pods and services, enabling their discovery and lifecycle management. The Agent resource stores agent metadata within the Kubernetes registry, ensuring that essential information about each agent is easily accessible via the Kubernetes API.

*  **Custom Resource Definitions (CRDs) for Channels:**  LMOS allows agents to form groups, which are called **Channel**. Channels can be tenant-based or task-specific. Agents can be wired to multiple channels.

*  **Custom Resource Definitions (CRDs) for ChannelRoutings:** LMOS introduces a new resource type known as **ChannelRouting**. This resource is created by the operator when a channel is successfully resolved. The ChannelRouting resource specifies the agents that are wired to the channel, allowing the LMOS Router to effectively distribute tasks among them. 

### Lifecycle Management

The **LMOS Operator** is a Kubernetes operator designed to monitor the deployments of Agents and Tools in the system. 
For example. whenver an Agent is installed, it fetches the Thing Description and stores it in the registry and creates an Agent custom resource. 
Whenver an Agent is uninstalled, the resource is deleted.

![LMOS Operator](/img/lmos_operator_discovery-light.png#light-mode-only)
![LMOS Operator](/img/lmos_operator_discovery-dark.png#dark-mode-only)


### Channel Management

In LMOS, a **Channel** is a digital interface that facilitates communication between an AI system and its users. Channels can vary in type, e.g. web platforms, mobile applications, IVR (Interactive Voice Response) systems, and messaging services. Each channel may require specific capabilities to function effectively.

A DevOps engineer can create channel resource definitions, and the LMOS Operator is dynamically resolving which Agents provide these capabilities.

LMOS Agents provide their capabilities in the following form:

```json
{ 
   "lmos:capabilities": [
      {
         "id": "urn:telekom:capability:billing:view",
         "name": "View Bills",
         "version": "1.0",
         "description": "Allows a customer to retrieve and view their latest bills.",
         "examples": [
            "show my bill",
            "view my invoice",
            "how much do I owe?",
            "billing details"
         ]
      },
      {
         "id": "urn:telekom:capability:billing:change-address",
         "name": "Change Address",
         "version": "1.0",
         "description": "Allows a customer to change their billing address.",
         "examples": [
            "Update my billing address.",
            "Change my address to 123 Main St.",
            "Modify my billing details.",
            "Where can I update my address?"
         ]
      }
   ]
}
```

For instance, an App channel might need a comprehensive set of customer support capabilities, while a Web channel might only start with a subset of the customer support capabilities. 

![LMOS Channel Management](/img/lmos_channel_management-light.png#light-mode-only)
![LMOS Channel Management](/img/lmos_channel_management-dark.png#dark-mode-only)

A Channel in LMOS is defined as a Kubernetes resource.
Below is an example of the Kubernetes Channel resource file `acme-web-channel.yml`:

```yaml
apiVersion: "lmos.eclipse/v1"
kind: "Channel"
metadata:
  name: "acme-web-stable"
  labels:
    channel: "web"
    version: "1.0.0"
    tenant: "acme"
    subset: "stable"
spec:
  requiredCapabilities:
    - id: "urn:telekom:capability:billing:view-bill"
      version: "1.0.0"
    - id: "urn:telekom:capability:billing:change-address"
      version: ">=1.0.0"
      strategy: HIGHEST
```

The LMOS Operator ensures that the right capabilities are always available in the Kubernetes cluster (environment). If the operator cannot resolve all required capabilities of a channel, the channel would be unresolved and the changes would not be activated. If the channel can be resolved, the operator is created a ChannelRouting resource which can be used by the LMOS Router.

When a Channel Resource is applied using [Kubectl](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/), it automatically loads all Agent Resources from the registry and resolves the Channel requirements based on the capabilities of the installed Agents within the Kubernetes cluster. 

``` 
kubectl apply -f acme-web-channel.yml
```

Once the LMOS Operator resolves a channel, it generates a ChannelRouting resource, which the [LMOS Router](/lmos/docs/lmos_platform/lmos_router) uses to route tasks to appropriate Agents. This process ensures that tasks are routed to the appropriate agents based on their capabilities and the Channel's requirements.

![LMOS Operator](/img/lmos_operator-light.png#light-mode-only)
![LMOS Operator](/img/lmos_operator-dark.png#dark-mode-only)


Below is an example of the generated ChannelRouting resource `acme-web-channel.yml`.

```yaml
apiVersion: "lmos.eclipse/v1"
kind: "ChannelRouting"
metadata:
  name: "acme-web-stable"
  namespace: "test"
  labels:
    version: "1.0.0"
    tenant: "acme"
    channel: "web"
    subset: "stable"
spec:
  capabilityGroups:
  - name: "acme-billing-agent"
    description: "This is the billing agent description"
    capabilities:
    - id: "urn:telekom:capability:billing:view-bill"
      requiredVersion: "1.0.0"
      providedVersion: "1.0.0"
      description: "Capability to view a bill"
      host: "acme-billing-agent-stable-svc"
    - id: "urn:telekom:capability:billing:change-addres"
      requiredVersion: ">=1.0.0"
      providedVersion: "1.1.0"
      description: "Capability to change the bill address"
      host: "acme-billing-agent-stable-svc"
```

### Requirement/Capability Model

The concept of the operator is heavily inspired by [OSGi's Requirements/Capability Model](https://blog.osgi.org/2015/12/using-requirements-and-capabilities.html). In OSGi, modules (or bundles) provide and require capabilities, which are then resolved at runtime to manage module dependencies. The OSGi Capability Model is built around two key concepts:

- **Capabilities:** Represent features or services that a module (bundle) provides.
- **Requirements:** Specify what capabilities a module requires to function properly.

The OSGi framework includes a resolver that calculates a set of resources based on a set of requirements. This allows for dynamic resolution of dependencies at runtime, enabling flexible and modular software architectures. The OSGi Capability Model therefore provides a robust foundation for building a modular, dynamic and adaptable system. We believe this concept is valuable in designing the LMOS operator, which needs to manage complex dependencies between Channels and Agents in a distributed environment.


