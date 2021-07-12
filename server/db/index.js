// database setup goes here
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER || "DiegoCoronel",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "blueocean",
  password: process.env.PGPASSWORD || "password",
  port: process.env.PGPORT || 5432,
});

module.exports = pool;
