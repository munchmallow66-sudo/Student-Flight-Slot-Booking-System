// Shared auth/db helpers for the BE76 booking API. Server-side only.
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

function loadDbUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const f = path.join(__dirname, "secrets.env");
  try {
    const text = fs.readFileSync(f, "utf8");
    const eq = text.indexOf("=");
    if (text.indexOf("DATABASE_URL") === 0 && eq > 6) return text.slice(eq + 1).trim();
  } catch (e) { }
  return null;
}

const DATABASE_URL = loadDbUrl();
const pool = new Pool({ connectionString: DATABASE_URL, max: 4, ssl: { rejectUnauthorized: false } });

async function migrate() {
  await pool.query("create table if not exists students (email text primary key, password text not null, first text, last text, batch text, phone text, created_at timestamptz default now())");
  await pool.query("alter table students add column if not exists is_admin boolean not null default false");
  await pool.query("create table if not exists sessions (token_hash text primary key, email text not null, created_at timestamptz default now(), expires_at timestamptz not null)");
  await pool.query("create table if not exists bookings (id text primary key, email text not null, name text, batch text, phone text, created_at timestamptz default now())");
  await pool.query("create table if not exists booking_days (booking_id text not null references bookings(id) on delete cascade, day date not null, primary key (booking_id, day))");
  await pool.query("create table if not exists day_status (day date primary key, status text not null)");
  await pool.query("create table if not exists settings (key text primary key, value text)");
  await pool.query("create table if not exists counters (name text primary key, value integer not null default 0)");
  await pool.query("create table if not exists audit_log (id bigserial primary key, ts timestamptz not null default now(), email text not null, action text not null, booking_id text, detail text)");
  await pool.query("create index if not exists audit_log_ts_idx on audit_log (ts desc)");
  await pool.query("insert into counters (name, value) values ($1, 1) on conflict do nothing", ["booking"]);
}

function hashPw(pw) {
  const N = 16384, r = 8, p = 1;
  const salt = crypto.randomBytes(16).toString("base64");
  const key = crypto.scryptSync(pw, salt, 32, { N: N, r: r, p: p });
  return "scrypt$" + N + "$" + r + "$" + p + "$" + salt + "$" + key.toString("base64");
}
function verifyPw(pw, stored) {
  if (typeof stored !== "string" || stored.indexOf("scrypt$") !== 0) return stored === pw;
  const parts = stored.split("$");
  if (parts.length !== 6) return false;
  const N = Number(parts[1]), r = Number(parts[2]), p = Number(parts[3]);
  const salt = parts[4], want = Buffer.from(parts[5], "base64");
  const key = crypto.scryptSync(pw, salt, 32, { N: N, r: r, p: p });
  return key.length === want.length && crypto.timingSafeEqual(key, want);
}
function tokenHash(t) { return crypto.createHash("sha256").update(t).digest("hex"); }
function newToken() { return crypto.randomBytes(32).toString("base64url"); }
async function createSession(email) {
  const t = newToken();
  const exp = new Date(Date.now() + 30 * 24 * 3600 * 1000);
  await pool.query("insert into sessions (token_hash, email, expires_at) values ($1,$2,$3)", [tokenHash(t), email, exp]);
  return t;
}
async function authFrom(header) {
  const p = (header || "").split(" ");
  if (p.length !== 2 || p[0].toLowerCase() !== "bearer") return null;
  const h = tokenHash(p[1].trim());
  const r = await pool.query("select s.email, st.is_admin as is_admin from sessions s join students st on st.email = s.email where s.token_hash = $1 and s.expires_at > now()", [h]);
  if (!r.rows.length) return null;
  return { email: r.rows[0].email, isAdmin: !!r.rows[0].is_admin };
}

module.exports = { pool: pool, migrate: migrate, hashPw: hashPw, verifyPw: verifyPw, tokenHash: tokenHash, newToken: newToken, createSession: createSession, authFrom: authFrom, DATABASE_URL: DATABASE_URL };