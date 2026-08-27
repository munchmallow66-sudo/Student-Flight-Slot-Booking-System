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
- Admin: per-day roster, load view, no-fly / slots-full toggles, bookings table, cancel bookings
- Data in Neon Postgres (students, bookings, booking_days, day_status, settings, counters, sessions)

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

## Security notes
- Passwords hashed with scrypt (N=16384) server-side; legacy plaintext passwords are re-hashed on first login.
- The Neon connection string is only read by the server (`api/secrets.env` or `DATABASE_URL` env var).
- **Before production**: rotate the current Neon password (it was previously embedded in this repo and pushed to GitHub), add a server-side rate limiter, and deploy behind HTTPS.