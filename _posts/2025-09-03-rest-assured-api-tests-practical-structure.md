---
title: "REST Assured API Tests: Practical Structure"
date: 2025-09-03
tags: ["REST Assured", "Java", "API testing", "Test design"]
excerpt: "A maintainable API test suite separates clients, specs, test data, and assertions so failures are easy to understand."
---

API automation is where a QA engineer can show strong engineering habits without depending on fragile UI state. With REST Assured, the main challenge is keeping tests readable as coverage grows.

## Suggested Layers

I like this structure:

- `clients`: methods that call endpoints;
- `models`: request and response DTOs;
- `specs`: common request and response specifications;
- `tests`: behavior-focused scenarios;
- `fixtures`: reusable test data builders.

The test should not repeat base URLs, headers, JSON parsing, and logging setup every time.

## Example Shape

```java
@Test
void userCannotCreateOrderWithoutRequiredFields() {
    OrderRequest request = OrderRequest.builder()
        .customerId(null)
        .build();

    orderClient.createOrder(request)
        .then()
        .statusCode(400)
        .body("error.code", equalTo("VALIDATION_ERROR"));
}
```

This test is short, but it still communicates the important behavior.

## What To Validate

Useful API checks include:

- status codes;
- required fields;
- error codes and messages;
- authentication and authorization boundaries;
- response time for critical endpoints;
- JSON schema for stable contracts;
- idempotency or state transitions when relevant.

## Failure Output

REST Assured logging should help debug failures, but it should not expose secrets. A good setup logs request and response details on validation failure, masks sensitive values, and keeps CI artifacts available.

## Portfolio Signal

For a portfolio, an API suite shows that you can test faster than the UI and think in contracts. It also gives recruiters and engineers a clean example of Java test code that is not dependent on a browser.
