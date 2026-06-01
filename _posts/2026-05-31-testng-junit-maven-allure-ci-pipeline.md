---
title: "TestNG/JUnit, Maven, Allure and CI Pipeline"
date: 2026-05-31
tags: ["JUnit 5", "TestNG", "Maven", "Allure", "CI/CD"]
excerpt: "A Java automation project becomes much more useful when it runs reliably in CI and produces readable reports."
---

Local automation is a good start. CI automation is where the suite starts creating team value.

For a Java QA project, I want the execution path to be boring and repeatable:

```bash
mvn clean test
```

From there, the project can add profiles for smoke, regression, browser, environment, and report generation.

## JUnit Or TestNG

Both JUnit 5 and TestNG are valid. My default for a new portfolio project is JUnit 5 because it is modern, widely used, and integrates cleanly with Maven and extensions.

TestNG is still common in QA automation and has strong suite configuration features. If a project already uses TestNG, I would follow the existing style.

## Maven Profiles

Profiles are useful when the same project needs different execution modes:

```bash
mvn test -Psmoke
mvn test -Pregression
mvn test -Dbrowser=chrome -Denv=staging
```

The important point is to keep commands documented in the README so another person can run the suite quickly.

## Allure Reports

Allure is valuable when steps, attachments, screenshots, and categories are used intentionally. A report should help diagnose the failure, not only decorate the run.

Useful attachments:

- screenshot on UI failure;
- browser console logs when available;
- request and response details for API failures;
- environment information;
- test data identifiers.

## CI Pipeline

A practical GitHub Actions pipeline can:

- install Java;
- cache Maven dependencies;
- run smoke tests on pull requests;
- run regression tests on schedule;
- upload Allure results as artifacts.

This proves that automation is part of delivery. It also gives recruiters an easy signal: the project is not just code, it is runnable code.
