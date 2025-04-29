---
title: Glossary
sidebar_position: 1
---

The Arc Framework DSL provides a rich set of functions 
that can be used to implement complex logic in a concise and readable manner.

If you are looking for a description of the Agent Fields DSL, please
check out the [Defining Agents](./defining_agents.md#overview).

Example of the time and memory functions:

```kotlin
  agent {
    name = "MyAgent"
    prompt {
        val name = memory<String>("user_name")
        """
         The user's name is $name.
         The time is ${time()}
        """
    }
  }

```

The following list some of the most common functions that can be used in the DSL.

| Name                         | Description                                                                                        | Details                                                 |
|------------------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| get                          | Returns a bean from the Agent Context.                                                             | [More](../Features/accessing_beans)                     |
| llm                          | Calls the llm.                                                                                     | [More](../Features/extensions/#llm)                     |
| userProfile                  | Returns a value from the customer profile.                                                         | [More](../Features/extensions/#system-and-user-context) |
| system                       | Returns a system property.                                                                         | [More](../Features/extensions/#system-and-user-context) |
| limit                        | Rate limiter                                                                                       | [More](../Features/rate_limiter)                        |
| getData                      | Returns a data set that was stored.                                                                | [More](../Features/data)                                |
| addData                      | Sets a data set that was loaded.                                                                   | [More](../Features/data)                                |
| time                         | Returns the current time.                                                                          | [More](../Features/extensions/#time-date-year)          |
| debug, info, warn, and error | Logs messages to the logging system                                                                | [More](../Features/extensions/#logging)                 |
| tracer                       | Returns the AgentTracer.                                                                           | [More](../../ccore/tracing/#adding-custom-traces)       |
| memory                       | Stores and retrieves values from memory.                                                           | [More](../../ccore/memory)                              |
| emitMessage                  | Returns a message to the client. Multiple messages can be returned to the client in a single turn. |                                                         |
| breakWith                    | The `breakWith` function can be used to stop the agent from further processing the message and a return a dedicated response. | [More](../filters/#the-breakwith-function)              |

