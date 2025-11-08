# Hostinger Deployment Guide

This project builds a static Vite application that can be hosted on any Hostinger plan capable of serving static sites or Node.js projects. Follow the checklist below to publish new versions reliably.

## 1. Prerequisites

- Node.js **20.x** (matches `.nvmrc`/Render config)
- npm 10+
- Hostinger account with either:
  - `public_html` access for traditional hosting, or
  - App Manager support for custom Node.js deployments (static output recommended)

## 2. Build the production assets

```bash
npm install
npm run build
```

The optimized site is written to `dist/` with vendor code-splitting and cache-busting filenames.

## 3. Files to upload

Upload the contents of `dist/` **and** the generated `.htaccess` file (copied automatically from `public/.htaccess`) to your Hostinger `public_html` directory. The structure should look like:

```
public_html/
  ├── assets/
  ├── index.html
  ├── .htaccess
  ├── favicon.svg
  ├── robots.txt
  └── ...
```

> Tip: If you deploy via Git, add a post-deploy hook or GitHub Action that runs `npm ci && npm run build` on Hostinger, then rsyncs the `dist/` folder into `public_html/`.

## 4. Rewrite & caching rules

The provided `.htaccess` file handles two concerns:

1. Rewrite all non-file requests to `index.html` so the SPA router works.
2. Serve hashed assets with long-lived cache headers while keeping HTML revalidated every 10 minutes.

Do not remove this file or Hostinger will return 404s for client-side routes.

## 5. Optional domain updates

Update meta tags pointing at `https://example.com/` in `index.html`, `robots.txt`, and any environment configuration once your final domain is known (e.g., `https://karibupadel.com/`). Social preview images can be added by uploading a static `og-image.jpg` to `public/` and referencing it in both files.

## 6. Verifying the deployment

After uploading:

1. Load the site with `https://YOUR_DOMAIN/` and ensure navigation links, dialogs, and lazy-loaded sections render correctly.
2. Test direct navigation to deep links like `https://YOUR_DOMAIN/#events` to confirm rewrite rules.
3. Run [PageSpeed Insights](https://pagespeed.web.dev/) or Lighthouse to verify performance and accessibility scores. Expect improved FCP/LCP from code-splitting and lazy loading.
4. Use a screen reader (VoiceOver, NVDA) to validate the skip link, navigation semantics, and booking dialog labels.

## 7. Updating content

For content changes:

1. Make edits locally.
2. Rebuild with `npm run build`.
3. Upload only the changed files in `dist/` (hashed filenames will change automatically) plus `.htaccess` if it was modified.

Keeping this workflow ensures quick, repeatable deployments and optimal performance on Hostinger’s CDN-backed static hosting.
