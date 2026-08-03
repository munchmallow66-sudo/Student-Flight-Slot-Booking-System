import { neon } from 'https://esm.sh/@neondatabase/serverless@0.10.4';

const CONN = 'postgresql://neondb_owner:npg_k3ATQvySIbn6@ep-shy-term-aogu5cp4-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
const sql = neon(CONN);

let ready = null;

export function init() {
  if (ready) return ready;
  ready = (async function () {
    await sql`create table if not exists students (
      email text primary key,
      password text not null,
      first text, last text, batch text, phone text,
      created_at timestamptz default now()
    )`;
    await sql`create table if not exists bookings (
      id text primary key,
      email text not null,
      name text, batch text, phone text,
      created_at timestamptz default now()
    )`;
    await sql`create table if not exists booking_days (
      booking_id text not null references bookings(id) on delete cascade,
      day date not null,
      primary key (booking_id, day)
    )`;
    await sql`create table if not exists day_status (
      day date primary key,
      status text not null
    )`;
    await sql`create table if not exists settings (
      key text primary key,
      value text
    )`;
    await sql`create table if not exists counters (
      name text primary key,
      value integer not null default 0
    )`;
  })();
  return ready;
}

function iso(d) {
  if (typeof d === 'string') return d.slice(0, 10);
  const dt = new Date(d);
  return dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
}

export async function loadAll() {
  await init();
  const [studs, books, bdays, stats, sets] = await Promise.all([
    sql`select email, password, first, last, batch, phone from students`,
    sql`select id, email, name, batch, phone from bookings order by created_at`,
    sql`select booking_id, day from booking_days order by day`,
    sql`select day, status from day_status`,
    sql`select key, value from settings`
  ]);
  const accounts = {};
  studs.forEach(function (r) {
    accounts[r.email] = { password: r.password, first: r.first || '', last: r.last || '', batch: r.batch || '', phone: r.phone || '' };
  });
  const dayMap = {};
  bdays.forEach(function (r) {
    (dayMap[r.booking_id] = dayMap[r.booking_id] || []).push(iso(r.day));
  });
  const bookings = books.map(function (b) {
    return { id: b.id, email: b.email, name: b.name || '', batch: b.batch || '', phone: b.phone || '', days: (dayMap[b.id] || []).sort() };
  });
  const dayState = {};
  stats.forEach(function (r) { dayState[iso(r.day)] = r.status; });
  const settings = {};
  sets.forEach(function (r) { settings[r.key] = r.value; });
  return { accounts: accounts, bookings: bookings, dayState: dayState, settings: settings };
}

export async function saveSetting(key, value) {
  await init();
  await sql`insert into settings (key, value) values (${key}, ${value})
    on conflict (key) do update set value = excluded.value`;
}

export async function saveAccount(email, acc) {
  await init();
  await sql`insert into students (email, password, first, last, batch, phone)
    values (${email}, ${acc.password}, ${acc.first}, ${acc.last}, ${acc.batch}, ${acc.phone})
    on conflict (email) do update set
      password = excluded.password, first = excluded.first, last = excluded.last,
      batch = excluded.batch, phone = excluded.phone`;
}

export async function saveBooking(b) {
  await init();
  await sql`insert into bookings (id, email, name, batch, phone)
    values (${b.id}, ${b.email}, ${b.name}, ${b.batch}, ${b.phone})
    on conflict (id) do update set
      email = excluded.email, name = excluded.name, batch = excluded.batch, phone = excluded.phone`;
  await sql`delete from booking_days where booking_id = ${b.id}`;
  for (const d of b.days) {
    await sql`insert into booking_days (booking_id, day) values (${b.id}, ${d}) on conflict do nothing`;
  }
}

export async function deleteBookingsForEmail(email, keepId) {
  await init();
  if (keepId) await sql`delete from bookings where lower(email) = lower(${email}) and id <> ${keepId}`;
  else await sql`delete from bookings where lower(email) = lower(${email})`;
}

export async function setDayStatus(day, status) {
  await init();
  if (status) {
    await sql`insert into day_status (day, status) values (${day}, ${status})
      on conflict (day) do update set status = excluded.status`;
  } else {
    await sql`delete from day_status where day = ${day}`;
  }
}

export async function nextBookingSeq() {
  await init();
  const rows = await sql`insert into counters (name, value) values ('booking', 1)
    on conflict (name) do update set value = counters.value + 1
    returning value`;
  return rows[0].value;
}
