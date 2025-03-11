---
title: Observability
sidebar_position: 2
---

# Observability Considerations

In multi-agent systems, multiple Agents (and Tools) interact with each other, often across different platforms and protocols. Without observability, debugging issues, identifying performance bottlenecks, and ensuring overall system reliability becomes exceedingly difficult.

Key reasons why observability is important:
- **Real-time Monitoring**: Allows operators to monitor the health of the overall system and detect anomalies early.
- **Performance Optimization**: Provides insights into where delays or inefficiencies occur in the system.
- **Fault Isolation**: Helps pinpoint the exact location of failures or errors, speeding up the troubleshooting process.

## Distributed Tracing

LMOS protocol supports **distributed tracing**, allowing for the tracking of messages as they traverse multiple Agents and Tools. 

- **Trace Context Integration**: LMOS protocol messages are designed to propagate trace context (via `traceparent` and `tracestate`).
- **Propagation of Trace Metadata**: The trace information includes the **trace ID**, **span ID**, and **trace flags**, ensuring that each component participating in the interaction can log its part of the trace.

## Contextual Metadata

- **`traceparent`**: Used for linking different services in a trace. This header includes the `TraceId`, `SpanId`, and `TraceFlags` to ensure consistency and traceability across the system.
  

  **Example**:
  ```text
  traceparent: 00-<trace-id>-<span-id>-<trace-flags>
  ```

- **`tracestate`**: This optional header can carry vendor-specific or system-specific trace information, enhancing observability by incorporating metadata that reflects the capabilities of different tracing systems.
  
  **Example**:
  ```text
  tracestate: <key1>=<value1>,<key2>=<value2>
  ```

**Message Example**:
```json
{
   "thingID": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "messageID": "c370da58-69ae-4e83-bb5a-ac6cfb2fed54",
   "messageType": "readProperty",
   "name": "modelConfiguration",
   "correlationID": "5afb752f-8be0-4a3c-8108-1327a6009cbd",
   "traceparent": "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01",
   "tracestate": "congo=BleGNlZWRzIHRohbCBwbGVhc3VyZS4"
}
```


## Trace IDs vs Message and Correlation IDs

LMOS supports message correlation using **Message IDs** and **Correlation IDs**, which help track the lifecycle of specific messages or interactions across the system. While these IDs are not as comprehensive as distributed traces, they provide an additional layer of tracking for individual request-response pairs.

- **Message ID**: Used to identify and track individual messages within the system.
- **Correlation ID**: Useful for grouping related messages or interactions, particularly in request-response patterns. While it doesn't carry the full trace context, it serves to link messages that are part of the same process.

**Difference Between Trace and Message IDs**:
- **Message IDs** are typically limited to a specific interaction, whereas trace IDs provide end-to-end visibility across multiple systems or components.
- **Trace IDs** give a hierarchical view of requests, allowing developers to track multiple interactions (spans) that are part of a larger workflow.
