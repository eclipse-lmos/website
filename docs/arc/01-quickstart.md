---
title: Quickstart
---


Welcome to the Arc AI Agents framework!

The quickest way to get started with Arc Agents is to use the Arc CLI.

Simply install the Arc CLI, setup your API Key and you are ready to create and run your first Arc Agent.

### 1. Install Arc CLI
```
curl -Ls https://sh.jbang.dev | bash -s - trust add https://github.com/eclipse-lmos/arc/
curl -Ls https://sh.jbang.dev | bash -s - app install --fresh --force https://github.com/eclipse-lmos/arc/blob/main/arc-runner/arc.java
```
Using windows, check out the instructions [here](/docs/arc/cli).


### 2. Setup LLM Access

```
export ARC_AI_URL=https://gpt4-se-dev.openai.azure.com/ // The url hosting the models. Can be omitted if using openai.
export ARC_AI_KEY=YOUR_OPENAI_KEY // The key to authenticate with the AI service. can be omitted if using Azure Login.
export ARC_CLIENT=openai // or azure, ollama, etc.
export ARC_MODEL=gpt-4o // the name of the model to use
```

### 3. Create a New Agent 

```
arc new my-agent
```

This will add a new agent under the folder "agents".

```kt
agent {
  name = "my-agent"
  tools = AllTools
  prompt {
    """
      ### Role and Responsibilities ###
      You are a helpful assistant.
      
      ## Instructions
      - Always answer with 'Arc is ready to assist you in creating the future of Agents!.'
    """
  }
}
```
(More information on the Agent DSL [here](/docs/arc/dsl/defining_agents).)

### 3. Chat with your Agent!

```
arc run agents
arc view
```

![Arc View](/img/arc_view01.png)

This will start the Arc Server that will host your new Arc Agent 
and opens the Arc View that will enable you to chat with your Agent.

and that is it! You have created and run your first Arc Agent.

:::info Spring into Action
If you want more, try out our Spring Boot Setup Project
https://github.com/eclipse-lmos/arc-spring-init.

Simply clone the repository and follow the instructions in the README.
:::

