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
Using windows, check out the instructions [here](/docs/arc/cli). <br/>
JBang installation may take few minutes, do not close the terminal and let it complete. Upon installation completion, you will see the message to start new shell.
```
[jbang] Command installed: arc
[jbang] Setting up JBang environment...
Please start a new Shell for changes to take effect
```

### 2. Setup LLM Access

In the new shell, set the following environment variables.
```
export ARC_AI_KEY=YOUR_OPENAI_KEY // The key to authenticate with the AI service. can be omitted if using Azure Login.
export ARC_CLIENT=openai // or azure, ollama, etc.
export ARC_MODEL=gpt-4o // the name of the model to use
```

The `ARC_AI_URL` can be used to provide a different URL for the LLM Model. Not required when connecting to OpenAI.

### 3. Create a New Agent 

```
arc new my-agent
```

This will add a new agent under the folder "agents" with name `my-agent.agent.kts`.

```kt
agent {
  name = "test-agent1"
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
**NOTE:** by default arc agents run on port 8080. Make sure the port is available.<br/>
**NOTE:** The Safari and Brave browsers do not supported connecting to localhost. Please use Chrome, Firefox or Edge.

![Arc View](/img/arc_view01.png)

This will start the Arc Server that will host your new Arc Agent 
and opens the Arc View that will enable you to chat with your Agent. In case arc view does not open, you can access it at https://eclipse.dev/lmos/chat/index.html?agentUrl=http://localhost:8080#/chat.

If you have started the Agent under a different url or port, you can change the url 
using the url button on the top right corner of the Arc View.
![Arc View settings](/img/arc_view03.png)

That is it! You have created and run your first Arc Agent.

:::info Spring into Action
If you want more, try out our Spring Boot Setup Project
https://github.com/eclipse-lmos/arc-spring-init.

Simply clone the repository and follow the instructions in the README.
:::

:::info Manual Setup
If you want to integrate Arc Agents into your existing application,
take a look at [Manual Setup](00-manual_setup.md).
:::

