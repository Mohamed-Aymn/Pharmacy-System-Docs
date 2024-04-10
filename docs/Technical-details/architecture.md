---
sidebar_position: 2
---

# Architecture

The Diagram below explains a lot! According to requirements that are elicited from the pharmacist, a tailored solution is built for it using microservices architecture that it’s most used components are ready to scale horizontally and independently, and same for down time! and also for better logic isolation while going through complex and detailed business logic!

Here are the main used components according to client’s requirements:

## Pharmacy Service

Pharmacy Service is responsible for handling all business logic that is done by employees as described in [requirements section](../intro.md#user-storiesfeatures), so it is built in Domain Driven Design architecture as it is the most complex service in terms of business logic, and that resulted it's API to be architected in the same way as demonestrated in [API Design Section](./apiDocumentation).
    
## Management Service

Rest Architecture is followed in this service.
    
## Authentication Service
    
## Message Broker

A must have component in microservices architecture!
    
## Databases
    
[Database per service](https://microservices.io/patterns/data/database-per-service.html) principle is followed.

DIAGRAM