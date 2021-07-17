const { updateReviewUpVote } = require('../../models/reviews');

const upVoteReview = (req, res) => {
  updateReviewUpVote(req.params.id)
    .then((result) => res.status(204).send('Review upvoted!'))
    .catch((err) => {
      console.error('error updating upvote review to db', err.stack);
      res.status(500).send(err);
    });
};

module.exports = upVoteReview;
