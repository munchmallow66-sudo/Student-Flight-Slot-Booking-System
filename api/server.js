// BE76 slot booking API + static file server. Server-side only.
const http = require("http");
const fs = require("fs");
const path = require("path");
const { pool, migrate, hashPw, verifyPw, tokenHash, createSession, authFrom } = require("./helpers");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 8000);
const SLOTS = Number(process.env.SLOTS_PER_DAY || 5);
const WINDOW_START = "2026-08-01";
const WINDOW_END = "2027-01-31";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".pdf": "application/pdf"
};

function send(res, code, obj) {
  const body = JSON.stringify(obj === undefined ? {} : obj);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8" });
  res.end(body);
}

function readBody(req) {
  return new Promise(function (resolve, reject) {
    let data = "";
    req.on("data", function (c) {
      data += c;
      if (data.length > 2000000) { reject(new Error("Payload too large")); req.destroy(); }
    });
    req.on("end", function () {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { reject(new Error("Invalid JSON body")); }
    });
    req.on("error", reject);
  });
}

function bearerToken(req) {
  const p = (req.headers["authorization"] || "").split(" ");
  return (p.length === 2 && p[0].toLowerCase() === "bearer") ? p[1].trim() : "";
}

function serveStatic(req, res, raw) {
  let rel;
  try { rel = decodeURIComponent(raw); } catch (e) { res.writeHead(400); res.end("Bad request"); return; }
  if (rel.indexOf("/") !== 0) { res.writeHead(403); res.end("Forbidden"); return; }
  if (rel === "/" || rel === "") rel = "/index.html";
  const full = path.normalize(path.join(ROOT, rel));
  if (full !== ROOT && full.indexOf(ROOT + path.sep) !== 0) { res.writeHead(403); res.end("Forbidden"); return; }
  fs.stat(full, function (err, st) {
    if (err || !st.isFile()) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("Not found"); return; }
    const ext = path.extname(full).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream", "Content-Length": st.size, "Cache-Control": "no-cache" });
    fs.createReadStream(full).pipe(res);
  });
}

function isIso(d) { return typeof d === "string" && d.length === 10 && d[4] === "-" && d[7] === "-" && !isNaN(Date.parse(d + "T00:00:00Z")); }

async function loadState() {
  const studs = await pool.query("select email, first, last, batch, phone from students order by email");
  const books = await pool.query("select id, email, name, batch, phone from bookings order by created_at");
  const bdays = await pool.query("select booking_id, day::text as day from booking_days order by day");
  const stats = await pool.query("select day::text as day, status from day_status");
  const sets = await pool.query("select key, value from settings");
  const accounts = {};
  studs.rows.forEach(function (r) { accounts[r.email] = { first: r.first || "", last: r.last || "", batch: r.batch || "", phone: r.phone || "" }; });
  const dayMap = {};
  bdays.rows.forEach(function (r) { (dayMap[r.booking_id] = dayMap[r.booking_id] || []).push(r.day.slice(0, 10)); });
  const bookings = books.rows.map(function (b) { return { id: b.id, email: b.email, name: b.name || "", batch: b.batch || "", phone: b.phone || "", days: (dayMap[b.id] || []).sort() }; });
  const dayState = {};
  stats.rows.forEach(function (r) { dayState[r.day.slice(0, 10)] = r.status; });
  const settings = {};
  sets.rows.forEach(function (r) { settings[r.key] = r.value; });
  return { bookings: bookings, dayState: dayState, settings: settings, accounts: accounts };
}

