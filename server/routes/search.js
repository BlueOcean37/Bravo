const searchRouter = require('express').Router();
const { getSearchResults } = require('../controllers/search/index');

searchRouter.get('/', getSearchResults);

module.exports = searchRouter;
