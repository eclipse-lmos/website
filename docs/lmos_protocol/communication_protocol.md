---
title: Communication Protocol
sidebar_position: 3
---

# Communication Protocol

The LMOS communication protocol is designed around the Web of Things information model, but specifically designed for AI use cases. 

## Common Message Requirements
- Every message MUST contain:
  - `thingID`: A unique identifier of the Thing. If the Thing Description contains an `id` member, its value MUST be used. Otherwise, the URL from which the Thing Description was retrieved MAY be used. The value MUST be a valid URI.
  - `messageID`: A unique identifier for the current message in UUIDv4 format [RFC9562](https://datatracker.ietf.org/doc/html/rfc9562).
  - `messageType`: A string denoting the type of message, based on the [LMOS message types](#lmos-message-types).
  - `correlationID` (Optional): A unique identifier in UUIDv4 format shared between messages related to the same operation (e.g., request and response).

All date and time values MUST use the `date-time` format defined in [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557).

## Common Message Members Table
| Member         | Type   | Assignment | Description                                                                                 |
|----------------|--------|------------|---------------------------------------------------------------------------------------------|
| `thingID`      | string | Mandatory  | The ID (URI) of the Thing to which the Property belongs.                                    |
| `messageID`    | string | Mandatory  | A unique identifier (UUID) for the current message.                                         |
| `messageType`  | string | Mandatory  | A string denoting the type of message, based on the [LMOS message types](#lmos-message-types). |
| `correlationID`| string | Optional   | A unique identifier (UUID) shared between messages for the same operation, e.g., request and response. |
| `traceparent`    | string    | Optional              | A trace context header that carries the trace information across service boundaries. It includes the `traceId`, `spanId`, and trace flags. Example: `"00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01"`. |
| `tracestate`     | string    | Optional              | A trace context header that provides additional vendor-specific or system-specific trace information. Example: `"congo=BleGNlZWRzIHRohbCBwbGVhc3VyZS4"`. |


## LMOS Message Types

The `messageType` member MUST have a value from the following table:

| **Message Type**             | **Description**                                         | **Entity**            | **Direction**        |
|------------------------------|---------------------------------------------------------|-----------------------|----------------------|
| `invokeAction`               | Invoke an action on a Thing                             | `ActionAffordance`    | Request              |
| `cancelAction`               | Cancel an ongoing or scheduled action                  | `ActionAffordance`    | Request              |
| `queryAction`                | Retrieve the latest status of an action                | `ActionAffordance`    | Request              |Consumer ➡ Thing     |
| `actionStatus`                | Status of a previously invoked action                   | `ActionAffordance`    | Thing ➡ Consumer     |
| `subscribeEvent`              | Subscribe to a specific event from a Thing              | `EventAffordance`     | Consumer ➡ Thing     |
| `unsubscribeEvent`            | Unsubscribe from a specific event from a Thing          | `EventAffordance`     | Consumer ➡ Thing     |
| `subscribeAllEvents`          | Subscribe to all events from a Thing                    | `EventAffordance`     | Consumer ➡ Thing     |
| `unsubscribeAllEvents`        | Unsubscribe from all events from a Thing                | `EventAffordance`     | Consumer ➡ Thing     |
| `readProperty`                | Request a property reading from a Thing                 | `PropertyAffordance`  | Consumer ➡ Thing     |
| `propertyReading`             | A property reading from a Thing                         | `PropertyAffordance`  | Thing ➡ Consumer     |
| `writeProperty`               | Write a property value to a Thing                       | `PropertyAffordance`  | Consumer ➡ Thing     |
| `writeMultipleProperties`     | Write multiple property values to a Thing               | `PropertyAffordance`  | Consumer ➡ Thing     |
| `observeProperty`             | Start observing a property value change in a Thing      | `PropertyAffordance`  | Consumer ➡ Thing     |
| `unobserveProperty`           | Stop observing a property value change in a Thing       | `PropertyAffordance`  | Consumer ➡ Thing     |
| `error`                       | Error response from a Thing                             | `ErrorAffordance`     | Thing ➡ Consumer     |

## Interaction Patterns

### Request-Reply
In this pattern, an agent sends a request and expects a single response, typically with the requested information or acknowledgment.

**Message Types Used**:  
- **`readProperty`** and **`propertyReading`**: Requesting the current value of a property, expecting a reply with the value.  
- **`invokeAction`** and **`actionStatus`**: You can invoke an action and then expect the action status (e.g., pending, in progress, completed, or failed) as a reply. The Thing can return multiple response messages providing updates on the status of the action until it is completed.  
- **`writeProperty`**, **`writeMultipleProperties`**: After writing a property, the system must respond with a **`propertyReadings`** message confirming that the properties have been successfully written.  
- **`cancelAction`**: Request to cancel an ongoing or scheduled action. The system responds with an **`actionStatus`** message indicating whether the cancellation was successful or if the action could not be canceled (e.g., already completed).  
- **`queryAction`**: Request to retrieve the latest status of a previously invoked action. The system replies with an **`actionStatus`** message showing the most recent state of the action (e.g., pending, in progress, completed, failed).  


### One Request-Multiple Responses  
This pattern is useful for cases where a single request may result in multiple responses over time, like ongoing updates or multiple pieces of information. 
In some cases, a request may initiate an action, and the status of that action may be reported multiple times until the action completes. This is useful when long-running or asynchronous operations are involved, and intermediate status updates are needed.

**Message Types Used**:
- **`invokeAction`** and **`actionStatus`**: You can invoke an action and then expect the action status (e.g., pending, in progress, completed, or failed) as a reply. The Thing can return multiple response messages providing updates on the status of the action until it is completed.  
- **`subscribeEvent`** and **`event`**: When subscribing to events, the system sends multiple event notifications over time as the event occurs.
- **`observeProperty`** and **`propertyReading`**: If an agent observes a property, it will receive multiple updates about the property value over time.

### Publish-Subscribe  
In this pattern, agents can **publish** events and other agents **subscribe** to receive those messages. It supports loose coupling and real-time communication.

**Message Types Used**:
- **`subscribeEvent`**: Allows agents to subscribe to specific events emitted by a Thing. Once subscribed, the agent will receive notifications (event messages) whenever the event occurs.
- **`unsubscribeEvent`**: Allows agents to unsubscribe from specific events they previously subscribed to, stopping further notifications for those events.
- **`event`**: The published event message sent to all subscribers.
- **`subscribeAllEvents`**: Allows agents to subscribe to all events emitted by a Thing.
- **`unsubscribeAllEvents`**: Allows agents to unsubscribe from all events.

### Summary

| **Interaction Pattern**                 | **Message Type(s)**                                          | **Description**                                                                                   | **Example Scenarios**                                                                                                 |
|-----------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Request-Reply**                    | `readProperty` / `propertyReading`, `invokeAction` / `actionStatus`, `writeProperty` / `propertyReading`, `queryAction` / `actionStatus` | The sender requests information or performs an action and waits for a single response from the receiver. | A marketing agent requests a generative AI agent to draft ad copy based on specific keywords. The AI responds with the completed draft.  |
| **One Request-Multiple Responses**   | `invokeAction` / `actionStatus`, `observeProperty` / `propertyReading`, `subscribeEvent` / `event`                                             | A request is made, and the system sends multiple responses over time (e.g., progress updates) until completion. | A video editing software requests an Image Generator agent to generate multiple versions of an image. The agent sends periodic updates as it creates each design, followed by a final batch of all thumbnails for review. |
| **Event-Driven / Notifications**     | `subscribeEvent` / `event`, `observerProperty` / `propertyReading`                               | Notifications are sent to inform other agents about an event or status change, without expecting a reply. | An AI agent detects when a trending topic emerges and notifies a social media agent, which then requests the creation of relevant posts. |
| **Publish-Subscribe**                | `subscribeEvent` / `event`, `observerProperty` / `propertyReading`                                  | Agents subscribe to events and receive updates whenever those events occur.                         | A news publishing agent subscribes to updates from a generative AI summarization agent. Whenever the summarization agent processes a breaking news article, it publishes the summary, which the news agent formats and distributes in text and video formats.  |

## Properties

### readProperty
To request a property reading from a Thing, a Consumer MUST send a message containing the following members:

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`    | string   | "readProperty"   | Indicates the request is for a `readProperty` operation.                        |
| `name`           | string   | Mandatory          | The name of the Property to read, as per its key in the `properties` member of the Thing Description. |

#### Example 
```json
{
  "thingID": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageID": "c370da58-69ae-4e83-bb5a-ac6cfb2fed54",
  "messageType": "readProperty",
  "name": "modelConfiguration",
  "correlationID": "5afb752f-8be0-4a3c-8108-1327a6009cbd"
}
```

When the Thing receives a `readProperty` message and successfully reads the value, it MUST respond with a `propertyReading` message containing the value.


### writeProperty
To update a property value on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`  | string    | "writeProperty | Indicates the request is for a writeProperty operation.         
| `name`     | string    | Mandatory | The name of the property to update.                                          |
| `data`         | object  | Mandatory | The new value for the property.                                              |


#### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "9876abcd-5432-10ef-ghij-klmnopqrstuv",
  "messageType": "writeProperty",
  "name": "modelConfiguration",
  "data": {
      "modelName": "gpt-4o",
      "temperature": 0.7,
      "maxTokens": 1000
   }
}
```


### writeMultipleProperties
To update multiple properties on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType` | `string`    | "writeMultipleProperties" |  Indicates the request is for a writeMultipleProperties operation.   |       |
| `data`        | `object`    | Mandatory | Map of property names and their new values.                    |


#### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "writeMultipleProperties",
  "data": { 
      "modelConfiguration": {
         "modelName": "gpt-4o",
         "temperature": 0.7,
         "maxTokens": 1000
      }, 
      "otherProperty": 60 
   }
}
```

### propertyReading
To notify a Consumer of the value of a Property, a Thing MUST send a message containing the following members:

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`    | string   | `"propertyReading"`  | Indicates this message provides the value of a Property.                        |
| `name`           | string   | Mandatory            | The name of the Property being read.                                           |
| `value`          | any      | Mandatory            | The current value of the Property, matching the data schema in the Thing Description. |
| `timestamp`      | string   | Mandatory             | A timestamp in `date-time` format indicating when the property was read.        |

If the `propertyReading` message is sent in response to a message containing a `correlationID`, the response SHOULD include the same `correlationID`.

#### Example 
```json
{
   "thingID": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "messageID": "79057736-3e0e-4dc3-b139-a33051901ee2",
   "messageType": "propertyReading",
   "name": "modelConfiguration",
   "value": {
      "modelName": "gpt-4o",
      "temperature": 0.7,
      "maxTokens": 1000
   },
   "timestamp": "2024-01-13T23:20:50.52Z",
   "correlationID": "5afb752f-8be0-4a3c-8108-1327a6009cbd"
}
```

### propertyReadings
To notify a Consumer of the value of a multiple properties, a Thing MUST send a message containing the following members:

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `data`          | `object`    | Mandatory | Map of property names and their corresponding readings.             |
| `timestamp`     | `string`    | Mandatory |Timestamp when the property readings were taken.                    |
| `messageType`   | `string`    | "propertyReadings" | Always "propertyReadings".                                          |

#### Example 
```json
{
   "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
   "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
   "messageType": "propertyReadings",
   "data": { 
      "modelConfiguration": {
         "modelName": "gpt-4o",
         "temperature": 0.7,
         "maxTokens": 1000
      }, 
      "otherProperty": 60 
   },
   "timestamp": "2025-01-20T19:00:00Z"
}
```

### observeProperty
To begin observing a specific property of a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `name`        | `string`    | Mandatory | The name of the property to observe.                           |
| `messageType`     | `string`    | "observeProperty" | Always "observeProperty".                                      |

#### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "observeProperty",
  "name": "modelConfiguration"
}
```

### unobserveProperty
To stop observing a specific property of a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `thingId`     | `string`    | Identifier of the Thing to stop observing the property.     |
| `messageId`   | `string`    | Unique identifier for this message.                         |
| `name`    | `string`    | The name of the property to stop observing.                 |
| `messageType` | `string`    | Always "unobserveProperty".                                 |

#### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "unobserveProperty",
  "name": "modelConfiguration"
}
```

