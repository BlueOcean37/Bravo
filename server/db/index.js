require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABSE || "blueocean",
  password: process.env.PGPASSWORD || "",
  port: process.env.PGPORT || 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
});

module.exports = pool;
