# Integration Guide (DB, KYC, ACH, Stats)

## Database
- Pick a managed Postgres (Neon, Supabase) or Mongo (Atlas).
- Create tables: users, accounts, markets, orders, trades, ledgers, settlements, audit_logs.
- Use Prisma for schema & migrations.

## KYC/AML
- Vendor: Persona, Alloy, or Veriff.
- Flow: collect PII -> vendor check -> webhook -> update `users.verification_status`.
- Block trading/funding until status is `approved`.

## Funding (ACH)
- Vendor: Unit, Increase, or Teller.
- Flow: link bank -> create ACH debit/credit -> webhook -> credit internal ledger -> update `accounts.available_balance`.

## Stats Feeds
- Choose official providers for each league.
- Build a settlement engine that reads stat endpoints post‑game and finalizes contracts.

## Order Matching
- Start with a single‑venue order book per market.
- For V1, implement simple price‑time priority with WebSocket updates.

## Audit & Compliance
- Append‑only `audit_logs` table for all state changes.
- Export daily reports; maintain access controls (SOC 2).

See `/adapters/*.ts` for stubbed code you can implement.
