const { updateReviewDownVote } = require('../../models/reviews');

const downVoteReview = (req, res) => {
  updateReviewDownVote(req.params.id)
    .then((result) => res.status(204).send('Review downvoted!'))
    .catch((err) => {
      console.error('error updating downvote review to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = downVoteReview;
