# Model Context Protocol (MCP)

From version 0.122.0

The Model Context Protocol (MCP) is an open protocol that enables the 
integration of LLM Agents with external tools and data sources. 

The Arc Framework makes use of the MCP in the following ways:

 - Integrates MPC hosted tools seamlessly into Arc Agents.
 - Enables the pulling of prompts from MCP enabled servers.
 - Exposes Arc Functions as MCP tools.

![MCP Diagram](/img/mcp.png)


### Consuming MCP Tools

Integrating MCP tools into your Arc Agent is as simple as adding the following configuration to your `application.yml` file:

```yaml
  mcp:
    tools:
      urls: [MCP_TOOL_SERVER]
```

One or more MCP tool servers can be specified in the `urls` list.

After that tools can be referenced in Agents the same as if they were local tools.

```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    prompt { """ Some system prompt """ }
    tools {
        +"get_weather"
        +"get_time"
    }
}
```

### Arc as a MCP Server

Arc can also function as a MCP server, exposing its tools to other agents.
A pre-requisite for this is that Arc is running in Spring Boot server 
and the Arc Spring Boot Starter is included in the project.

Once that is set up, simply enable the feature by adding the following configuration to your `application.yml` file:

```yaml
arc:
  mcp:
    tools:
      expose: true
```

and add the Spring Boot MCP library to your project:

```kts
implementation("org.springframework.ai:spring-ai-mcp-server-webmvc-spring-boot-starter:1.0.0-M6")
```

See https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html#_webflux_server_configuration 
for some configuration options.