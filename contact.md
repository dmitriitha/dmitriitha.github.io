---
layout: page
title: "Contact"
eyebrow: "Let's talk"
description: "Reach out about QA automation roles, Java test frameworks, or technical collaboration."
permalink: /contact/
---

<div class="contact-grid">
  <div class="contact-panel">
    <h2>Send a message</h2>
    <p>Replace the Formspree endpoint in <code>_config.yml</code> before publishing the form.</p>
    <form class="form-grid" action="{{ site.forms.formspree_endpoint }}" method="POST" data-contact-form>
      <input type="hidden" name="_subject" value="Portfolio contact from {{ site.title }}">
      <label>
        Your name
        <input name="name" autocomplete="name" required>
      </label>
      <label>
        Email
        <input type="email" name="email" autocomplete="email" required>
      </label>
      <label>
        Message
        <textarea name="message" required></textarea>
      </label>
      <button class="button" type="submit">Send message</button>
    </form>
  </div>

  <div class="contact-panel">
    <h2>Direct links</h2>
    <p>For recruiting conversations, LinkedIn and email are usually the fastest channels.</p>
    <p><strong>Email:</strong> <a href="mailto:{{ site.author.email }}" data-track="email_click">{{ site.author.email }}</a></p>
    <p><strong>GitHub:</strong> <a href="{{ site.author.github }}" data-track="github_click">{{ site.author.github }}</a></p>
    <p><strong>LinkedIn:</strong> <a href="{{ site.author.linkedin }}" data-track="linkedin_click">{{ site.author.linkedin }}</a></p>
    {% if site.author.telegram and site.author.telegram != "" %}
    <p><strong>Telegram:</strong> <a href="{{ site.author.telegram }}" data-track="telegram_click">{{ site.author.telegram }}</a></p>
    {% endif %}
  </div>
</div>
