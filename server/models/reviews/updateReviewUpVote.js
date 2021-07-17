const pool = require('../../db/index');

const updateReviewUpVote = (data) => {
  const queryString = `UPDATE reviews SET rating = rating + 1 WHERE reviews.id = ${data}`;
  return pool.query(queryString);
};

module.exports = updateReviewUpVote;
