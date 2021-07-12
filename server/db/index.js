// database setup goes here
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER || 'postgres',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'test',
  password: process.env.PG_PASSWORD || '',
  port: process.env.PG_PORT || 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log('Connected to Postgres');
  // pool.end();
});

module.exports = pool;
