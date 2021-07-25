const { selectAllShows } = require('../../models/shows');

const getAllShows = (req, res) => {
  selectAllShows(req.query.sort)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all shows', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getAllShows;
