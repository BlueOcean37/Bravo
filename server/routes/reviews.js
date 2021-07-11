const reviewsRouter = require('express').Router();
const {
  getAllReviews,
  upVoteReview,
  downVoteReview,
} = require('../controllers/reviews/index');

reviewsRouter.get('/', getAllReviews);

reviewsRouter.put('/:id/upVote', upVoteReview);

reviewsRouter.put('/:id/downVote', downVoteReview);

module.exports = reviewsRouter;
