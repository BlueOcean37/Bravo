const reviewsRouter = require('express').Router();
const { getAllReviews, upVoteReview } = require('../controllers/reviews/index');

reviewsRouter.get('/', getAllReviews);

reviewsRouter.put('/:id/upVote', upVoteReview);

module.exports = reviewsRouter;
