# Arc CLI


## Install Arc CLI

Install Arc CLI:

On Linux, macOS, and Windows (using WSL or bash compatible shell like Cygwin or MinGW)
```
curl -Ls https://sh.jbang.dev | bash -s - trust add https://github.com/eclipse-lmos/arc/
curl -Ls https://sh.jbang.dev | bash -s - app install --fresh --force https://github.com/eclipse-lmos/arc/blob/main/arc-runner/arc.java
```

On Windows using Powershell:
```
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iex "& { $(iwr https://ps.jbang.dev) } trust add https://github.com/eclipse-lmos/arc/blob/main/arc-runner/"
iex "& { $(iwr https://ps.jbang.dev) } app install --fresh --force https://github.com/eclipse-lmos/arc/blob/main/arc-runner/arc.java"
```
(This will install everything you need to run the arc-runner, including JAVA)


## Setup LLM Access 

Set the following variables:

```
arc set ARC_AI_KEY YOUR_OPENAI_KEY // The key to authenticate with the AI service. can be omitted if using Azure Login.
arc set ARC_CLIENT openai // or azure, ollama, etc.
arc set ARC_MODEL gpt-4o // the name of the model to use
```

## Create an Agent

```
arc new my-agent
```

This will add a new agent under the folder "agents".


## Run Arc

```
arc run agents
```

Start the Arc Server that will host your new Arc Agent.


## Chat with your Agent
```
arc view
```

This will open the Arc View that contains a Chat Interface and much more...


## List more commands
``` 
arc 
```