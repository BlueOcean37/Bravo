// get all reviews controller
const pool = require('../../db/index');

const getAllReviews = (req, res) => {
  const getReviews = `SELECT * from reviews ORDER BY rating DESC`;
  pool
    .query(getReviews)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all reviews', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getAllReviews;
