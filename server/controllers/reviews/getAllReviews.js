// get all reviews controller
const pool = require('../../db/index');

const getAllReviews = () => {
  const getReviews = `SELECT * from reviews ORDER BY rating DESC`;
  return pool.query(getReviews);
};

module.exports = getAllReviews;
