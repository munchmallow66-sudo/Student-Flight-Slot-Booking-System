// Vercel Serverless Function entry point.
// vercel.json rewrites every /api/* request to this function. The actual routing
// lives in server.js, which is shared with local development (`node api/server.js`).
const handle = require("./server");

module.exports = handle;
module.exports.config = { maxDuration: 30 };