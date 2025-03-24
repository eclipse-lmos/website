---
title: Glossary
sidebar_position: 1
---

A list of functions that ca be used within the DSL.

| Name                         | Description                                | Details                                                 |
|------------------------------|--------------------------------------------|---------------------------------------------------------|
| get                          | Returns a bean from the Agent Context.     | [More](../Features/accessing_beans)                     |
| llm                          | Calls the llm.                             | [More](../Features/extensions/#llm)                     |
| userProfile                  | Returns a value from the customer profile. | [More](../Features/extensions/#system-and-user-context) |
| system                       | Returns a system property.                 | [More](../Features/extensions/#system-and-user-context) |
| limit                        | Rate limiter                               | [More](../Features/rate_limiter)                        |
| getData                      | Returns a data set that was stored.        | [More](../Features/data)                                |
| addData                      | Sets a data set that was loaded.           | [More](../Features/data)                                |
| time                         | Returns the current time.                  | [More](../Features/extensions/#time-date-year)          |
| debug, info, warn, and error | Logs messages to the logging system        | [More](../Features/extensions/#logging)                 |
| tracer                       | Returns the AgentTracer.                   | [More](../../tracing/#adding-custom-traces)             |
| memory                       | Stores and retrieves values from memory.   | [More](../../memory)                                    |
