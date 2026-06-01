# Dmitrii Vyrikov QA Automation Java Blog

Static personal portfolio and technical blog built for GitHub Pages and Jekyll.

## Quick Start

1. Create a public GitHub repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Copy these files into that repository.
3. Edit `_config.yml`:
   - replace `YOUR_GITHUB_USERNAME`
   - replace LinkedIn, email, Telegram if needed
   - add Cloudflare Web Analytics token when available
   - add Formspree form endpoint when available
4. Push to GitHub.
5. Open `Settings -> Pages` and set the source to `GitHub Actions`.
6. Push to `main`; the workflow in `.github/workflows/pages.yml` will build and deploy the site.

The site will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io
```

## Local Preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

If your macOS system Ruby is too old for local development, use a modern Ruby with `rbenv` or `asdf`. The included GitHub Actions workflow uses Ruby 3.3 for deployment.

If you do not want local Ruby setup, GitHub Pages can build the site through GitHub Actions after each push.

## Content

- Homepage: `index.html`
- About: `about.md`
- Projects: `projects.md`
- Blog index: `blog.html`
- Posts: `_posts/YYYY-MM-DD-title.md`
- Contact: `contact.md`
- Resume: `resume.md`
- Resume PDF: `assets/resume/dmitrii-vyrikov-qa-auto-java-resume.pdf`

## Analytics And Forms

- Cloudflare Web Analytics: add the token to `_config.yml`.
- GA4: add `ga_measurement_id` to track resume, social, and contact clicks.
- Formspree: replace `YOUR_FORM_ID` in `_config.yml`.

Cloudflare Web Analytics is good for privacy-friendly traffic stats. GA4 is optional and useful if you want custom click events.
