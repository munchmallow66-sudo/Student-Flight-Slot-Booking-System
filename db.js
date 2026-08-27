// db.js - browser API client. No database credentials live here.
// All database work happens server-side through the API (see api/).
const TOKEN_KEY = "tif-flight-slot-token-v1";

function getToken() { try { return localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; } }
function setToken(t) { try { if (t) localStorage.setItem(TOKEN_KEY, t); else localStorage.removeItem(TOKEN_KEY); } catch (e) { } }

async function req(method, path, body) {
  const headers = { "Content-Type": "application/json" };
  const tok = getToken();
  if (tok) headers["Authorization"] = "Bearer " + tok;
  const opts = { method: method, headers: headers };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(path, opts);
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (e) { data = { message: text }; }
  if (!res.ok) {
    throw new Error((data && data.message) || ("Request failed (" + res.status + ")"));
  }
  return data;
}

export async function init() {
  if (!getToken()) return false;
  try {
    await req("GET", "/api/me");
    return true;
  } catch (e) {
    setToken(null);
    return false;
  }
}

export function login(email, password) {
  return req("POST", "/api/login", { email: email, password: password }).then(function (d) {
    setToken(d.token);
    return d;
  });
}

export function register(payload) {
  return req("POST", "/api/register", payload).then(function (d) {
    setToken(d.token);
    return d;
  });
}

export function logout() {
  const t = getToken();
  setToken(null);
  if (t) req("POST", "/api/logout").catch(function () { });
}

export async function loadAll() {
  return req("GET", "/api/state");
}

export function saveAccount(email, acc) {
  return req("PUT", "/api/profile", { first: acc.first, last: acc.last, batch: acc.batch, phone: acc.phone });
}

export function saveSetting(key, value) {
  return req("PUT", "/api/settings", { key: key, value: value || null });
}

export function setDayStatus(day, status) {
  return req("PATCH", "/api/day-status?day=" + encodeURIComponent(day), { status: status || null });
}

export function saveBooking(b) {
  return req("POST", "/api/bookings", { days: (b && b.days) || [] });
}

export function deleteBookingsForEmail(email, keepId) {
  if (keepId) return req("DELETE", "/api/bookings/" + encodeURIComponent(keepId));
  return req("DELETE", "/api/bookings/all");
}

export function deleteBooking(id) {
  return req("DELETE", "/api/bookings/" + encodeURIComponent(id));
}

export function fetchAudit(params) {
  const q = new URLSearchParams();
  if (params) {
    if (params.limit) q.set("limit", String(params.limit));
    if (params.email) q.set("email", params.email);
    if (params.action) q.set("action", params.action);
  }
  const s = q.toString();
  return req("GET", "/api/audit" + (s ? "?" + s : ""));
}

export function nextBookingSeq() {
  return Promise.resolve(null);
}