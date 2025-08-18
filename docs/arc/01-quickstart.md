---
title: Quickstart
sidebar_position: 3
---


Welcome to the Arc AI Agents framework!

The Arc Framework is designed to help you build powerful AI Agents quickly and easily.

This is a simple example of an Arc Agent that uses the OpenAI API.

```kts
fun main(): Unit = runBlocking {
    // Set the OpenAI API as a System property or environment variable.
    // System.setProperty("OPENAI_API_KEY", "****")

    agents {
        agent {
            name = "MyAgent"
            model { "gpt-4o" }
            prompt {
                """
                Add your prompt here.
                """
            }
        }
    }.serve(devMode = true)
}
```

Simply add the following dependencies to your `build.gradle.kts` file:

```kts
implementation("org.eclipse.lmos:arc-agents:$arcVersion")
implementation("org.eclipse.lmos:arc-server:$arcVersion")
implementation("org.eclipse.lmos:arc-azure-client:$arcVersion")
```

For a more comprehensive setup please check out the following projects:

| Name                      | Description                                                                                                        | Location                                               |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| Examples                  | A collection of examples showing common use cases and how to quickly get started with Arc Agents.                  | https://github.com/eclipse-lmos/arc/tree/main/examples |                                
| Spring Boot Setup Project | A template Spring Boot project that can be used to quickly create Arc Agents running in a Spring Boot application. | https://github.com/eclipse-lmos/arc-spring-init        |                                


:::info Other useful sections are:
  - [Agent DSL](/docs/arc/01-dsl/defining_agents.md)
  - [Glossary](/docs/arc/01-dsl/gloassary.md)
:::