// GET all shows controller
const pool = require('../../db/index');

const getAllShows = (req, res) => {
  const order = req.query.sort

  const queryString = `SELECT * FROM shows ORDER BY ${order} DESC LIMIT 20`;
  pool
    .query(queryString)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all shows', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getAllShows;