## Actions

### invokeAction
To invoke an action on a Thing, send this message.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`       | string    | Mandatory | The name of the action to invoke.                                            |
| `input`        | data  | Optional | Input data required by the action.                                |
| `messageType`  | string    | Mandatory | Always "invokeAction".                                                     |

#### Example Request
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c",
  "messageType": "invokeAction",
  "action": "getWeather",
  "input": {
    "question": "What is the weather in New York?",
    "interactionMode": "text"
  }
}
```

### queryAction
To query the latest status of an action on a Thing, send this message.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`      | string    | Mandatory | The name of the action to query.                               |
| `messageType`   | string    | "queryAction" | Always "queryAction".                                                     |

#### Example Request
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "c67a2e10-8834-4d12-ab23-d8f5ccad3e9f",
  "messageType": "queryAction",
  "action": "getWeather"
}
```

### cancelAction
To cancel an ongoing or scheduled action on a Thing, send this message.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`      | string    | Mandatory | The name of the action to cancel.                                |
| `reason`        | string    | Optional | (Optional) The reason for cancellation.                                     |
| `messageType`   | string    | "cancelAction" | Always "cancelAction".                                                    |

#### Example Request
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "d92c4f20-1284-4f92-bc99-f6e3ccbc4f9d",
  "messageType": "cancelAction",
  "action": "getWeather",
  "reason": "User requested cancellation before completion."
}
```

