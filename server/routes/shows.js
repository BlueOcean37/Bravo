const showsRouter = require('express').Router();
const {
  getAllShows,
  getShow,
  getShowReviews,
  addShowReview,
} = require('../controllers/shows');

showsRouter.get('/', getAllShows);

showsRouter.get('/:id', getShow);

showsRouter.get('/:id/reviews', getShowReviews);

showsRouter.post('/:id/review', addShowReview);

module.exports = showsRouter;
