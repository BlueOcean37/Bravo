const pool = require('../../db/index');

const selectSearchResults = () => {
  const queryString = `SELECT
  (SELECT json_agg(row_to_json(s)) FROM shows s) as shows,
  (SELECT json_agg(row_to_json(u)) FROM users u) as users
`;

  return pool.query(queryString);
};

module.exports = selectSearchResults;
