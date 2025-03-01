# Agent Tracing

Understanding what Agents are doing and why is crucial 
for running and maintaining any agentic system.

The Arc Agent framework provides traces out of the box for most Agent operations.


### Activate Tracing in a Spring Boot Application

The [Arc Agent Spring Boot Starter](/docs/arc/spring/integration/) provides support for tracing using Micrometer Tracing.

To activate tracing, simply add the required dependencies to your project.

Read https://docs.spring.io/spring-boot/reference/actuator/tracing.html for more information on how to configure
different tracers.

Example dependencies for Zipkin tracing:
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


:::info 
When testing locally, dont forget to set the sampling probability to 1 to see all traces.
```properties
management.tracing.sampling.probability=1
```
:::


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