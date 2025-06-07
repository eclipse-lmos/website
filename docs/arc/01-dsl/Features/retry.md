---
title: Retry
---

The `retry` function re-runs the current Agent. This is useful for when the Agent initially generates a bad response.
Due to the undeterministic nature of LLMs retrying a request can often yield a better response.

Example "Retry when quality check fails":
```kotlin
agent {
    name = "weather"
    filterOutput {
       if(!qualityCheck()) {
           retry(max = 3)
       }
    }
}
```

When the `retry` function is called, the agent will be executed with the same parameters and state as the original run,
with the only difference being that an instance of `RetrySignal` will be added to the context.

The `RetrySignal` bean can be accessed with the `get` function
and will contain the data provided to the `retry` function.

**Warning:** The default retry count is 100! 

Example "Pass instructions to the second run":
```kotlin
agent {
    name = "weather"
    filterOutput {
        if(!qualityCheck()) {
            retry(reason = "feedback to agent", max = 3)
        }
    }
    prompt {
        val retry = getOptional<RetrySignal>()
        if (retry != null) {
            // The details provided to the retry function can be accessed here.
            """ Updated Instructions with ${retry.reason}"""
        } else {
            """ Instructions """
        }
    }
}
```

In this example, a `reason` is passed to the `retry`. 
The `reason` can then be used to update the system prompt of the agent to help ensure a better response. 