async function api(req, res, u) {
  const method = req.method;
  const pathA = u.pathname;
  const auth = await authFrom(req.headers["authorization"]);

  if (method === "GET" && pathA === "/api/health") { send(res, 200, { ok: true }); return; }

  if (method === "POST" && pathA === "/api/register") {
    const b = await readBody(req);
    const email = (b.email || "").toLowerCase().trim();
    const pw = b.password || "";
    const emailOk = email.indexOf("@") > 0 && email.indexOf("@") < email.length - 2 && email.indexOf(" ") < 0;
    if (!emailOk) { send(res, 400, { message: "Enter a valid email address." }); return; }
    if (pw.length < 8) { send(res, 400, { message: "Password must be at least 8 characters." }); return; }
    const sr = await pool.query("select value from settings where key = $1", ["signup_open"]);
    const open = sr.rows[0] && sr.rows[0].value;
    if (open && new Date() < new Date(open + "T00:00:00")) { send(res, 403, { message: "Registration opens " + open + ". Accounts cannot be created yet." }); return; }
    const ex = await pool.query("select 1 from students where lower(email) = lower($1)", [email]);
    if (ex.rows.length) { send(res, 409, { message: "An account already exists for this email. Sign in instead." }); return; }
    await pool.query("insert into students (email, password, first, last, batch, phone) values ($1,$2,$3,$4,$5,$6)", [email, hashPw(pw), (b.first || "").trim(), (b.last || "").trim(), (b.batch || "").trim(), (b.phone || "").trim()]);
    const token = await createSession(email);
    send(res, 200, { token: token, email: email, first: (b.first || "").trim(), last: (b.last || "").trim(), batch: (b.batch || "").trim(), phone: (b.phone || "").trim(), isAdmin: false });
    return;
  }

  if (method === "POST" && pathA === "/api/login") {
    const b = await readBody(req);
    const email = (b.email || "").toLowerCase().trim();
    const pw = b.password || "";
    const rr = await pool.query("select email, password, first, last, batch, phone, is_admin from students where lower(email) = lower($1)", [email]);
    if (!rr.rows.length) { send(res, 401, { message: "Email or password is incorrect." }); return; }
    const st = rr.rows[0];
    if (!verifyPw(pw, st.password)) { send(res, 401, { message: "Email or password is incorrect." }); return; }
    if (st.password.indexOf("scrypt$") !== 0) { await pool.query("update students set password = $1 where email = $2", [hashPw(pw), st.email]); }
    const token = await createSession(st.email);
    send(res, 200, { token: token, email: st.email, first: st.first || "", last: st.last || "", batch: st.batch || "", phone: st.phone || "", isAdmin: !!st.is_admin });
    return;
  }

  if (!auth) { send(res, 401, { message: "Not signed in." }); return; }

  if (method === "POST" && pathA === "/api/logout") {
    const tok = bearerToken(req);
    if (tok) await pool.query("delete from sessions where token_hash = $1", [tokenHash(tok)]);
    send(res, 200, { ok: true }); return;
  }

  if (method === "GET" && pathA === "/api/me") {
    const rr = await pool.query("select email, first, last, batch, phone, is_admin from students where lower(email) = lower($1)", [auth.email]);
    const r = rr.rows[0];
    send(res, 200, { email: auth.email, first: (r && r.first) || "", last: (r && r.last) || "", batch: (r && r.batch) || "", phone: (r && r.phone) || "", isAdmin: auth.isAdmin });
    return;
  }

  if (method === "GET" && pathA === "/api/state") {
    const out = await loadState();
    send(res, 200, { bookings: out.bookings, dayState: out.dayState, settings: out.settings, accounts: out.accounts, isAdmin: auth.isAdmin });
    return;
  }
  if (method === "PUT" && pathA === "/api/profile") {
    const b = await readBody(req);
    await pool.query("update students set first = $1, last = $2, batch = $3, phone = $4 where lower(email) = lower($5)", [(b.first || "").trim(), (b.last || "").trim(), (b.batch || "").trim(), (b.phone || "").trim(), auth.email]);
    send(res, 200, { ok: true }); return;
  }

  if (method === "PUT" && pathA === "/api/password") {
    const b = await readBody(req);
    const rr = await pool.query("select password from students where lower(email) = lower($1)", [auth.email]);
    if (!rr.rows.length || !verifyPw(b.current || "", rr.rows[0].password)) { send(res, 400, { message: "Current password is incorrect." }); return; }
    if ((b.next || "").length < 8) { send(res, 400, { message: "New password must be at least 8 characters." }); return; }
    const tok = bearerToken(req);
    await pool.query("update students set password = $1 where email = $2", [hashPw(b.next), auth.email]);
    if (tok) await pool.query("delete from sessions where email = $1 and token_hash <> $2", [auth.email, tokenHash(tok)]);
    send(res, 200, { ok: true }); return;
  }

  if (method === "PATCH" && pathA === "/api/day-status") {
    if (!auth.isAdmin) { send(res, 403, { message: "Staff access required." }); return; }
    const day = (u.searchParams.get("day") || "").slice(0, 10);
    if (!isIso(day)) { send(res, 400, { message: "Invalid day." }); return; }
    const b = await readBody(req);
    const st = b.status || null;
    if (st) await pool.query("insert into day_status (day, status) values ($1,$2) on conflict (day) do update set status = excluded.status", [day, st]);
    else await pool.query("delete from day_status where day = $1", [day]);
    send(res, 200, { ok: true }); return;
  }

  if (method === "PUT" && pathA === "/api/settings") {
    if (!auth.isAdmin) { send(res, 403, { message: "Staff access required." }); return; }
    const b = await readBody(req);
    if (!b.key) { send(res, 400, { message: "Missing setting key." }); return; }
    if (b.value) await pool.query("insert into settings (key, value) values ($1,$2) on conflict (key) do update set value = excluded.value", [b.key, b.value]);
    else await pool.query("delete from settings where key = $1", [b.key]);
    send(res, 200, { ok: true }); return;
  }

  if (method === "POST" && pathA === "/api/bookings") {
    const b = await readBody(req);
    const src = Array.isArray(b.days) ? b.days.filter(isIso) : [];
    const days = Array.from(new Set(src)).sort();
    if (!days.length) { send(res, 400, { message: "No flight days provided." }); return; }
    const windowOk = days.every(function (d) { return d >= WINDOW_START && d <= WINDOW_END; });
    if (!windowOk) { send(res, 400, { message: "One or more days are outside the booking window." }); return; }
    const sr = await pool.query("select value from settings where key = $1", ["booking_open"]);
    const open = sr.rows[0] && sr.rows[0].value;
    if (open && days[0] < open) { send(res, 403, { message: "Day booking has not opened yet." }); return; }
    const pr = await pool.query("select first, last, batch, phone from students where lower(email) = lower($1)", [auth.email]);
    const prof = pr.rows[0] || { first: "", last: "", batch: "", phone: "" };
    const client = await pool.connect();
    try {
      await client.query("begin");
      await client.query("delete from booking_days where booking_id in (select id from bookings where lower(email) = lower($1))", [auth.email]);
      await client.query("delete from bookings where lower(email) = lower($1)", [auth.email]);
      const cap = await client.query("select day::text as day, count(*)::int as n from booking_days where day = any($1::date[]) group by day", [days]);
      const used = {};
      cap.rows.forEach(function (r) { used[r.day] = r.n; });
      let blocked = null;
      for (let i = 0; i < days.length; i++) { if ((used[days[i]] || 0) >= SLOTS) { blocked = days[i]; break; } }
      if (blocked) { await client.query("rollback"); send(res, 409, { message: "Slots are full on " + blocked + ". Pick another day." }); return; }
      const ds = await client.query("select day::text as day, status from day_status where day = any($1::date[])", [days]);
      let noFly = null;
      for (let i = 0; i < ds.rows.length; i++) { if (ds.rows[i].status === "noFly" || ds.rows[i].status === "full") { noFly = ds.rows[i].day; break; } }
      if (noFly) { await client.query("rollback"); send(res, 409, { message: "Day unavailable on " + noFly + ". Pick another day." }); return; }
      const cnt = await client.query("update counters set value = value + 1 where name = $1 returning value", ["booking"]);
      const id = "BK-" + new Date().getFullYear() + "-" + String(cnt.rows[0].value).padStart(4, "0");
      const name = ((prof.first || "") + " " + (prof.last || "")).trim();
      await client.query("insert into bookings (id, email, name, batch, phone) values ($1,$2,$3,$4,$5)", [id, auth.email, name, prof.batch || "", prof.phone || ""]);
      for (let i = 0; i < days.length; i++) await client.query("insert into booking_days (booking_id, day) values ($1,$2)", [id, days[i]]);
      await client.query("commit");
      send(res, 200, { id: id, days: days });
    } catch (e) {
      try { await client.query("rollback"); } catch (e2) { }
      send(res, 500, { message: "Could not save booking. Try again." });
    } finally { client.release(); }
    return;
  }

  if (method === "DELETE" && pathA === "/api/bookings/all") {
    await pool.query("delete from bookings where lower(email) = lower($1)", [auth.email]);
    send(res, 200, { ok: true }); return;
  }

  const dm = pathA.split("/");
  if (method === "DELETE" && dm.length === 4 && dm[1] === "api" && dm[2] === "bookings" && dm[3]) {
    const bid = decodeURIComponent(dm[3]);
    const del = await pool.query("delete from bookings where id = $1 and (lower(email) = lower($2) or $3)", [bid, auth.email, auth.isAdmin]);
    if (!del.rowCount) { send(res, 404, { message: "Booking not found." }); return; }
    send(res, 200, { ok: true }); return;
  }

  send(res, 404, { message: "Unknown endpoint." });
}

const server = http.createServer(async function (req, res) {
  let u;
  try { u = new URL(req.url, "http://localhost"); } catch (e) { send(res, 400, { message: "Bad request" }); return; }
  try {
    if (u.pathname.indexOf("/api/") === 0) await api(req, res, u);
    else serveStatic(req, res, u.pathname);
  } catch (e) {
    console.error(e);
    try { send(res, 500, { message: "Server error." }); } catch (e2) { }
  }
});

migrate().then(function () {
  server.listen(PORT, function () {
    console.log("BE76 booking server ready at http://localhost:" + PORT + "/  (API at /api)");
  });
}).catch(function (e) { console.error("Startup failed:", e); process.exit(1); });