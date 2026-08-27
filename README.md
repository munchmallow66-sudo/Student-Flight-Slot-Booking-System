# BE76-slot-booking

Flight slot booking tool for Thai Inter Flying pilot students (BE76 multi-engine).

## Contents
- `BE76 Flight Slot Booking.dc.html` — the application (student booking + admin roster)
- `index.html` — mirrored copy of the same application
- `db.js` — browser API client (talks to `api/`; contains no database credentials)
- `api/` — Node.js API server (`server.js`) + helpers + admin CLI
- `_ds/` — AviCore design system bundle
- `uploads/` — logo asset

## Features
- Email/password student accounts; passwords hashed with scrypt server-side
- Staff/admin login with a real account (no hardcoded passcode)
- Session tokens (hashed server-side, 30-day expiry)
- Multi-day selection across months; contiguous days grouped into trips with travel-in / travel-out days added automatically
- 5 slots per day, 1 flight per student per day; capacity and day rules enforced server-side in a transaction
- Session window: registration opens 3 Aug 2026, day selection opens 5 Aug 2026 (editable in Settings)
- Admin: per-day roster, load view, no-fly / slots-full toggles, full bookings list (search by name/email/ID, filter by batch and flight-day range), cancel bookings
- Append-only audit trail: registrations, booking created/replaced, cancellations and admin day-status/settings changes are recorded with who/when/details (Staff → **Audit log**)
- Data in Neon Postgres (students, bookings, booking_days, day_status, settings, counters, sessions, audit_log)

## Run (requires Node.js)
```powershell
cd d:\TIF\Project_web\Student-Flight-Slot-Booking-System
node api/server.js
# open http://localhost:8000/
```
- The server serves the static app and the `/api/*` endpoints.
- On first boot it creates/migrates the database tables automatically.
- The Neon connection string lives in `api/secrets.env` (gitignored) — never in browser code.

### Create / reset the staff admin account
```powershell
node api/create-admin.js admin@tif.local YourStrongPassword
```
Then sign in to the Staff Portal (Admin tab) with that email and password.

## Deploy to Vercel
The repo deploys as a **static site + one serverless API function**. No CORS work is needed — the browser calls `/api/*` on the same origin.

1. Host the repo on GitHub (already done, commit `6656362`).
2. In the Vercel dashboard: **Add New → Project**, import the repo (or run `npx vercel` in this folder).
   - Framework preset: **Other** — leave Build Command and Output Directory empty.
3. Set the database connection as a Vercel environment variable:
   - **Settings → Environment Variables** → add `DATABASE_URL` (apply to Production, Preview **and** Development).
   - The value is in local `api/secrets.env` (gitignored — never uploaded) or the Neon Console.
   - Tip for Neon: prefer the **Pooled connection string** (`-pooler.neon.tech` host or `?pgbouncer=true`) so serverless instances share connections instead of each opening its own.
4. Deploy. The first `/api/*` request auto-runs the (idempotent) table migrations, or verify right away via `https://<your-project>.vercel.app/api/health`.
5. Create/reset the staff account against the same Neon DB (run locally), then sign in from the website:
   ```powershell
   node api/create-admin.js admin@tif.local YourStrongPassword
   ```

What changed for Vercel:
- `vercel.json` rewrites `/api/:path*` → `api/index.js` (the serverless function); the Vercel CDN serves all static assets (`index.html`, `BE76 Flight Slot Booking.dc.html`, `db.js`, `support.js`, `_ds/`, `uploads/`).
- `api/server.js` now exports the same request handler it runs locally — `node api/server.js` is unchanged. On Vercel each instance runs migrations on its first request.
- `api/index.js` is the Vercel entry point; the root `package.json` lets Vercel install `pg`.

## Security notes
- Passwords hashed with scrypt (N=16384) server-side; legacy plaintext passwords are re-hashed on first login.
- The Neon connection string is only read by the server (`api/secrets.env` or `DATABASE_URL` env var); `secrets.env` is gitignored and never uploaded.
- **Before production**: rotate the current Neon password (it was previously embedded in this repo and pushed to GitHub) and update `api/secrets.env`, add a server-side rate limiter, and keep HTTPS on (Vercel provides it automatically).