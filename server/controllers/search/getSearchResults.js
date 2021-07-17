// search bar
const pool = require('../../db/index');

const getSearchResults = (req, res) => {
  // const order = req.query.sort;

  const queryString = `SELECT
  (SELECT json_agg(row_to_json(s)) FROM shows s) as shows,
  (SELECT json_agg(row_to_json(u)) FROM users u) as users
`;
  pool
    .query(queryString)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all shows', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getSearchResults;
