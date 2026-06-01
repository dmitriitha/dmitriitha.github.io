---
layout: page
title: "Projects"
eyebrow: "Portfolio"
description: "Case studies for Java QA automation: UI framework, API framework, CI reporting, and flaky test diagnostics."
permalink: /projects/
---

<div class="project-list">
  <article class="project-card" id="ui-framework">
    <div>
      <p class="meta">UI automation case study</p>
      <h2>Java UI Framework With Selenide</h2>
      <p>A maintainable browser automation framework for critical user journeys: login, search, filters, checkout-like flows, and account settings.</p>
      <p><strong>Problem:</strong> UI tests often become slow and flaky when waits, selectors, and assertions are scattered across test classes.</p>
      <p><strong>Approach:</strong> Keep test scenarios readable, move browser details into page objects, use Selenide conditions for synchronization, and add Allure steps/screenshots for diagnostics.</p>
      <p><strong>Signal:</strong> A recruiter can see framework structure; an engineer can see how failures would be investigated in CI.</p>
    </div>
    <div>
      <div class="stack-list">
        <span>Java</span><span>Selenide</span><span>Maven</span><span>JUnit 5</span><span>Allure</span>
      </div>
    </div>
  </article>

  <article class="project-card" id="api-framework">
    <div>
      <p class="meta">API automation case study</p>
      <h2>REST Assured API Test Suite</h2>
      <p>A service-level suite for validating happy paths, error handling, authentication boundaries, and basic contract expectations.</p>
      <p><strong>Problem:</strong> API tests become noisy when setup, request specs, and assertions are duplicated in every test.</p>
      <p><strong>Approach:</strong> Use reusable clients, shared request/response specifications, clear DTOs, status-code checks, and negative scenarios with useful failure messages.</p>
      <p><strong>Signal:</strong> The suite demonstrates backend testing habits and the ability to test below the UI layer.</p>
    </div>
    <div>
      <div class="stack-list">
        <span>Java</span><span>REST Assured</span><span>Jackson</span><span>JUnit 5</span><span>JSON Schema</span>
      </div>
    </div>
  </article>

  <article class="project-card" id="ci-reporting">
    <div>
      <p class="meta">CI and reporting case study</p>
      <h2>GitHub Actions Pipeline With Allure Artifacts</h2>
      <p>A CI workflow that separates smoke and regression suites, publishes test artifacts, and keeps failure diagnostics easy to inspect.</p>
      <p><strong>Problem:</strong> Automation has limited value if it only works on a local machine.</p>
      <p><strong>Approach:</strong> Run Maven commands in GitHub Actions, parameterize environment settings, archive reports, and keep smoke tests fast enough for pull requests.</p>
      <p><strong>Signal:</strong> The project proves that test automation can participate in delivery, not only in local demos.</p>
    </div>
    <div>
      <div class="stack-list">
        <span>GitHub Actions</span><span>Maven</span><span>Allure</span><span>CI/CD</span><span>Docker</span>
      </div>
    </div>
  </article>

  <article class="project-card" id="flaky-tests">
    <div>
      <p class="meta">Debugging case study</p>
      <h2>Flaky Test Investigation Notes</h2>
      <p>A structured approach for reducing false failures in UI and API automation.</p>
      <p><strong>Problem:</strong> Flaky tests erode trust. Teams start ignoring automation when failures do not point to real risks.</p>
      <p><strong>Approach:</strong> Categorize failures by synchronization, test data, environment, selector stability, and assertion quality. Fix the highest-frequency causes first.</p>
      <p><strong>Signal:</strong> Shows practical debugging thinking and a delivery-focused QA mindset.</p>
    </div>
    <div>
      <div class="stack-list">
        <span>Debugging</span><span>Logs</span><span>Screenshots</span><span>Retries</span><span>Test Design</span>
      </div>
    </div>
  </article>
</div>
