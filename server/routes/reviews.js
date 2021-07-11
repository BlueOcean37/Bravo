const reviewsRouter = require('express').Router();
const { getAllReviews } = require('../controllers/reviews/index');

reviewsRouter.get('/', getAllReviews);

module.exports = reviewsRouter;
