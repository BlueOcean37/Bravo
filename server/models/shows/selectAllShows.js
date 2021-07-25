const pool = require('../../db/index');

const selectAllShows = (data) => {
  const queryString = `SELECT * FROM shows ORDER BY ${data} DESC LIMIT 20`;
  return pool.query(queryString);
};

module.exports = selectAllShows;
