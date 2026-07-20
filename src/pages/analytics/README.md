# analytics.rjmlaird.co.uk — setup

## 1. Password protection

`functions/_middleware.ts` uses Cloudflare Pages Functions to enforce HTTP
Basic Auth on every route under this project, before any Astro code runs.

Set these in the Cloudflare Pages project (Settings → Environment variables,
mark both **Encrypt**):

- `ANALYTICS_USER`
- `ANALYTICS_PASS`

Or via Wrangler:

```bash
npx wrangler pages secret put ANALYTICS_USER
npx wrangler pages secret put ANALYTICS_PASS
```

Visiting the site will prompt a native browser Basic Auth dialog. There's no
session/cookie — the browser re-sends credentials on every request, which is
fine for a low-traffic personal dashboard and needs zero extra code.

**Alternative**: if you'd rather not manage credentials yourself, Cloudflare
Access (Zero Trust) can gate the whole subdomain with one-time email codes or
SSO instead — no code required, configured entirely in the Cloudflare
dashboard. Worth it if you want to share access with others without sharing
a shared password.

## 2. Plausible Stats API

Create a Stats API key in Plausible (Site Settings → API Keys), then set:

- `PLAUSIBLE_API_KEY`

as another encrypted env var. Without it, the page falls back to mock data
automatically, so the dashboard is safe to deploy before the key exists.

The page currently queries a single `site_id` (`rjmlaird.co.uk`). To break
out per-subdomain traffic later, add a `filters` array to each query body,
e.g. `filters: [["is", "visit:hostname", ["dashboards.rjmlaird.co.uk"]]]`.

## 3. Folder structure

```
functions/_middleware.ts       — Basic Auth, runs on every request
src/pages/analytics/index.astro — the dashboard page (SSR)
```

Drop `functions/` and `src/pages/analytics/` into your existing
`rjmlaird.co.uk` Astro project, or deploy as its own Pages project mapped to
the `analytics.rjmlaird.co.uk` subdomain — either works, since the
middleware only protects routes within its own project.