### actionStatus
Provides the status of a previously invoked action.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `action`        | string      | Mandatory | The name of the action being reported.                                     |
| `status`        | string      |  Mandatory |  The status of the action (`pending`, `completed`, `failed`).               |
| `output`        | data    | Optional |  Output data from the action, if available.                      |
| `messageType`   | string      |  "actionStatus" |  Always "actionStatus".                                                   |

#### Example Response
```json
{
  "thingId": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
  "messageId": "a9b8c2f6-7e11-4293-a589-0d123456789a",
  "messageType": "actionStatus",
  "correlationId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c",
  "action": "getWeather",
  "status": "completed",
  "output": "The weather in New York is sunny with a temperature of 25°C."
}
```

## Events

### subscribeEvent
To subscribe to a specific event on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `event`        | string    | Mandatory | The name of the event to subscribe to.                                       |    |
| `messageType`  | string    | "subscribeEvent" | Always "subscribeEvent".                                                   |

#### Example Request
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "subscribeEvent",
  "event": "userFeedbackReceived",
  "correlationId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c"
}
```

### event
Provides event notifications from a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `correlationId` | string      | Mandatory | Identifier linking this event to a subscription.                |
| `event`         | string      | Mandatory |  The name of the event being reported.                                      |
| `data`          | JsonNode    | Mandatory |  Event-specific data.                                                       |
| `timestamp`     | Instant     | Mandatory |  Timestamp of the event occurrence.                                         |
| `messageType`   | string      | Mandatory |  Always `"event"`.                                                          |

#### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "defg4567-8901-2345-hijk-lmnopqrstuvw",
  "correlationId": "b45e8f90-8824-4c23-bc37-c6c4ddad4b2c",
  "messageType": "event",
  "event": "userFeedbackReceived",
  "data": {
    "rating": 4,
    "comment": "The service is good, but could provide more details on the weather forecast."
  },
  "timestamp": "2025-01-20T19:00:00Z"
}
```

