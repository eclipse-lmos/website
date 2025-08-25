# ADL cheat sheet

| **Element**                                                 | **Example** |
|-------------------------------------------------------------| --- |
| **UseCase Name** Unique, lowercase, underscores.            | `### UseCase: password_reset` |
| **Description** Customer situation or query.                | `#### Description`Customer has forgotten their password and needs to reset it. |
| **Steps (optional)** Sequence of actions before solution.   | `#### Steps`- Ask for registered email - Send reset link |
| **Solution** Main recommended fix.                          | `#### Solution`Guide the customer through the reset process at https://www.example.com/reset-password. |
| **Alternative Solution (optional)** Backup if main fails.   | Try login recovery flow using phone number. |
| **Fallback Solution (optional)** Last resort, avoids loops. | `#### Fallback Solution`If no access to email, escalate to Tier 2 support. |
| **Examples (optional)** Queries that trigger this use case. | `#### Examples`- I forgot my password - Can’t log in |

---

## ⚡ Advanced Features

| **Feature** | **How it looks** | **Why it matters** |
| --- | --- | --- |
| **Conditionals** | `md<br>#### Solution<br><isBusinessCustomer>Provide https://example.com/business/reset<br>Provide https://example.com/reset.<isPrivateCustomer><br>` | Adjust response per customer type. |
| **Tool Calls** | `md<br>#### Solution<br>Call @password_reset_link()! to generate a reset link.<br>` | Calls or enforces external functions. |
| **Use Case References** | `md<br>If business customer, follow #business_customer_support<br>` | Reuse existing flows, stay modular. |

---

✅ **Workflow in 15 minutes:**

1. Define a **Use Case**.
2. Add **Steps, Solution, Fallback**.
3. Use **Conditionals** for variations.
4. Add **Tool Calls** for actions.
5. Reference other use cases for modularity.
6. Test → Refine → Deploy.

👉 With ADL, **engineers wire the engine once** → **business defines use cases forever after**.