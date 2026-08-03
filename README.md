# BE76-slot-booking

Flight slot booking tool for Thai Inter Flying pilot students (BE76 multi-engine).

## Contents
- `BE76 Flight Slot Booking.dc.html` — the application (student booking + admin roster)
- `db.js` — Neon Postgres data layer (schema bootstrap + CRUD)
- `support.js` — runtime
- `_ds/` — AviCore design system bundle
- `uploads/` — logo asset

## Features
- Email/password student accounts; staff passcode for the admin panel
- Multi-day selection across months; contiguous days grouped into trips with travel-in / travel-out days added automatically
- 5 slots per day, 1 flight per student per day; 7-day advance rules
- Session window: registration opens 3 Aug 2026, day selection opens 5 Aug 2026
- Admin: per-day roster, load view, no-fly / slots-full toggles, bookings table with student email
- Data in Neon Postgres (`students`, `bookings`, `booking_days`, `day_status`, `counters`)

## Security — before production
The Neon connection string is currently embedded in `db.js` and runs in the browser. Move SQL behind a server API, rotate the Neon password, and hash student passwords before opening this to students.

## Run
Serve the folder over HTTP and open `BE76 Flight Slot Booking.dc.html`.
