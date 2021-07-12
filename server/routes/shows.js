const showsRouter = require('express').Router();
const {
  getAllShows,
  getShow,
  getShowReviews,
} = require('../controllers/shows');

showsRouter.get('/', getAllShows);

showsRouter.get('/:id', getShow);

showsRouter.get('/:id/reviews', getShowReviews);

module.exports = showsRouter;
