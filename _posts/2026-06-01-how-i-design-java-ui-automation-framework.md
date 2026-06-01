---
title: "How I Design a Java UI Automation Framework"
date: 2026-06-01
tags: ["Java", "Selenide", "UI automation", "Allure"]
excerpt: "A practical structure for Java UI automation that keeps tests readable, framework code maintainable, and failures useful."
---

The goal of a UI automation framework is not to make Selenium code look clever. The goal is to give the team fast, readable feedback about important user behavior.

When I design a Java UI framework, I start with four layers:

1. Test scenarios that read like business checks.
2. Page objects that hide browser details.
3. Test data and configuration that can change per environment.
4. Reporting that explains what happened when a test fails.

## Test Scenarios

Tests should describe intent. A reviewer should understand the scenario without reading every selector or wait condition.

```java
@Test
void userCanFilterOrdersByStatus() {
    loginPage.open()
        .loginAs(standardUser);

    ordersPage.open()
        .filterByStatus("Paid")
        .shouldShowOnlyOrdersWithStatus("Paid");
}
```

This style keeps the test focused on behavior. Details like button locators, loading states, and table parsing belong lower in the framework.

## Page Objects

A page object should represent what a user can do and verify on a page. It should not become a dumping ground for unrelated helpers.

I prefer small methods with clear assertions:

- `open()`
- `loginAs(user)`
- `filterByStatus(status)`
- `shouldShowOnlyOrdersWithStatus(status)`
- `shouldDisplayValidationError(message)`

With Selenide, synchronization can stay close to the element interaction because conditions are readable and explicit.

## Reporting

Allure steps are useful when they explain actions at a human level. I avoid adding noisy steps around every single low-level line. The report should help answer:

- Which user journey failed?
- What input data was used?
- Which assertion failed?
- Is there a screenshot or browser log?

## What I Avoid

- Thread sleeps as a default synchronization strategy.
- Duplicated selectors in test classes.
- Tests that depend on execution order.
- Huge base classes with unrelated utilities.
- Assertions hidden so deeply that failures become difficult to read.

## Result

A good UI framework should make new tests easier to add, not harder. If each new scenario requires changing many framework layers, the design is too heavy. If every test repeats low-level browser code, the design is too thin. The useful balance is simple structure, clear naming, and failure output that respects the time of the engineer reading it.
