# WRTS Web App

Production foundation for **We Run These Streetz LLC (WRTS)**.

**Positioning:** WRTS is a community wellness and engagement company powered by movement culture.

**Mission:** Strengthen communities through Wellness, Wealth, Wisdom, and Work.

**Core experience:** Move Forward Together.

## Product architecture
- Q1 Wellness — Move Better
- Q2 Wealth — Build Capacity
- Q3 Wisdom — Grow Together
- Q4 Work — Create Opportunity
- Reusable challenge architecture
- WRTS Passport prototype
- Community Intelligence: Listen → Engage → Learn → Improve
- Partner pathways for sponsors, community organizations, employers and public-sector partners
- HubSpot-ready lead and participant journeys

Events are delivery mechanisms, not the WRTS identity. Lazy Lobster is not part of the WRTS core architecture and should only be represented, when relevant, as a community partnership.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Architecture
- React + Vite frontend
- GitHub source of truth
- Hostinger deployment
- HubSpot CRM
- Future proprietary WRTS application/data layer for Passport, challenges, community and Community Intelligence
- Third-party timing/live tracking only where appropriate
- PMSuite is excluded

## Working vs prototype
Working: responsive React UI, quarter configuration, Four Ws annual cycle, challenge filtering, accessibility foundations.

Prototype: Passport data, impact metrics, challenge enrollment and join form. These are intentionally labeled and must not be represented as production integrations.

See `docs/DEPLOYMENT_ARCHITECTURE.md` and `docs/HUBSPOT_INTEGRATION.md`.
