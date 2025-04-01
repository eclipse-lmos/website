---
title: Defining Agents
sidebar_position: 1
---

Agents are defined using the Arc Agent DSL.

Example

```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    model { "gemma:7b" }
    prompt { """
       You are a professional weather service.
       You have access to real-time weather data with the get_weather function.
       Keep your answer short and concise.
       All you require is the location.
       if you cannot help the user, simply reply "I cant help you"
     """
    }
    tools {
        +"get_weather"
    }
}
```

### Overview

| Name         | Description                                                                                                 |  
|--------------|-------------------------------------------------------------------------------------------------------------| 
| name         | The name of the Agent. This should be a unique identifier. Preferably without special characters.           |  
| model        | The model that should be provided to the Agent.                                                             |                                     
| description  | A short description of what the Agent does.                                                                 |  
| prompt       | The System Prompt of the Agent. The `prompt` defines the core objective, goals and instructions for Agents. |  
| tools        | A list of tools/functions that the Agent uses, [see](../defining_functions).                                |  
| filterInput  | Defines filter logic, [see](../filters).                                                                    |  
| filterOutput | Defines filter logic, [see](../filters).                                                               |  
| limit        | Defines a rate limiter, [see](../Features/rate_limiter).                                                    |


See the following pages on how to load the agents into your application.
- [Manual Setup](/docs/arc/manual_setup)
- [Spring Boot Beans](/docs/arc/spring/agent-beans)


### Prompt templating

The `prompt` function of an Agent is called on each request. 
Meaning that it can be dynamically customized to best suit the current context. 
Now although Kotlin Strings are quite powerful, 
adding logical constructs such as `if` and `for loops` statements can be cumbersome.

For this purpose, the Arc DSL overwrites the UnaryPlus operator, `+`, within the `prompt` block
to allow for simple string concatenation.

For example, the following code snippet shows how to use the `+` operator to build a dynamic prompt.
```kts
agent {
    prompt {
        +"Here is the first part og the prompt."
        if(someCondition) {
            +"Here is a conditional part of the prompt."
        }
      "The last part of the prompt (this does not require a + because it is automatically returned)."
    }
}
```

