# WRTS Deployment Architecture

## Decision

WRTS-webapp uses a **GitHub-first, Hostinger-deployed** architecture.

```
Developer / ChatGPT
       |
       v
GitHub: wrtsdev/WRTS-webapp
       |
       | push to main
       v
Hostinger Web App Deployment
       |
       +--> Vite build -> dist/
       |
       +--> werunthesestreetz.com
       |
       +--> HubSpot CRM (forms / contacts / lifecycle)
       |
       +--> Future WRTS API + database
             |
             +-- Member profiles
             +-- Legacy Passport
             +-- 4Ws progress
             +-- Events / challenges
             +-- Commerce references
             +-- Community Intelligence
```

## Environments

### Production
- Branch: `main`
- Host: Hostinger
- Domain: `werunthesestreetz.com`
- Build: `npm ci && npm run build`
- Output: `dist`
- Node: 20.x or 22.x

### Preview / development
Feature work should be developed on branches and reviewed before merging into `main`. A separate preview deployment can be added when the application moves beyond the MVP.

## Current frontend

The current MVP is deliberately lightweight:
- Vite
- HTML/CSS/JavaScript
- No server-side secrets
- Static output in `dist/`

This keeps the public marketing experience fast while the application layer is built.

## Target application layers

### 1. Public experience
Marketing, events, Run the Legacy, Collect the Legacy, stories, partner content and calls to action.

### 2. CRM layer — HubSpot
HubSpot remains the WRTS system for marketing contacts, lead capture, email journeys and CRM activity. Private HubSpot credentials must never be exposed in browser JavaScript.

### 3. WRTS member layer
A future authenticated application will manage:
- WRTS member identity
- Legacy Passport
- challenge participation
- 4Ws progress
- achievements
- event history

### 4. Integration layer
Third-party race timing/live tracking providers integrate through APIs/webhooks. WRTS owns the community and member experience; timing remains a specialized external service.

### 5. Commerce layer
Collect the Legacy can begin as catalogue/checkout links and later graduate to a dedicated commerce integration. Product, order and payment secrets must remain server-side.

## Environment variables

Never commit production secrets to GitHub. Configure secrets in the hosting environment.

Suggested future variables:

```
VITE_PUBLIC_SITE_URL=
VITE_HUBSPOT_PORTAL_ID=
HUBSPOT_ACCESS_TOKEN=
DATABASE_URL=
SESSION_SECRET=
TIMING_PROVIDER_API_KEY=
```

Only variables intentionally prefixed for browser exposure should be available to frontend code. Tokens, database credentials and API secrets must be consumed server-side.

## Deployment workflow

1. Build on a feature branch.
2. Review/test locally.
3. Merge approved changes to `main`.
4. Hostinger automatically pulls the repository.
5. Hostinger runs the production build.
6. Successful output is promoted to the live site.
7. Failed builds do not replace the current successful production release.

## Build settings

- Framework: Vite
- Install: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Node: 20.x recommended
- Production branch: `main`

## Architectural guardrails

- GitHub is the source of truth. Do not make durable production edits directly in Hostinger File Manager.
- HubSpot is the CRM, not the WRTS application database.
- PMSuite is not part of WRTS architecture.
- Do not put private API keys in frontend code.
- Keep race timing provider-neutral.
- Keep WRTS-owned member, Passport, 4Ws and Community Intelligence data portable.
- Prefer modular integrations over platform lock-in.
