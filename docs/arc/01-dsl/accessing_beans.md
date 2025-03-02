---
title: Accessing Beans
sidebar_position: 2
---

Accessing other components or beans in the Arc DSL is vital for building complex Agents.
This can simply be done by using the `get` function. 

The `get` function requires 
a type and uses that type to lookup your bean.

For example,
```kts
agent {
    name = "agentFallback"
    prompt {
        val myBean = get<MyBean>()
        "Integrate data from $myBean" 
    }
}
```
The `get` function can be called anywhere within the DSL.

Beans can be passed to an Agent directly when calling the Agent.

```kts
val result = agent.execute(conversation, setOf(myBean, yourBean))
```

Additionally, a `BeanProvider` can be provided to an Agent on creation.

```kts
val agent = ChatAgent(beanProvider, ...)
```

Note: When using the Arc Spring Boot Starter all beans from the Spring Boot
container are accessible from the `get` function.


### The BeanProvider

The class that provides the beans is the `BeanProvider`.

```kts
interface BeanProvider {

    suspend fun <T : Any> provide(bean: KClass<T>): T
}
```

You are free to implement the `BeanProvider` interface to suit your needs. Or use some of the 
implementations provided by the Arc Framework.