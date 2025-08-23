---
sidebar_position: 2
---

# Agent Definition Language (ADL)

The goal of the Agent Definition Language (ADL) is to provide a reliable and efficient way 
to define and manage the behavior of an agent that is accessible to anyone, regardless of their technical background.

Traditional prompting has grown into a discipline of its own, with many best practices and techniques.
This makes it both difficult and time-consuming to define and manage complex Agent behaviors.

Furthermore, with each new model release, modifications to the prompts may be required.

The ADL aims to simplify this process by providing a structured format backed by a set of rules and conventions.


## How it works

The core idea of the ADL is to separate the definition of an agent's behavior from the actual prompting that is
sent to the Large Language Model (LLM).

For this to work there is a ADL compiler that "complies" the ADL into a system prompt and other artifacts, such as tools,
that is then sent to the LLM.

![Diagram of ADL](/img/adl.png)


## Breakdown of the Format

The ADL structures the behavior of an agent into a set of use cases. Each use case defining how the agent should 
respond to a specific scenario or query.

The use case format typically consists of the following components:

- **UseCase Name**: A concise, descriptive id that uniquely identifies the use case.
  Should be in lowercase and use underscores to separate words.


- **Description**: A detailed explanation of the customer's situation or query.


- **Steps** (optional): A sequence of steps for the Agent to perform before providing the final solution.
  This section is optional and can be used to provide additional context or guidance.


- **Solution**: The recommended solution to resolve the issue or fulfill the customer's request.


- **Alternative Solution** (optional): An alternative solution that the Agent should try if the primary solution is not effective.


- **Fallback Solution** (optional): The fallback solution that the Agent should use if the primary and alternative solutions fail.
  The fallback solution is to prevent the Agent from getting stuck in a loop
  where it provides the same solution over and over again. It is triggered after X number of failed attempts,
  X being a configurable parameter.


- **Examples** (optional): A list of example queries or statements that should trigger this use case.
  This section is optional and can be used to provide additional context or guidance.


Example:

```markdown
### UseCase: password_reset
#### Description
Customer has forgotten their password and needs to reset it.

#### Steps
- Ask the customer for their registered email address.
- Send a password reset link to the provided email address.

#### Solution
Guide the customer through the password reset process defined on the webpage https://www.example.com/reset-password.

#### Fallback Solution
If the customer cannot access their email, escalate the issue to a higher tier of support.

#### Examples
 - I forgot my password.
```

If the Agent has access to tools, such as `send_password_reset_link`, these would be called as part of this use case.


### Overall Guidelines

- Use consistent terms and language throughout the use case to ensure clarity and avoid confusion.
  For example, if you refer to the user as "customer" in one section, use "customer" throughout the document.
  (Prefer "customer" over "user" as it is more specific and helps maintain a customer-centric focus.)

- Providing examples when necessary. Examples are a very powerful construct
  and should only be used if the Agent struggles to understand the use case.


### Conditionals

`Conditionals` is a feature that enables us to omit lines from the use cases based on certain conditions.
`Conditionals` are defined in brackets, for example, `<condition1, condition2>`.
Each line containing such a `conditional` is filtered out before being provided to the Agent unless all conditions
are met. `Conditionals` can be placed anywhere within the line.

Example:

```markdown
### UseCase: password_reset
#### Description
Customer has forgotten their password and needs to reset it.

#### Solution
<isBusinessCustomer>Provide the webpage https://www.example.com/business/reset-password.
Provide the webpage https://www.example.com/reset-password.<isPrivateCustomer>
```

The conditions are passed to the `useCases` function as a set of strings.

```kts
 useCases("use_cases.md", conditions = setOf("isBusinessCustomer"))
```

This would produce the following output that would be feed to the Agent:

```markdown
### UseCase: password_reset
#### Description
Customer has forgotten their password and needs to reset it.

#### Solution
Provide the webpage https://www.example.com/business/reset-password.
```

**Important** `Conditionals` are only supported in the body of `Steps`, `Solution`,
`Alternative Solution` and `Fallback Solution`.


### Tool calls

Calls to tools / functions can be denoted using the following syntax `@my_function()`. 
This is not mandatory, but does provide the following benefits:
 - Enables the system to dynamically load the tools / functions.
 - Enables the system to validate that the tools / functions are available.
 - Enables the system to re-enforce the execution of the tools.

Example
```markdown
### UseCase: password_reset
#### Description
Customer has forgotten their password and needs to reset it.

#### Solution
Call the function @password_reset_link() to obtain a password reset link.
Then provide the customer with the link and guide them through the password reset process.

```

To re-enforce the execution of the tool, simply add "!" to the function call, like so: `@password_reset_link()!`.


## Trying out ADL

The quickest way to try out ADL is to check out the Arc Spring Demo 
project here https://github.com/eclipse-lmos/arc-spring-init and start the application.

This will give you access to the Arc View at http://localhost:8080/chat/index.html.

Here ADL Use Cases can be created and tested.

1. Go to the "ADL" menu item to access the ADL overview screen and create new ADL Use Case file.

![ADL Overview Screen](/img/adl_overview.png)

2. Add your use cases.

![ADL Details Screen](/img/adl_create.png)

3. Then on the chat screen, select the ADL Use Case file and start asking questions.

![ADL Chat Screen](/img/adl_chat.png)

![ADL Chat Screen](/img/adl_chat_2.png)

