# Fan Market – Next.js Starter

## Getting Started
1. `npm i`
2. `cp .env.example .env.local` and fill variables as needed
3. `npm run dev`

## Design Language (Apple/Webull)
- Minimal chrome, dark glass surfaces, high‑contrast accent.
- Large, confident type; grid‑based sections; smooth corners (2xl radii).
- Motion: subtle; keep 120–200ms transitions.

## Replace the Mock Layer
- API routes under `app/api/*` return mock data. Swap with your backend or a serverless DB.
- `lib/store.ts` currently persists in memory/localStorage; move to server actions / websockets.
- Integrate vendor SDKs for KYC/AML and ACH (Plaid/Unit/Teller), and stat feeds.

## Compliance Notes
- Structure markets as CFTC‑style event contracts; publish settlement criteria.
- Segregate customer funds; maintain audit logs; SOC 2 controls.

## Deploy
### Vercel
- Push repo to GitHub, “Import Project” in Vercel, set env vars, deploy.

### Google Cloud Run
- `npm run build`
- Provide a Dockerfile using Node 20; expose `PORT=3000`.

## Testing
- Add Playwright for e2e of trade tickets and portfolio calculations.
- Add type‑safe schemas (zod) on API boundaries.
