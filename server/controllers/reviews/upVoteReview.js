// put update a review up vote controller

const pool = require('../../db/index');

const upVoteReview = (req, res) => {
  const upVote = `UPDATE reviews SET rating = rating + 1 WHERE reviews.id = ${req.params.id}`;
  pool
    .query(upVote)
    .then((result) => res.status(201).send('Review upvoted!'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = upVoteReview;
