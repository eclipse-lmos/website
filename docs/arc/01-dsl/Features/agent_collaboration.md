---
title: Agent Collaboration
---
# Agent Collaboration

From version 0.122.0

This page describes ways in which multiple agents can communicate and collaborate with each other.

For a more elaborate Multi Agent setup with Agent Discovery and Routing, 
please check out our parent Project [LMOS](https://eclipse.dev/lmos/).

## Calling another Agent

The `callAgent` or `askAgent` functions allow you to call another agent from anywhere within the Agent DSL.
This is useful for creating Supervisor Agents or simply delegating specific tasks to specialized agents.

See [Cookbook](/docs/arc/cookbook/supervisor) for an example Supervisor Agent.

```kotlin
// Using callAgent when you need the full conversation context
val result: Conversation = callAgent("assistant-agent", input = "a question".toConversation()).getOrNull()

// Using askAgent when you only need the text response
val result: String = askAgent("assistant-agent", input = "a question").getOrNull()
```

> Note: An Agent is not allowed to call itself. This will result in an exception.

A common use case is to place the `callAgent` function in an LLM Function
and let the Agent decide itself when to call the other agent. This creates a more dynamic and flexible system
where agents can autonomously determine when they need assistance from other agents.

Example of a supervisor agent that can call other agents:

```kts

 // supervisor-agent.agent.kts 
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
 
 // weather-agent.agent.kts 
 agent { 
      name = "weather-agent"
      // ...
 }

 // booking-agent.agent.kts 
 agent {
     name = "booking-agent"
     // ... 
 }

// call_agent.functions.kts - Define a function that the agent can use to call other agents.
import org.eclipse.lmos.arc.agents.conversation.*

function(
    name = "call_agent",
    description = "Calls an Agent.",
    params = types(string("name", "the name of the agent to call."))
) { (name) ->
    val currentConversation = get<Conversation>()
    val result = callAgent(name.toString(), input = currentConversation).getOrNull()
    
    // Extract just the content from the assistant's message or return an error message
    result?.latest<AssistantMessage>()?.content ?: "Failed to call agent $name!"
}

```

## Handing over to another Agent

The `nextAgent` function allows you to hand over the conversation to another agent.
That agent will receive the output of the current agent as input, creating a chain of agent interactions.

If the current agent fails or throws an exception, then the next agent will not be called, breaking the chain.

The `nextAgent` function can be used in two ways:

1. **As a top-level function** - Always hands over to the specified agent after the current agent completes
2. **In the `filterOutput` block** - Conditionally hands over based on specific criteria

```kts
agent {
    name = "booking-agent"
    nextAgent("weather-agent")
    filterOutput {
        // Conditional handover based on some condition
        if (someCondition) {
            nextAgent("weather-agent") 
        }
    }
}
```

> Note: There is a limit of 20 Agent Hand-Overs in a chain. This is to prevent infinite loops that could occur if agents keep handing over to each other indefinitely.


## The AgentChain

If having an agent explicitly calling another agent, does not sit right, then enter the `AgentChain`.

`AgentChain`s define a sequence of agents that should be called one after the other, 
where the output of one agent is passed as input to the next agent in the chain.

Unlike the `nextAgent` function, the `AgentChain` is defined outside the agent and then passed to 
the agent as a parameter.

The agent will then execute the chain of agents in the order they are defined.

For example, Agent Chains can be defined as a System Context variable, when calling an agent.

```json
{
  "systemContext": [
    {
      "key": "agent_chain",
      "value": "agent01,agent02,agent03,agent04"
    }
  ]
}

```

The `AgentChain` is accessible in the agent context and can be accessed using the `get<AgentChain>()` function.

When calling agents directly, remember to use the `executeWithHandover` extension function to trigger this behaviour.

```kts
    agent.executeWithHandover(conversation, setOf(AgentChain(listOf("agent01,agent02,agent03,agent04"))))
```


## Implementing complex Agent workflows 

More complex agent workflows can be implemented in standard Kotlin or Java code, 
giving you full control over the orchestration logic and error handling.


```kts
@Component
class HolidayPlanner(private val agentProvider: AgentProvider) {

    suspend fun findAGoodDate() {
        // Get references to the required agents
        val weatherAgent = agentProvider.getAgentByName("weather-agent") as ChatAgent
        val bookingAgent = agentProvider.getAgentByName("booking-agent") as ChatAgent
        val calendarAgent = agentProvider.getAgentByName("calendar-agent") as ChatAgent

        // Initialize variables to track our search
        var weather = ""
        var available = ""
        var date = "today"

        // Keep searching until we find a date with good weather where the user is available
        while (weather != "good" && available != "yes") {
            // Ask the booking agent to find an available hotel date
            date =
                bookingAgent.ask("Find a hotel in Berlin for 2 nights. Return the first available date after $date.")
                    .getOrThrow()

            // Check the weather for that date
            weather = weatherAgent.ask("What is the weather like in Berlin on $date? Return good or bad.").getOrThrow()

            // Check if the user is available on that date
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

Simply add one or more `AgentLoader` implementations for each remote agent you want to call. 

Here's an example of a custom `AgentLoader` that integrates with a remote agent:

```kts
@Component
class RemoteAgentLoader : AgentLoader {

    override fun getAgents(): List<Agent<*, *>> {
        return listOf(
            object : ChatAgent {
                override val name = "remote-agent"
                override val description = "Remote agent that runs on a different server"

                override suspend fun execute(input: Conversation, context: Set<Any>): Result<Conversation, AgentFailedException> {
                    TODO("Call the remote agent here")
                }
            }
        )
    }
}
```

Once registered, remote agents can be called using the same `callAgent` or `askAgent` functions as local agents, 
providing a seamless experience regardless of where the agent is actually running.
