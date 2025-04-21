---
sidebar_position: 2
title: Supervisor Agent
---

The Supervisor Agent example highlights how agents can communicate with each other.

## Supervisor Agent

The Supervisor Agent uses the `call_agent` function to call other agents for assistance.

Add the following Agents and Functions to your application and try some of the following questions:

- What is the weather like in Berlin?
- Book a hotel in Berlin.
- Book a hotel in Berlin, but only if the weather is good.

### Agents

```kts

agent {
    name = "supervisor-agent"
    model { "GPT-4o" }
    tools {
        +"call_agent"
    }
    prompt {
        """
        ## Goal
        You are a supervisor agent. 
        Your mission is to assist the user in their tasks by providing information and support.
        You should defer to other agents to get their help. Call multiple agents if needed.
       
        ## Instructions
        - Always be polite and helpful.
        - If you cannot help the user, simply reply I cant help you.
        - Use the Agent list to find the right agent for the job.
        - Use the "call_agent" function to call other agents.
          
        ## Agent List
        - Name: weather-agent
          Details: Provides weather information.
          
        - Name: booking-agent
          Details: Helpful for listing and booking hotels.
        """
    }
}

agent {
    name = "booking-agent"
    prompt {
        """
        You are a booking agent that helps customers to find and book hotels.

       ## Instructions
       - Use the list hotels function to list all available hotels.
       - Use the booking function to book a hotel.
       - If you cannot help the user, simply reply I cant help you
     """
    }
    tools {
        +"book_hotel"
        +"list_hotels"
    }
}

agent {
    name = "weather-agent"
    prompt {
        """
        You are a professional weather service. You provide weather data to your users.
        You have access to real-time weather data with the get_weather function.

       ## Instructions
       - If you cannot help the user, simply reply I cant help you
       - Use the get_weather function to get the weather data.
     """
    }
    tools {
        +"get_weather"
    }
}
```


### Functions

```kts

function(
    name = "call_agent",
    description = "Calls another agent.",
    params = types(
        string("name", "the name of the agent to call."),
        string("question", "the question to aks the agent.")
    )
) { (agentName, question) ->

    emitMessage("Calling $agentName with '$question'...")
    memory("last_call_agent", agentName)

    // we get the current conversation and replace the last message with the new question to ask the agent.
    val conversation = get<Conversation>().removeLast() + UserMessage(question.toString())
    val resultConversation = callAgent(agentName.toString(), conversation).getOrNull()
    resultConversation?.latest<AssistantMessage>()?.content ?: "I couldn't reach the agent."
}

function(
    name = "book_hotel",
    description = "Books a hotel.",
    params = types(
        string("name", "The name of the hotel to book.")
    )
) { (hotel) ->
    """
      $hotel was booked successfully.
  """
}

function(
    name = "list_hotels",
    description = "List available hotels.",
) {
    """
     Name: The King's Hotel
     Price: 100 euros
     Location: Berlin
     
     Name: The Prince Hotel
     Price: 80 euros
     Location: Bonn
     
     Name: The Queen Hotel
     Price: 200 euros
     Location: Hamburg
  """
}


function(
    name = "get_weather",
    description = "Returns the current weather.",
    params = types(
        string("location", "the location to get the weather for."),
    )
) { (location) ->
    """The weather is sunny in $location. A lovely 32 degrees celsius."""
}

```


