---
title: Defining Functions
---

Functions are an important building block of Agents. They are used to access external services and data.
An Agent can be assigned multiple functions. 
The model can choose functions based on their names, descriptions, and parameter schemas.

Under the hood, these functions translate to LLM Functions, for example,
OpenAI functions (https://platform.openai.com/docs/guides/function-calling).

:::info 
Not all Models/Clients support functions.
:::

Here is an example of a Weather Agent assigned a `get_weather` function and `get_time` function.

```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    prompt { """ Some system prompt """ }
    tools {
        +"get_weather"
        +"get_time"
    }
}
```

### Providing functions

The names in an agent's `tools` block must be available from an `LLMFunctionProvider` when the agent executes.
For a regular Kotlin application, define functions through the `functions` block of `agents`; see
[Manual Setup](/docs/arc/manual_setup#defining-agents). For Spring Boot applications, register functions as
`Functions` beans; see [Agent Beans](/docs/arc/spring/agent-beans).

Once a function is provided, assign its name to an agent as shown above. If no provider can resolve an assigned name,
the agent execution fails before calling the model.

### Function arguments and schemas

`types(...)` defines the JSON schema that is sent to the model. ARC passes the resulting argument values to the function
lambda as a `List<Any?>` in the same order as the parameters declared in `types(...)`. Kotlin destructuring, such as
`{ (location) -> ... }`, is a concise way to access those values. Optional parameters (`required = false`) and malformed
model arguments can be `null` or have unexpected runtime types, so production functions should validate their inputs.

The DSL supports `string`, `integer`, `number`, `boolean`, `array`, and `objectType` parameters. String and array
parameters can also declare an `enum`; all parameter helpers accept `required = false` for optional input.

Example function definition:

```kts
function(
  name = "get_weather",
  description = "Returns real-time weather information for any location",
  params = types(string("location", "a city to obtain the weather for."))
) { (location) ->
    """
        The weather is good in $location. It is 20 degrees celsius.
    """
  }

```

Functions always return a string. This string can contain natural language text, JSON, or any other format
or a combination of them.

Complex parameters, such as arrays or objects, can also be defined using the `types` function.

For example, an array of numbers can be defined as follows:

```kts
function(
    name = "add_numbers",
    description = "Returns the sum of 2 numbers.",
    params = types(array("numbers", "The numbers to add.", itemType = "number"))
) { (numbers) ->
    val toAdd = (numbers as? List<*>)?.mapNotNull { (it as? Number)?.toInt() } ?: emptyList()
    val sum = toAdd.sumOf { it }
    "The sum of the numbers is $sum"
}
```


### Assigning Functions conditionally

Functions can be assigned conditionally based on the Agent's state or the user's input.
Within the `tools` block, you can use the `get` function 
to access the current request or any other bean contained within the context of the Agent.

Here is an example:
```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    prompt { """ Some system prompt """ }
    tools {
        val isBeta = get<SomeCustomBean>().isBeta()
        if(isBeta) +"get_weather_forecast"
        +"get_weather"
        +"get_time"
    }
}
```
(`SomeCustomBean` is a custom bean, not provided by the framework)

### Automatic assign all available functions

If you want to assign all available functions to an Agent, you can use the `AllTools` constant.

Example:
```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    prompt { """ Some system prompt """ }
    tools = AllTools
}
```

This will supply all functions that are available in the application to the Agent.
`AllTools` is a wildcard for every function returned by the current `LLMFunctionProvider`; prefer explicitly named tools
for production agents, especially when functions are sensitive or have side effects.

See also [Defining Agents](/docs/arc/dsl/defining_agents) for assigning functions to an agent.
