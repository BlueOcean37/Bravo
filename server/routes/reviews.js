const reviewsRouter = require('express').Router();
const {
  getAllReviews,
  addReview,
  upVoteReview,
  downVoteReview,
  addComment,
} = require('../controllers/reviews/index');

reviewsRouter.get('/', getAllReviews);
reviewsRouter.post('/', addReview);
reviewsRouter.put('/:id/upvote', upVoteReview);
reviewsRouter.put('/:id/downvote', downVoteReview);

reviewsRouter.post('/:id/comment', addComment);

// reviewsRouter.post('/:id/comment', (req, res) => {
//   addComment()
//     .then((result) => res.status(201).send('Comment Added'))
//     .catch((err) => res.sendStatus(501));
// });

// reviewsRouter.post('/:id/upvote', (req, res) => {
//   upVoteReview(req.params.id)
//     .then((result) => res.status(201).send('Review upvoted!'))
//     .catch((err) => res.sendStatus(501));
// });

// reviewsRouter.post('/:id/downvote', (req, res) => {
//   downVoteReview(req.params.id)
//     .then((result) => res.status(201).send('Review downvoted!'))
//     .catch((err) => res.sendStatus(501));
// });

module.exports = reviewsRouter;
