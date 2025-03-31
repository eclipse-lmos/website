# Agent Tracing

Understanding what Agents are doing and why is crucial 
for running and maintaining any agentic system.

The Arc Agent framework provides traces out of the box for most Agent operations.


### Activate Tracing in a Spring Boot Application

The [Arc Agent Spring Boot Starter](/docs/arc/spring/integration/) provides support for tracing using Micrometer Tracing.

This enables Arc to export traces to multiple Tracing frameworks, such as Zipkin, Wavefront, or OTLP.

To activate tracing, simply add the required dependencies to your project.

Read https://docs.spring.io/spring-boot/reference/actuator/tracing.html for more information on how to configure
different tracers.

**Check out https://github.com/eclipse-lmos/arc-spring-init for a complete example.**

:::info
When testing locally, dont forget to set the sampling probability to 1 to see all traces.
```properties
management.tracing.sampling.probability=1
```
:::

### OpenTelemetry Tracing

Add the following dependencies to your project:

```kts
implementation(platform("io.micrometer:micrometer-tracing-bom:1.4.4"))
implementation("io.micrometer:micrometer-tracing")
implementation("io.opentelemetry:opentelemetry-exporter-otlp")
implementation("io.micrometer:micrometer-tracing-bridge-otel")
```

Then configure a OTLP exporter in your `application.yml`:

```yml
management:
  otlp:
    tracing:
      endpoint: ${OTLP_ENDPOINT}
      headers:
        Authorization: Bearer ${OTLP_TOKEN}
```

Start a Phoenix server using docker (https://docs.arize.com/phoenix/deployment/docker):

Configure the server:

```yml
management:
  otlp:
    tracing:
      endpoint: http://phoenix:6006/v1/traces
```

```shell
docker run -p 6006:6006 -p 4317:4317 -i -t arizephoenix/phoenix:latest
```

Open the Phoenix UI in your browser: http://localhost:6006
and watch the traces of your Arc Agents flow in.

### Zipkin Tracing

Add the following dependencies to your project:
```kts
implementation("io.micrometer:micrometer-tracing-bridge-otel")
implementation("io.opentelemetry:opentelemetry-exporter-zipkin")
implementation("com.google.protobuf:protobuf-java:3.23.4")
implementation("io.opentelemetry.proto:opentelemetry-proto:1.3.2-alpha")
```

Start a zipkin server using docker (https://zipkin.io/pages/quickstart):
```shell
docker run -d -p 9411:9411 openzipkin/zipkin
```

Open the Zipkin UI in your browser: http://localhost:9411/
and watch the traces of your Arc Agents flow in.


### Adding Custom Traces

Arc defines an abstract `AgentTracer` interface that is used to trace the execution steps of Agents.

```kts

interface AgentTracer {

    suspend fun <T> withSpan(name: String, attributes: Map<String, String> = emptyMap(), fn: suspend (Tags) -> T): T
}
```

Throughout the Arc Agent framework, this interface can be used to define custom trace spans for your Agents.

Example of using the `AgentTracer` in a DSL extension function:

```kts
suspend fun DSLContext.myFunction() {
     tracer().withSpan("running") { tags -> 
         // do something 
        tags.tag("tag", "value") // update tags
    }
}
```
