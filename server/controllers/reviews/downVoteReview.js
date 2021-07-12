// put update a review down vote controller
const pool = require('../../db/index');

const downVoteReview = (req, res) => {
  const downVoteReview = `UPDATE reviews SET rating = rating - 1 WHERE id = ${req.params.id}`;
  pool
    .query(downVoteReview)
    .then((result) => res.status(204).send('Review downvoted!'))
    .catch((err) => {
      console.error('error updating the downVote', err.stack);
      res.sendStatus(500);
    });
};

module.exports = downVoteReview;
