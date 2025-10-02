---
sidebar_position: 2
---

# Technical Details

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
- Enables the system to dynamically load any required the tools / functions.
- Enables the system to validate that the required tools / functions are available.
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


### Use Cases References

Use Cases can reference other use cases using the following syntax `#use_case_id`.

This is not mandatory, but does provide the following benefits:
- Enables the system to load uses cases that are stored in other location.
- Enables the system to validate that the referenced use cases are available.

Example
```markdown
### UseCase: password_reset
#### Description
Customer has forgotten their password and needs to reset it.

#### Solution
Call the function @password_reset_link() to obtain a password reset link.

If the customer is a business customer, the use case #business_customer_support should be followed.

```

### Flow Options

Flow Options enables Use Case authors to express decision trees within the Use Case markdown.

To achieve this, the Use Case writer can simply add so called Flow Options to the bottom of any Use Case as follows:

```markdown
[option 1] command
[option 2] command 2
```

**Option**	Used to match the user's input to the command that should be executed.

**Command** This can be any instruction given to the LLM to perform. Examples include:
- Tool calls
- A reply to give to the user
- A use case reference

The options should be placed at the bottom of the solution section of a use case.

There can be any number of options, i.e. from 1 to N.

Example

```markdown
#### Use Case: buy_car
Customer wants to buy a car Use Case.

#### Description
The customer wants to buy a car.

#### Solution
Ask the customer what type of car they would like to buy.

[bmw] go to the case #buy_bmw
[other] reply that we don't sell that type of car.

#### Case: buy_bmw
Ask the customer what color would they like.

[color selected] go to the final  case #buy_bmw_with_color
[other] reply with "ok, we need to know the color "

#### Case: buy_bmw_with_color
Call the tool @buy_car() to finalize the purchase.
And reply to the customer that we are grateful for their businees.

```

In this flow, we start by asking the customer what type of car they would like to buy.

Based on their response, the agent will either return the solution defined 
in the #buy_bmw use case or reply that "We dont sell that type of car. "

If the customer wants to buy a BMW, the agent will then ask what color they would like.
If the customer provides a color, the agent will proceed to the final case #buy_bmw_with_color
where it will call the tool @buy_car() to finalize the purchase 
and reply to the customer that we are grateful for their business.

By modularizing the flow in this way, the Use Case Compiler can re-enforce that the agent follows the defined flow.

This feature also introduces "Cases". These are Use Cases that are only reachable via a Flow Option. 
Unlike regular Use Cases, Cases do not have Examples nor a Description section.