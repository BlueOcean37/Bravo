const pool = require('../../db/index');

const updateReviewDownVote = (data) => {
  const queryString = `UPDATE reviews SET rating = rating - 1 WHERE id = ${data}`;
  return pool.query(queryString);
};

module.exports = updateReviewDownVote;
