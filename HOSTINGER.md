# Hostinger Deployment

Use Hostinger's GitHub deployment flow for this repository.

## Production settings
- Repository: `wrtsdev/WRTS-webapp`
- Branch: `main`
- Framework: Vite
- Node.js: 20.x
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

Connect the production domain after the first successful build.

Environment variables belong in Hostinger's environment-variable configuration, not committed source files.

See `docs/DEPLOYMENT_ARCHITECTURE.md` for the full architecture and roadmap.
