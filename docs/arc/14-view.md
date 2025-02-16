
# Arc View

The Arc View is a graphical user interface 
that allows you to interact with the Arc Agents.


### Features

- Chat UI to communicate with the Agents.
- Event log to view events emitted by the Arc application.
- Charts to help compare the performance of the Agents.

![Arc View](/img/chat_view.png)

(Event Subscriptions must be enabled in the Arc application to view events,
see [Event Subscriptions](/docs/arc/spring/graphql#event-subscriptions)).

Once enabled, the Arc Events can be displayed in performance charts to better 
asses the performance of the Agents and LLMs.

![Arc View](/img/chart_view.png)


### How does it work

The Arc View connects to Arc Applications that implement the GraphQL protocol.

See the [Arc GraphQL](/docs/arc/spring/graphql) for more details.


### How to access it

There is a version of the Arc View hosted at `https://eclipse.dev/lmos/chat/index.html`.

The Arc View can point to any Arc Agent Application by setting the Agent Url here https://eclipse.dev/lmos/chat/index.html#/settings.

Or open the Arc with `https://eclipse.dev/lmos/chat/index.html?agentUrl=http://localhost:8080` to point the an Arc Agent running at http://localhost:8080.

Don't forget to add the following to your `application.yml` to enable CORS:

```yaml
arc:
  cors:
    enabled: true
```


### Where to find it

The source code for the Arc View is available at [arc-view](https://github.com/eclipse-lmos/arc-view).

As it is written in Flutter, it can be compiled to also run as a desktop application.

Contributions are welcome!
