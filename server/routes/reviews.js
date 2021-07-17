const reviewsRouter = require('express').Router();
const {
  getAllReviews,
  addReview,
  upVoteReview,
  downVoteReview,
  addComment,
  getComments,
  getReviewsByUser,
} = require('../controllers/reviews/index');

reviewsRouter.get('/', getAllReviews);
reviewsRouter.post('/', addReview);
reviewsRouter.put('/:id/upvote', upVoteReview);
reviewsRouter.put('/:id/downvote', downVoteReview);
reviewsRouter.get('/:id/comment', getComments);
reviewsRouter.post('/:id/comment', addComment);
reviewsRouter.get('/user/:id', getReviewsByUser);

module.exports = reviewsRouter;
