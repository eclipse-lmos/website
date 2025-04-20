---
title: Manual Setup
sidebar_position: 2
---

From version 0.123.0

The following section describes how to use the Arc Framework in any application.

For some examples, goto https://github.com/eclipse-lmos/arc/tree/main/examples/src/main/kotlin

## Defining Agents

The following example shows how to use the `agents` function to define Arc Agents.

The `agents` function provides many default values that can be overridden to customize the behavior of the framework.

See the section on [Loading LLM Clients](#loading-llm-clients) for more information on how to load the correct LLM
clients.

```kotlin

fun main() = runBlocking {
    // Set the OpenAI API key as a system property or environment variable.
    System.setProperty("OPENAI_API_KEY", "1234")

    val agents = agents(
        functions = {
            function(name = "get_weather", description = "Returns the current weather.") {
                "the weather is sunny!"
            }
            // add more functions here
        }
    ) {
        agent {
            name = "MyAgent"
            model { "gpt-4o" }
            tools { +"get_weather" }
            prompt {
                """
                You are a weather assistant. Help the user with their questions about the weather.
                """
            }
        }
        // add more agents here
    }

    val reply = agents.getChatAgent("MyAgent").ask("What is the weather like?").getOrNull()
    println(reply)
}

```

The `agents` function provides many defaults that can be overridden to customize the behavior of the framework.

## Loading LLM Clients

LLM Clients are loaded automatically based on the libraries on the classpath and the variables set.

The following variables are used to load the LLM Clients:

| Name                 | Description                                                                         | Values                                 | Required                            |
|----------------------|-------------------------------------------------------------------------------------|----------------------------------------|-------------------------------------|
| ARC_CLIENT           | The client library to use.                                                          | azure, openai, ollama, gemini, bedrock | yes                                 |
| ARC_MODEL_ALIAS      | An alias for the model name. If set, this value must be reference on the Agent DSL. |                                        | no                                  |
| ARC_MODEL            | The name of the model.                                                              |                                        | only if ARC_MODEL_ALIAS is set.     |
| ARC_AI_URL           | The endpoint of the model.                                                          |                                        | not required for openai nor ollama. |
| ARC_AI_KEY           | The api key to access the model.                                                    |                                        |                                     |
| ARC_AI_ACCESS_KEY    | The access key to access the model.                                                 |                                        | usually required for bedrock.       |
| ARC_AI_ACCESS_SECRET | The access secret to access the model.                                              |                                        | usually required for bedrock.       |

`OPENAI_API_KEY` can also be used to create an OpenAI client.

Multiple clients can be defined by appending an index to the variable name, for example: ARC_CLIENT[0], ARC_CLIENT[1],
etc..
Max number of clients is 10.

Variables are resolved in the following order:

1. System properties
2. Environment variables
3. home/.arc/arc.properties

### Dependencies

The following shows the dependencies required to use the Arc Framework in your project.

Base dependencies:

```kts
    implementation("org.eclipse.lmos:arc-agents:$arcVersion")
```

Azure / Open AI

```kts
    implementation("org.eclipse.lmos:arc-azure-client:$arcVersion")
```

Gemini

```kts
    implementation("org.eclipse.lmos:arc-langchain4j-client:$arcVersion")
    implementation("dev.langchain4j:langchain4j-google-ai-gemini:$langchain4jVersion")
```

Ollama

```kts
    implementation("org.eclipse.lmos:arc-langchain4j-client:$arcVersion")
    implementation("dev.langchain4j:langchain4j-ollama:$langchain4jVersion")
```

Bedrock

```kts
    implementation("org.eclipse.lmos:arc-langchain4j-client:$arcVersion")
    implementation("dev.langchain4j:langchain4j-bedrock:$langchain4jVersion")
```
