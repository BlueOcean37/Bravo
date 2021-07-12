const showsRouter = require('express').Router();
const { getAllShows, getShow } = require('../controllers/shows');

showsRouter.get('/', getAllShows);

showsRouter.get('/:id', getShow);

module.exports = showsRouter;
