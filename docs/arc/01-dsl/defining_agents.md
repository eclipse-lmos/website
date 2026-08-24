---
title: Defining Agents
sidebar_position: 1
---

Agents are defined using the Arc Agent DSL.

Example

```kts
agent {
    name = "weather"
    description = "Agent that provides weather data."
    model { "gemma:7b" }
    prompt { """
       You are a professional weather service.
       You have access to real-time weather data with the get_weather function.
       Keep your answer short and concise.
       All you require is the location.
       if you cannot help the user, simply reply "I cant help you"
     """
    }
    tools {
        +"get_weather"
    }
}
```

### Overview

| Name         | Description                                                                                                 |  
|--------------|-------------------------------------------------------------------------------------------------------------| 
| `agent<Input, Output>` | Defines an agent with a typed JSON input and structured JSON output. [See below](#typed-agents).          |
| name         | The name of the Agent. Arc does not enforce global uniqueness while defining an agent; use a stable name that is unique in your agent registration, preferably without special characters. |
| model        | The model that should be provided to the Agent.                                                             |                                     
| description  | A short description of what the Agent does.                                                                 |  
| prompt       | The System Prompt of the Agent. The `prompt` defines the core objective, goals and instructions for Agents. |  
| tools        | A list of tools (LLM functions) that the Agent uses, [see](/docs/arc/dsl/defining_functions).               |
| skills       | Declares skill IDs available for the current request and optional agent skill metadata. [See below](#skills). |
| filterInput  | Defines filter logic, [see](/docs/arc/dsl/filters).                                                         |
| filterOutput | Defines filter logic, [see](/docs/arc/dsl/filters).                                                         |
| limit        | Defines a rate limiter, [see](/docs/arc/dsl/Features/rate_limiter).                                         |
| onFail       | Called for regular agent execution failures, [see](#onfail).                                                |


See the following pages on how to load the agents into your application.
- [Manual Setup](/docs/arc/manual_setup)
- [Spring Boot Beans](/docs/arc/spring/agent-beans)

### Typed agents

Use `agent<Input, Output>` when an agent accepts a structured request and returns a structured response. The generic
form records both types, serializes the input as JSON, and configures JSON output with a schema for `Output`. Use
`@Serializable` data classes for structured input and output types.

```kotlin
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.Serializable
import org.eclipse.lmos.arc.agents.agents
import org.eclipse.lmos.arc.agents.getAgent
import org.eclipse.lmos.arc.core.getOrThrow

@Serializable
data class TravelRequest(
    val destination: String,
    val numberOfDays: Int,
)

@Serializable
data class TravelPlan(
    val destination: String,
    val activities: List<String>,
)

fun main(): Unit = runBlocking {
    val agentSystem = agents {
        agent<TravelRequest, TravelPlan> {
            name = "travel-planner"
            model { "gpt-4o" }
            prompt {
                "Create a travel plan from the provided JSON request."
            }
        }
    }

    val plan = agentSystem
        .getAgent<TravelRequest, TravelPlan>()
        .call(TravelRequest(destination = "Berlin", numberOfDays = 2))
        .getOrThrow()

    println(plan.activities)
}
```

`getAgent<Input, Output>()` selects an agent whose declared input and output types exactly match the requested type
pair. It requires exactly one match. If multiple agents use the same type pair, select one explicitly with its name:

```kotlin
val travelPlanner = agentSystem.getAgent<TravelRequest, TravelPlan>("travel-planner")
```

`call` is suspend and returns `Result<Output, AgentFailedException>`. The example uses `getOrThrow()` for brevity;
production code can instead inspect the `Result` and handle failures explicitly. Typed agents are best suited to
structured output objects. For a plain conversational text response, use a normal `agent { ... }` and `ask(...)`.


### Prompt templating

The `prompt` function of an Agent is called on each request. 
Meaning that it can be dynamically customized to best suit the current context. 
Now although Kotlin Strings are quite powerful, 
adding logical constructs such as `if` and `for loops` statements can be cumbersome.

For this purpose, the Arc DSL provides a `String` UnaryPlus operator (`+`) in the `DSLContext`.
Within a `prompt` block, it appends text to the prompt output.

For example, the following code snippet shows how to use the `+` operator to build a dynamic prompt.
```kts
agent {
    prompt {
        +"Here is the first part of the prompt."
        if(someCondition) {
            +"Here is a conditional part of the prompt."
        }
      "The last part of the prompt (this does not require a + because it is automatically returned)."
    }
}
```

### Skills

Skills are instruction documents with YAML frontmatter. Declare their source references in the `skills` block. For a
logical source such as `writing`, the default provider resolves `skills/writing/SKILL.md`. Before generating the prompt,
Arc loads and validates every document, then exposes its frontmatter `name` and `description` through the `$SKILLS`
`DSLContext` property. `$SKILLS` is read through normal Kotlin string interpolation while the prompt is generated; it
is not a template placeholder that is replaced afterwards.

```kts
agent {
    name = "assistant"

    skills {
        +"writing"
    }

    prompt {
        """
        You are a helpful assistant.

        Use the available skills when appropriate. Activate a skill before following its instructions:
        $SKILLS
        """
    }
}
```

Each skill document must start with the required `name` and `description` fields. The body after the closing delimiter
contains the instructions returned when the skill is activated.

```markdown
---
name: writing
description: Write concise, structured answers.
---

# Writing

Use short paragraphs and descriptive headings.
```

When at least one skill is available, Arc automatically adds the `activate_skill` tool. It accepts the required
`name: string` argument and returns only the instruction body for that skill; YAML frontmatter is not returned. Before
the model is called, Arc verifies all declared documents and creates a catalog keyed by their frontmatter `name`.
`activate_skill` accepts only a name in that catalog, rather than the source reference used to locate the document.
This prevents the tool from being used to read arbitrary files through its argument.

Arc does not decide whether a skill is needed. It exposes the `$SKILLS` catalog and the tool; the model or tool-calling
implementation chooses whether to call `activate_skill` with a frontmatter name. The instruction in the prompt is not
a technical guarantee that the model will load a skill. If applying a skill is mandatory, enforce that requirement in
server-side logic or include the required instructions directly. As with other tools, the selected LLM client and model
must support tool calling.

#### Defining skills in code

Pass a `skills` block to `agents(...)` to define in-memory skill documents without a `SKILL.md` file. Each definition
provides the same name, description, and instruction body that a Frontmatter document would provide.

```kotlin
val agentSystem = agents(
    skills = {
        skill {
            name = "release-notes"
            description = "Creates concise, user-facing release notes."
            """
            # Release notes

            Do not invent version numbers, dates, or changes.
            """.trimIndent()
        }

        skill {
            name = "review"
            description = "Reviews changes for correctness."
            """
            # Review

            Identify correctness issues and required follow-up actions.
            """.trimIndent()
        }
    },
) {
    agent {
        name = "release-notes-writer"
        skills { +"release-notes" }
        prompt { "Write your prompt and have skills injected here -> $SKILLS" }
    }
}
```

You can declare any number of `skill { ... }` blocks. Each inline skill name must be unique. Inline definitions have
priority over the single fallback provider passed through `skillProvider`. Without an explicit
fallback, Arc uses `FileClasspathSkillProvider`. A `SkillProvider` supplied in an individual
`agent.execute(..., context = ...)` call remains a request-specific override.

#### Publishing skill metadata

The `skills` block can also return `List<Skill>` for agent or A2A metadata. Its `id` values are sources that Arc resolves
as skill documents. `fetchSkills()` and A2A agent cards publish this list unchanged; loaded frontmatter controls only
the runtime `$SKILLS` catalog and `activate_skill` names.

```kts
import org.eclipse.lmos.arc.agents.agent.Skill

agent {
    name = "assistant"

    skills {
        listOf(
            Skill(
                id = "writing",
                name = "Writing assistance",
                description = "Instructions for concise, structured writing."
            )
        )
    }

    prompt { SKILLS }
}
```

When the block returns `List<Skill>`, the returned IDs are used to locate skill documents. Use either this metadata
form or the `+"source"` form for a block, rather than mixing both styles.

| Field | Purpose |
| --- | --- |
| `id` | Source reference used to locate the skill document. |
| `name` | Human-readable name exposed by `agent.fetchSkills()`. |
| `description`, `tags`, `examples`, `inputModes`, `outputModes` | Optional metadata exposed by `agent.fetchSkills()` for agent discovery and presentation. |

#### Dynamic skills

The `skills` block is evaluated for each agent execution and has access to the same `DSLContext` as other dynamic DSL
blocks. It can therefore select skill sources from request-specific beans with `get<T>()`, just as `tools` can. Keep the
block free of side effects: ARC can also evaluate it when an integration asks the agent for its skill metadata.

#### Providing skill content

Implement `SkillProvider` to load skills from a database, an HTTP service, or another source. Register it through the
`BeanProvider` used to create the agent, or pass it in the second `context: Set<Any>` parameter of `execute`. A provider
passed for an execution takes precedence over a provider configured on the agent:

```kts
val skillProvider = SkillProvider { name ->
    when (name) {
        "writing" -> """
            ---
            name: writing
            description: Write concise, structured answers.
            ---

            # Writing
            Write concise, clear answers and use headings when helpful.
        """.trimIndent()
        else -> null
    }
}

val result = agent.execute(conversation, context = setOf(skillProvider))
val response = result.getOrThrow()
```

`execute` is suspend, so call it from a coroutine. Returning `null` from `SkillProvider.load` means that this provider
cannot load the requested skill.

If no custom `SkillProvider` is present, Arc uses `FileClasspathSkillProvider`. For a logical source such as
`release-notes`, it first looks for `skills/release-notes/SKILL.md`, then `<source>/SKILL.md`, and finally the declared
source itself, on the classpath or filesystem. For example, `+"writing"` resolves `skills/writing/SKILL.md` by default.
A missing document, invalid frontmatter, or duplicate frontmatter name
fails the agent execution before the prompt is generated. The allowlist limits the Arc tool to frontmatter names; a custom provider
must still safely map IDs to files, URLs, or records and enforce its own authorization boundaries.

### OnFail

The `onFail` property allows you to define custom error handling behavior for regular agent execution failures.
Arc processes internal control signals such as `RetrySignal` before the normal `onFail` path.

This is particularly useful for:
- Providing fallback responses when the agent fails
- Implementing retry mechanisms
- Gracefully handling expected exceptions

Example:

```kts
agent {
    name = "weather"
    onFail { error ->
        if (error is SomeRecoverableException) {
            retry(reason = "Condition is not fulfilled.")
        } else {
            AssistantMessage("New message!")
        }
    }
    prompt {
        val retry = getOptional<RetrySignal>()
        if (retry != null) {
            // The details provided to the retry function can be accessed here.
            """ Updated Instructions with ${retry.reason}"""
        } else {
            """ Instructions """
        }
    }
}
```

The `onFail` block receives the exception that was thrown as a parameter, 
allowing you to inspect the error and respond accordingly. 

The `onFail` block can either:

- return an AssistantMessage which will be returned to the client as if the agent executed successfully.
- return null, in which case execution fails with an `AgentFailedException` whose cause is the original error.
- call the `retry` function which will cause the agent to be re-run. 

For more details on the `retry` function, see [Retry](/docs/arc/dsl/Features/retry).
