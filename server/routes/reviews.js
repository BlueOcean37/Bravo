const reviewsRouter = require('express').Router();
const {
  getAllReviews,
  upVoteReview,
  downVoteReview,
  addComment,
} = require('../controllers/reviews/index');

reviewsRouter.get('/', (req, res) => {
  getAllReviews()
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all reviews', err.stack);
      res.sendStatus(500);
    });
});

reviewsRouter.post('/:id/comment', (req, res) => {
  addComment()
    .then((result) => res.status(201).send('Comment Added'))
    .catch((err) => res.sendStatus(501));
});

reviewsRouter.post('/:id/upvote', (req, res) => {
  upVoteReview(req.params.id)
    .then((result) => res.status(201).send('Review upvoted!'))
    .catch((err) => res.sendStatus(501));
});

reviewsRouter.post('/:id/downvote', (req, res) => {
  downVoteReview(req.params.id)
    .then((result) => res.status(201).send('Review downvoted!'))
    .catch((err) => res.sendStatus(501));
});

module.exports = reviewsRouter;
