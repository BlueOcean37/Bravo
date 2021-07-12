const showsRouter = require('express').Router();
const { getAllShows } = require('../controllers/shows');

showsRouter.get('/', getAllShows);

module.exports = showsRouter;
