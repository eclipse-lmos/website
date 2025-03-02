---
title: Rate Limiter
---

The Arc DSL comes with a built-in rate limiter that can be used to limit the number 
of requests an Agent can process in a given time frame.

Example, permit 1 request every 10 seconds:

```kts
agent {
    name = "weather"
    limit { 1 / 10.seconds }
    prompt { """ Some system prompt """ }
}
```

A common use case is to fall back to a different LLM model during peak times.
Here the "fallback model" is used when the rate limit is exceeded.

```kts
agent {
    name = "weather"
    model {
        limit("model") { 1 / 10.seconds } ?: "fallback model"
    }
    prompt { """ Some system prompt """ }
}
```

### Timeout

A timeout can be added to specify the maximum time a request will 
wait before throwing a RateLimitTimeoutException. Default is 30 seconds.

```kts
agent {
    name = "weather"
    limit { 1 / 10.seconds withTimeout 30.seconds }
    prompt { """ Some system prompt """ }
}
```


### Fallback

A fallback can be added to perform a specific action when a RateLimitTimeoutException occurs.

The following example will return "try later" when a timeout occurs.

```kts
agent {
    name = "weather"
    limit { 1 / 10.seconds fallback { breakWith("try later") } }
    prompt { """ Some system prompt """ }
}
```


### Events 

| Name                  | Description                                                                  |   
|-----------------------|------------------------------------------------------------------------------|
| RateLimitedEvent      | Published when a request is blocked due to the rate limiter.                 |    
| RateLimitTimeoutEvent | Published when a request triggers a timeout   exception while being blocked. |   
