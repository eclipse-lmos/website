---
title: LMOS Kotlin SDK
description: How to use the LMOS Kotlin SDK
---

## Quick Start Guide

This guide will help you quickly get started with the LMOS Kotlin Client & Server SDK.
It walks you through developing an Agent.

The LMOS Kotlin Server SDK allows you to create Agents based on [Spring Boot](https://spring.io/projects/spring-boot) and [Ktor](https://ktor.io/). The following diagram illustrates the technology stack of the LMOS Kotlin SDK.

The LMOS Kotlin Server SDK enables the implementation of Agents by leveraging the LMOS protocol. It leverages [Eclipse ThingWeb](https://github.com/eclipse-thingweb/kotlin-wot) to ensure semantic WoT compatibility and supports HTTP, WebSocket and MQTT protocol bindings for flexible communication. The Agent runs within a Spring Boot application, which internally uses Ktor to handle the underlying protocol bindings. For observability, the SDK integrates [OpenTelemetry](https://opentelemetry.io/), providing comprehensive support for logs, metrics, and traces.

![Technology Stack](/img/technology_stack-light.png#light-mode-only)
![Technology Stack](/img/technology_stack-dark.png#dark-mode-only)

### Adding the Kotlin Server SDK

To use the LMOS Kotlin Server SDK in your project, you need to add the following dependency to your build configuration:

#### Using Gradle

```kotlin
dependencies {
    implementation("org.eclipse.lmos:lmos-kotlin-sdk-server:0.1.0-SNAPSHOT")
    implementation("org.eclipse.thingweb:kotlin-wot-binding-http:0.1.0-SNAPSHOT")
    // If you want to support websocket
    //implementation("org.eclipse.thingweb:kotlin-wot-binding-websocket:0.1.0-SNAPSHOT"  
}

repositories {
    maven {
        url 'https://oss.sonatype.org/content/repositories/snapshots/'
    }
}
```

#### Using Maven

```xml
<dependencies>
    <dependency>
        <groupId>org.eclipse.lmos</groupId>
        <artifactId>lmos-kotlin-sdk-server</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.lmos</groupId>
        <artifactId>kotlin-wot-binding-http</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>
    <!--
    <dependency>
        <groupId>org.eclipse.lmos</groupId>
        <artifactId>kotlin-wot-binding-websocket</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>  
    -->     
</dependencies>

<repositories>
    <repository>
        <id>sonatype-snapshots</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
    </repository>
</repositories>
```

### Create an AgentApplication

The `AgentApplication` is the entry point of the Spring Boot application.

```kotlin
fun main(args: Array<String>) {
    runApplication<AgentApplication>(*args)
}

@SpringBootApplication
class AgentApplication {}

```

### Create an Agent

The `ChatAgent` is a specific implementation of an agent that handles conversational interactions.

```kotlin
@Thing(id="chatagent", title="Chat Agent", description="A chat agent.", type= LMOSThingTypes.AGENT)
@Context(prefix = LMOSContext.prefix, url = LMOSContext.url)
@Component
class ChatAgent(private val arcAgent: ConversationalAgent) {

    @Action(title = "Chat", description = "Ask the agent a question.")
    @ActionInput(title = "A question", description = "A question of a user")
    @ActionOutput(title = "An answer", description = "An Answer of the agent")
    suspend fun chat(message: AgentRequest) : AgentResult {
        return arcAgent.chat(message)
    }
}
```

### Data Model
The LMOS SDK currently utilizes the [ARC API Data Model](https://eclipse.dev/lmos/docs/arc/ccore/api/) for Conversational Agents. 
The Data Classes can be found [here](https://github.com/eclipse-lmos/lmos-kotlin-sdk/tree/main/lmos-kotlin-sdk-base/src/main/kotlin/sdk/model)

Please note that the LMOS SDK data model is subject to change once a standardized, interoperable data model for agent communication becomes available.

However, you're not limited to using `AgentRequest` and `AgentResult`. You are free to define your own custom data model if it better suits your use case.

Example of an AgentRequest message:

```json
{
    "conversationContext": {
        "conversationId": "1"
    },
    "systemContext": [
        {
            "key": "channelId",
            "value": "web"
        }
    ],
    "userContext": {
        "userId": "1234",
        "profile": [
        {
            "key": "name",
            "value": "Max Mustermann"
        }
        ]
    },
    "messages": [
        {
        "role": "user",
        "content": "What is the weather in London?",
        "format": "text"
        }
    ]
}
```

Example of an AgentResult message:

```json
{
  "status": "success",
  "messages": [
    {
      "role": "agent",
      "content": "The weather is sunny.",
      "format": "text"
    }
  ]
}
```

### Implementing the ConversationalAgent Interface

When creating a conversational agent, the `ConversationalAgent` interface must be implemented. This ensures that the agent adheres to a standard structure for handling conversational interactions, making it compatible with the LMOS ecosystem.

When implementing an agent, the [LMOS ARC](https://eclipse.dev/lmos/arc2/index.html) framework is commonly used due to its seamless integration with the LMOS ecosystem. ARC Agents can either be injected or retrieved from the AgentProvider.

However, other frameworks like Langchain4j can also be utilized, offering flexibility depending on your project requirements and preferences.


Below is an example of how to implement the `ConversationalAgent` interface with ARC:

```kotlin
@Component
class ArcConversationalAgent(agentProvider: AgentProvider) : ConversationalAgent {
    private val agent = agentProvider.getAgentByName("ChatAgent") as ChatAgent

    override suspend fun chat(message: AgentRequest): AgentResult {
        return executeAgent(message, agent::execute)
    }
}
```

### Create a AgentConfiguration

The configuration for the ARC agent is typically handled by Spring Boot's dependency injection and configuration mechanisms. This ensures that the agent is properly initialized and ready to handle requests. The ARC DSL (Domain-Specific Language) is used to define the behavior and functionality of the Agent in a concise and elegant manner. By leveraging the ARC DSL, developers can specify the Agent's name, prompt, tools, and other configurations in a structured and readable format.

```kotlin
@Configuration
class AgentConfiguration {

    @Bean
    fun chatArcAgent(agent: Agents) = agent {
        name = "ChatAgent"
        prompt {
            """
            You are a professional assistant. 
            """
        }
        model = { "GPT-4o" }
        tools = AllTools
    }

}
```

### Create an application.yaml

To configure your agent, you need to create an application.yaml file and place it in the resources folder of your project. This file is essential for defining the configuration settings for your agent, such as its name, AI client details, and protocol support.

In the application.yaml file, you can enable both HTTP and WebSocket protocols simultaneously by setting their enabled properties to true. This allows your agent to handle requests over both protocols in parallel.

Here’s an example configuration:

```yaml
spring:
  application:
    name: chat-agent

arc:
  ai:
    clients:
      - id: GPT-4o   // The id must match the model in the AgentConfiguration
        model-name: <model>
        api-key: <key>
        client: openai
        url: <url>

wot:
  servient:
    websocket:
      server:
        enabled: true
        host: localhost
        port: 8181
    http:
      server:
        enabled: true
        host: localhost
        port: 9080
```

### Query the Agent Description

The endpoint `http://localhost:9080/chatagent` is the URL where the Agent Description is hosted. This endpoint serves as the interface for clients to communicate with the Agent. It acts as the central access point for integrating the Agent into your application or system.

Example:

```json
{
    "id": "chatagent",
    "title": "Chat Agent",
    "@context": [
        "https://www.w3.org/2022/wot/td/v1.1",
        {
            "lmos": "https://eclipse.dev/lmos/protocol/v1"
        }
    ],
    "@type": "lmos:Agent",
    "version": {
        "instance": "1.0.0"
    },
    "description": "A chat agent.",
    "actions": {
        "chat": {
            "description": "Ask the agent a question.",
            "forms": [
                {
                    "href": "http://localhost:9080/chatagent/actions/chat",
                    "contentType": "application/json",
                    "op": [
                        "invokeaction"
                    ]
                }
            ],
            "input": {
                "type": "object",
                "properties": {
                    ...
                },
                "required": [
                    "messages"
                ],
                "title": "The question",
                "description": "A question"
            },
            "output": {
                "type": "object",
                "title": "The answer",
                "description": "The Answer",
                "properties": {
                   ...
                },
                "required": [
                    "messages"
                ]
            },
            "synchronous": true
        }
    }
}
```


### Adding the Kotlin Client SDK

To use the LMOS Kotlin Client SDK in your project, you need to add the following dependency to your build configuration:

#### Using Gradle

```kotlin
dependencies {
    implementation("org.eclipse.lmos:lmos-kotlin-sdk-client:0.1.0-SNAPSHOT")
    implementation("org.eclipse.thingweb:kotlin-wot-binding-http:0.1.0-SNAPSHOT")
    // If you want to support websocket
    //implementation("org.eclipse.thingweb:kotlin-wot-binding-websocket:0.1.0-SNAPSHOT" 
}

repositories {
    maven {
        url 'https://oss.sonatype.org/content/repositories/snapshots/'
    }
}
```

#### Using Maven

```xml
<dependencies>
    <dependency>
        <groupId>org.eclipse.lmos</groupId>
        <artifactId>lmos-kotlin-sdk-client</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.lmos</groupId>
        <artifactId>kotlin-wot-binding-http</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>
    <!--
    <dependency>
        <groupId>org.eclipse.lmos</groupId>
        <artifactId>kotlin-wot-binding-websocket</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>
    -->
</dependencies>

<repositories>
    <repository>
        <id>sonatype-snapshots</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
    </repository>
</repositories>
```

### Communicating with an Agent

The LMOS Kotlin Client SDK enables communication with an LMOS agent. The `WotConversationalAgent` only requires the Agent Description (TD) endpoint to create a proxy that can be used to invoke actions or subscribe to events.


```kotlin
val agent = WotConversationalAgent
    .create("http://localhost:9080/weather-agent")


// Interacting with the agent via chat
val answer = agent.chat("What is the weather in London?")

// Consuming an event from the agent, 
// but the ChatAgent does not provide any events in this example
agent.consumeEvent("agentEvent") {
    println("Event: $it")
}
```

### Use the Arc view

LMOS Arc View provides a graphical user interface that allows you to interact with the Arc Agent and get more insights.
For more details see [Arc View](https://eclipse.dev/lmos/docs/arc/view/)







