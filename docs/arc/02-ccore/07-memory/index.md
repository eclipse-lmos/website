---
title: Memory
---

Using memory is a powerful way to store and retrieve values in the Arc Agent Framework.

The easiest way to use memory in Arc is to use the `memory` function.

The memory function can be accessed anywhere in the Arc DSL.

```kotlin
  // Store a value in memory
  memory("user_name", "Bob")

  // Storing a value in long-term memory
  memory("user_name", "Bob", scope = LONG_TERM)

  // Retrieve a value from memory
  val userName = memory<String>("user_name")

```

Memory keys are automatically namespaced by the conversation id and/or user id.

Data can be stored in two different scopes:
- **LONG_TERM**: Data stored in long term memory is stored indefinitely. It requires a user id.
- **SHORT_TERM**: This data is stored in the current conversation / session.



The Arc Agent Framework declares the following interface for memory:

```kotlin
interface Memory {

    /**
     * Store a value in LONG_TERM memory.
     * @param owner The owner of the memory. For example, the user id.
     * @param key The key to store the value under.
     * @param value The value to store. If null, the value is removed from memory.
     */
    suspend fun storeLongTerm(owner: String, key: String, value: Any?)

    /**
     * Store a value in SHORT_TERM memory.
     * @param owner The owner of the memory. For example, the user id.
     * @param key The key to store the value under.
     * @param value The value to store. If null, the value is removed from memory.
     * @param sessionId The session id to store the value under.
     */
    suspend fun storeShortTerm(owner: String, key: String, value: Any?, sessionId: String)

    /**
     * Fetch a value from memory.
     * @param owner The owner of the memory. For example, the user id.
     * @param key The key to fetch the value for.
     * @param sessionId The session id to fetch the value for. Only used if the value was stored under SHORT_TERM memory.
     * @return The value stored under the key, or null if no value is stored.
     */
    suspend fun fetch(owner: String, key: String, sessionId: String? = null): Any?
}
```

Each application wanting to use memory can provide an implementation of the `Memory` interface.

Arc provides the following implementations:

## In-Memory Memory

The Arc Agent Framework provides a default in-memory implementation of the `Memory` interface.
The implementation is automatically configured when no other implementation of the `Memory` interface is provided.

This implementation is good for getting started, but it is not recommended for production use,
as memory is not persisted or shared between instances.

## Mongo Memory

| Package Name                                                                | Type                |
|-----------------------------------------------------------------------------|---------------------|
| io.github.eclipse-lmos.arc:arc-memory-mongo-spring-boot-starter:$arcVersion | Spring Boot Starter |

The Mongo Memory implementation uses the [Mongo Database](https://www.mongodb.com/) to store data.

The module is provided as a Spring Boot Starter and under the hood uses Spring Data to access
the Mongo Database.

A time-to-live (TTL) index is created for `short-term` memory entries to automatically remove
them after a period of time.

| Configuration             | Description                                                                               | Type     | Default        |
|---------------------------|-------------------------------------------------------------------------------------------|----------|----------------|
| arc.memory.short-term-ttl | The time-to-live for short-term memory entries.                                           | Duration | PT3H (3 hours) |
| spring.data.mongodb.uri   | The uri of the Mongo Database. Example, "mongodb://admin:password@localhost:27017/memory" | URI      | localhost      |

For more details on how to configure a Mongo Database with Spring, please refer to
https://docs.spring.io/spring-data/mongodb/reference/mongodb.html.


## Redis Memory

The `arc-memory-redis` module provides a Redis implementation of the Memory interface based on the Lettuce Redis client.
The Redis Memory can be easier setup by providing a configured RedisClient.

```kotlin
    @Bean
    fun memory(
        @Value("\${redis.username:}") username: String,
        @Value("\${redis.password:}") password: String,
        @Value("\${redis.url:}") redisUrl: String,
    ): Memory {
        val url = RedisURI.Builder.redis(redisUrl).withAuthentication(username, password).build()
        val client = RedisClusterClient.create(url)
        return RedisMemory(ofHours(3), client)
    }
```