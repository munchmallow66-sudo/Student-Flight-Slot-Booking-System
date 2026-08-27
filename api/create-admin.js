// Creates or resets a staff/admin account.
// Usage: node api/create-admin.js <email> <password>
const { pool, migrate, hashPw } = require("./helpers");
(async () => {
  const email = (process.argv[2] || "").toLowerCase().trim();
  const pw = process.argv[3] || "";
  if (!email || pw.length < 8) {
    console.error("Usage: node api/create-admin.js <email> <password>  (min 8 chars)");
    process.exit(1);
  }
  await migrate();
  await pool.query("insert into students (email, password, first, last, batch, phone, is_admin) values ($1,$2,$3,$4,$5,$6,true) on conflict (email) do update set password = excluded.password, is_admin = true", [email, hashPw(pw), "Staff", "Account", "-", "-"]);
  console.log("Admin account ready: " + email);
  await pool.end();
})().catch(function (e) { console.error(e); process.exit(1); });