const reviewsRouter = require('express').Router();
const {
  getAllReviews,
  upVoteReview,
  downVoteReview,
  addComment,
} = require('../controllers/reviews/index');

reviewsRouter.get('/', getAllReviews);

reviewsRouter.post('/:id/comment', addComment);

reviewsRouter.put('/:id/upVote', upVoteReview);

reviewsRouter.put('/:id/downVote', downVoteReview);

module.exports = reviewsRouter;