### unsubscribeEvent
To unsubscribe from a specific event on a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `event`       | `string`    | Mandatory | The name of the event to unsubscribe from.             |
| `messageType` | `string`    | "unsubscribeEvent" | Always "unsubscribeEvent".                             |

#### Example 
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "unsubscribeEvent",
  "event": "userFeedbackReceived"
}
```

### subscribeAllEvents
To subscribe to all events emitted by a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`      | string              | "subscribeAllEvents" | Always "subscribeAllEvents".                               |

#### **Example Request:**
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "subscribeAllEvents"
}
```

---

### unsubscribeAllEvents
To unsubscribe from all events emitted by a Thing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `messageType`      | string              | "unsubscribeAllEvents" | Always "unsubscribeAllEvents".                             |

#### Example Request
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "xyz1234-5678-90ef-abcd-efghijklmnop",
  "messageType": "unsubscribeAllEvents"
}
```


## Error Handling

### error
To notify about an error that occurred during processing.

| Member         | Type      |  Assignment     | Description |
|-----------------|-----------|------------------------------------------------------------------------------|------------|
| `type`         | `string`    | Mandatory | URI reference to the type of error.                           |
| `title`        | `string`    | Mandatory |  A short, human-readable summary of the error.                 |
| `status`       | `string`    | Mandatory |  Error status code associated with the error.                   |
| `detail`       | `string`    | Mandatory |  Detailed explanation of the error.                            |
| `instance`     | `string`    | Mandatory |  URI reference to the specific occurrence of the error.        |
| `messageType`  | `string`    | "error" | Always "error".                                               |

**Example Response**
```json
{
  "thingId": "urn:uuid:3f1d3a7a-4f97-2e6b-c45f-f3c2e1c84c77",
  "messageId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  "messageType": "error",
  "correlationId": "efgh5678-1234-abcd-ijkl-mnopqrstuvwx",
  "type": "https://example.com/error-type",
  "title": "Failed to fetch weather data",
  "status": "500",
  "detail": "The weather service encountered an internal error.",
  "instance": "urn:uuid:abcd1234-5678-90ef-ghij-klmnopqrstuv"
}
```