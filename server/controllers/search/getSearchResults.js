const selectSearchResults = require('../../models/search/selectSearchResults');

const getSearchResults = (req, res) => {
  selectSearchResults()
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all shows', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getSearchResults;
