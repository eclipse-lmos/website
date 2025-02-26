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

On Linux, macOS, and Windows (using WSL or bash compatible shell like Cygwin or MinGW)
```
export ARC_AI_URL=https://gpt4-se-dev.openai.azure.com/ // The url hosting the models. Can be omitted if using openai.
export ARC_AI_KEY=YOUR_OPENAI_KEY // The key to authenticate with the AI service. can be omitted if using Azure Login.
export ARC_CLIENT=openai // or azure, ollama, etc.
export ARC_MODEL=gpt-4o // the name of the model to use
```

On Windows using Powershell:
```
$env:ARC_AI_URL="https://gpt4-se-dev.openai.azure.com/" // The url hosting the models. Can be omitted if using openai.
$env:ARC_AI_KEY="YOUR_OPENAI_KEY" // The key to authenticate with the AI service. can be omitted if using Azure Login.
$env:ARC_CLIENT="openai" // or azure, ollama, etc.
$env:ARC_MODEL="gpt-4o" // the name of the model to use
```

## Create an Agent

```
arc new my-agent
```

## Run Arc

```
arc run
```

## Chat with the weather agent
```
arc view
```
