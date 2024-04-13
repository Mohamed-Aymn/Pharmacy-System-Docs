---
sidebar_position: 2
---

# Architecture

The Diagram below explains a lot! According to requirements that are elicited from the pharmacist, a tailored solution is built for it using microservices architecture that its most used components are ready to scale horizontally and independently, and the same for downtime! and also for better logic isolation while going through complex and detailed business logic!

Here are the main used components according to the client’s requirements:

## Pharmacy Service

Pharmacy Service is responsible for handling all business logic that is done by employees as described in the [requirements section](../intro.md#user-storiesfeatures), so it is built in Domain Driven Design architecture as it is the most complex service in terms of business logic, and that resulted in its API to be architected in the same way as demonstrated in [API Design Section](./apiDocumentation).

## Management Service

Rest Architecture is followed in this service.
    
## Authentication Service
    
## Message Broker

A must have component in microservices architecture!
    
## Databases
    
[Database per service](https://microservices.io/patterns/data/database-per-service.html) principle is followed.

![Deployment Diagram](./DeploymentDiagram.svg)