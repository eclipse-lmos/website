---
title: Handling Data
---

Understanding what data was loaded and provided to an Agent is vital to understanding the behavior of the Agent.

For this purpose, the Arc DSL provides the `getData()`  and `setData()` functions.

This functions can be called throughout the Arc DSL and captures the data that has loaded for a single 
turn of a conversation.

Most components of the Arc DSL, will store any data they is load into the context using the `setData()` function.

This includes the main `system prompt` and data loaded by `functions`.

Example:

```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    prompt { """ Some system prompt """ }
    filterOutput {
        val data: List<Data>? = getData()
        // here the output can be checked against the data that was provided to the LLM.
    }
}
```

A common use case is to validate the output of the LLM against the data that was loaded.


### Events

| Name           | Description                                                                                      |   
|----------------|--------------------------------------------------------------------------------------------------|
| DataAddedEvent | Published when the `setData()` function is called. Contains the name and the corresponding data. |    
