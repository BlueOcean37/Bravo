const pool = require('../../db/index');

const insertComment = (data) => {
  const queryString = `INSERT INTO comments (review_id, user_id, text, date) VALUES ($1, $2, $3, $4)`;
  return pool.query(queryString, data);
};

module.exports = insertComment;
