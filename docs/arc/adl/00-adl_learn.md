# Learn ARC ADL in 15 Minutes: Business/Product

ADL (Agent Definition Language) gives you a **structured way to define how an agent behaves**—without needing to master prompt engineering.

Instead of writing complex prompts, you create **use cases**: clear, reusable definitions of customer scenarios and how the agent should respond.

---

## 1. ADL Basics

Each use case follows the same structure:

- **UseCase Name** → short, unique id (lowercase, underscores).
- **Description** → explain the customer’s situation or query.
- **Steps (optional)** → instructions the agent should follow before giving a solution.
- **Solution** → the main resolution the agent provides.
- **Alternative Solution (optional)** → backup if the main solution doesn’t work.
- **Fallback Solution (optional)** → safety net if all else fails (avoids loops).
- **Examples (optional)** → customer queries that trigger this use case.

---

## 2. Quick Example

```markdown
### UseCase: password_reset
#### Description
Customer has forgotten their password and needs to reset it.

#### Steps
- Ask for the registered email address.
- Send a password reset link.

#### Solution
Guide the customer through the password reset process at https://www.example.com/reset-password.

#### Fallback Solution
If the customer cannot access email, escalate to higher-tier support.

#### Examples
- I forgot my password

```

---

## 3. Guidelines

- Be **consistent**: always refer to the person as “customer” (not “user”).
- Add **examples** only if needed (when the agent struggles to classify).
- Always define a **fallback solution** to prevent loops.

---

## 4. Conditionals

Conditionals let you **change responses based on context**.

Syntax: `<condition1, condition2>`

```markdown
### UseCase: password_reset
#### Solution
<isBusinessCustomer>Provide https://www.example.com/business/reset-password.
Provide https://www.example.com/reset-password.<isPrivateCustomer>

```

- Engineers pass conditions into the system:

    ```kotlin
    useCases("use_cases.md", conditions = setOf("isBusinessCustomer"))
    
    ```

- Only the matching line is shown to the agent.

---

## 5. Tool Calls

Agents can call tools or functions inline.

- Syntax: `@tool_name()`
- Add `!` to enforce execution: `@tool_name()!`

```markdown
### UseCase: password_reset
#### Solution
Call @password_reset_link()! to generate a reset link.
Provide the link and guide the customer through the process.

```

Benefits:

- Dynamically loads tools.
- Validates availability.
- Ensures execution.

---

## 6. Use Case References

Use cases can reference others with `#use_case_id`:

```markdown
### UseCase: password_reset
#### Solution
Call @password_reset_link() to obtain a link.
If the customer is a business customer, follow #business_customer_support.

```

This keeps logic modular and reusable.

---

# ✅ Summary: Learn ADL in 15 Minutes

1. Write a **Use Case** with description, steps, and solutions.
2. Add **conditionals** for personalization.
3. Use **tool calls** for dynamic actions.
4. Reference other use cases for modularity.
5. Test → iterate → deploy.

👉 With ADL, defining agent behavior is as structured and predictable as writing a product spec—simple enough for **business teams**, powerful enough for **engineers**.