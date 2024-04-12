---
sidebar_position: 4
---

# Design Patterns

Here some of used design patterns with explaining the problem they are solving, and how it is solved: 

## Mediator

- Before
    - Tightly coupled components with function’s endpoint in the controller class.
    - No business logic isolation from components that has no relation with business logic
    - Enormous and Monolithic Controller files.
- After
    - Deal with controllers as just a layer of abstraction that encapsulate business logic beneath it!

    ![Sequence Diagram](./sequenceDiagram.svg)

    :::tip
    Mediator class sends request to the correct handler according to the request type
    :::

---
        
And more unlisted patterns …