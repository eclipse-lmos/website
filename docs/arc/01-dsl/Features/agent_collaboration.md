---
title: Agent Collaboration
---

From version 0.122.0

This page describes ways in which multiple agents can communicate and collaborate with each other.

For a more elaborate Multi Agent setup with Agent Discovery and Routing, 
please check out our parent Project [LMOS](https://eclipse.dev/lmos/).

## Calling another Agent

The `callAgent` or `askAgent` functions allows you to call another agent from anywhere within the Agent DSL.
This is useful for creating Supervisor Agents or simply 

```kotlin

val result: Conversation = callAgent("assistant-agent", input = "a question".toConversation()).getOrNull()
// or
val result: String = askAgent("assistant-agent", input = "a question").getOrNull()

```

> Note: An Agent is not allowed to call itself. This will result in a exception.

A common use case is to place the `callAgent` function in an LLM Function
and let the Agent decide itself when to call the other agent.

Example:

```kts
   agent {
    name = "supervisor-agent"
    tools { +"call_agent" }
    prompt {
        """
        You are a supervisor agent. 
        You can call other agents to get their help.
        Call the "weather-agent" if you need weather information.
        Call the "booking-agent" if you need to book a hotel.
        """
    }
}

function(
    name = "call_agent",
    description = "Calls an Agent.",
    params = types(string("name", "the name of the agent to call."))
) { (name) ->
    val currentConversation = get<Conversation>()
    val result = callAgent(name.toString(), input = currentConversation).getOrNull()
    result?.latest<AssistantMessage>()?.content ?: "Failed to call agent $name!"
}

```

## Handing over to another Agent

The `nextAgent` function allows you to hand over the conversation to another agent.
That agent will receive the output of the current agent as input.

If the current agent fails or throws an exception, then the next agent will not be called.

The `nextAgent` function can be used in the `filterOutput` block or as a top level function.

```kts

agent {
    name = "booking-agent"
    nextAgent("weather-agent") // here 
    filterOutput {
        if (someCondition) {
            nextAgent("weather-agent") // or here
        }
    }
}
```

> Note: The limit of Agent Hand-Overs to 20. This is to prevent infinite loops.

## Implementing complex Agent workflows 

More complex agent workflows can simply be implemented in normal Kotlin or Java code.

Here is a simple example of a HolidayPlanner Spring Bean that uses multiple agents to find a good date for a holiday.

```kts

@Component
class HolidayPlanner(private val agentProvider: AgentProvider) {

    suspend fun findAGoodDate() {
        val weatherAgent = agentProvider.getAgentByName("weather-agent") as ChatAgent
        val bookingAgent = agentProvider.getAgentByName("booking-agent") as ChatAgent
        val calendarAgent = agentProvider.getAgentByName("calendar-agent") as ChatAgent

        var weather = ""
        var available = ""
        var date = "today"

        while (weather != "good" && available != "yes") {
            date =
                bookingAgent.ask("Find a hotel in Berlin for 2 nights. Return the first available date after $date.")
                    .getOrThrow()
            weather = weatherAgent.ask("What is the weather like in Berlin on $date? Return good or bad.").getOrThrow()
            available = calendarAgent.ask("Check if i am available on the $date? Return yes or no.").getOrThrow()
        }
        println("Hotel can be booked on the $date")
    }
}
```


## Calling Remote Agents

Agents running in the same JVM can call each other with no extra configuration. 
However, if you want to call agents running on other servers, or written in other languages or frameworks, 
then a custom `AgentLoader` is required.

Simple add one or more `AgentLoader`s for each remote agent you want to call.

Example:
```kts

@Component
class RemoteAgentLoader : AgentLoader {

    override fun getAgents(): List<Agent<*, *>> {
        return listOf(
            object : ChatAgent {
                override val name = "remote-agent"
                override val description = "Remote agent"
                override suspend fun execute(input: Conversation, context: Set<Any>): Result<Conversation, AgentFailedException> {
                    TODO("Call the remote agent here")
                }
            }
        )
    }
}
```