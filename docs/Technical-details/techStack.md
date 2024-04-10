---
sidebar_position: 5
---

# Tech Stack

As described in [architecture](./architecture) and [design patterns](./designPatterns) sections, this solution cares a lot and built to be loosely coupled, so the used tech stack can be replaced easily without causing overhead while refactoring in case of a drift in business logic or requirements occurs.

Here are the main technologies that are used in this solution and the reason why they are chosen:

## Dotnet C#

All services are implemented in C#, that is because the need of OOP programming paradigm usage to be able to implement patterns easily on the whole service level.
    
:::tip Why not Java? 
it is just developer’s choice, not for a technical reason.
:::

:::tip Why not JavaScript/TypeScript? 
- Due to the need of nativelly statically typed language especially in pharmacy service as it is expected to scale and have multiple components that are loosely coupled, so types are not not a choice.
- To enforce developers to use one specific paradigm instead of using multi-paradigm language which may be a paradox in the work flow.
- Performance purposes.
:::
## RabbitMQ
## Postgres
## Mongodb