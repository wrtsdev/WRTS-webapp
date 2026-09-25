# Hostinger Deployment

## Production settings
- Repository: `wrtsdev/WRTS-webapp`
- Branch: `main`
- Framework: Vite
- Node.js: 20.x or 22.x
- Install command: `npm ci` once `package-lock.json` is committed; until then use `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Dependency policy
Production dependencies are pinned to explicit versions. Do not use `latest` in package.json.
- React 19.1.1
- React DOM 19.1.1
- Vite 7.1.7
- @vitejs/plugin-react 5.0.4

Do not use `--force` or `--legacy-peer-deps` as the normal deployment path. A peer-dependency error should be corrected in package.json.

## Required pre-deployment checks
1. Install dependencies with the lockfile: `npm ci`
2. Run `npm run check`
3. Confirm `dist/index.html` exists
4. Deploy only from `main`

## Environment variables
Environment variables belong in Hostinger configuration, not committed source files. Variables prefixed with `VITE_` are browser-visible and must never contain secrets. `HUBSPOT_ACCESS_TOKEN`, database credentials, session secrets and provider API keys are server-side only.

## Rollback
If a deployment fails, keep the existing production deployment live and fix the repository. Do not edit durable production files directly in Hostinger. Redeploy a known-good commit from GitHub.

See `docs/DEPLOYMENT_ARCHITECTURE.md` for the full architecture.
