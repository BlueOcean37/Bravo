const pool = require('../../db/index');

const insertReview = (data) => {
  const queryString = `INSERT INTO reviews (show_id, user_id, show_rating, text, date) VALUES ($1, $2, $3, $4, $5);`;
  return pool.query(queryString, data);
};

module.exports = insertReview;
