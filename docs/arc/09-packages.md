---
title: Packages
---

## Basic Packages
```kts
val arcVersion = "0.115.0"
implementation("org.eclipse.lmos:arc-agents:$arcVersion")
```

## DSL Scripting
```kts
implementation("org.eclipse.lmos:arc-scripting:$arcVersion")
```

## AI Clients
```kts
// Add the Azure OpenAI client library for Java
implementation("org.eclipse.lmos:arc-azure-client:$arcVersion")

// Add the langchain4j dependencies for the AIClient that should be used.
val langchain4jVersion = "0.36.2"
implementation("dev.langchain4j:langchain4j-bedrock:$langchain4jVersion")
implementation("dev.langchain4j:langchain4j-google-ai-gemini:$langchain4jVersion")
implementation("dev.langchain4j:langchain4j-ollama:$langchain4jVersion")
```

## Spring Boot Packages
```kts
implementation("org.eclipse.lmos:arc-spring-boot-starter:$arcVersion")
implementation("org.eclipse.lmos:arc-memory-mongo-spring-boot-starter:$arcVersion")
```

## GraphQL
```kts
implementation("org.eclipse.lmos:arc-api:$arcVersion")
implementation("org.eclipse.lmos:arc-graphql-spring-boot-starter:$arcVersion")
```

## Extensions 
```kts
implementation("org.eclipse.lmos:arc-reader-pdf:$arcVersion")
implementation("org.eclipse.lmos:arc-reader-html:$arcVersion")
```