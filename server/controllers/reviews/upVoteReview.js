// put update a review up vote controller

const pool = require('../../db/index');

const upVoteReview = (id) => {
  const upVote = `SET rating = rating - 1 WHERE reviews.id = $1`;
  return pool.query(getReviews, [id]);
};

module.exports = upVoteReview;
