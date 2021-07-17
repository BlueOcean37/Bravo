const { selectComments } = require('../../models/reviews');

const getComments = (req, res) => {
  selectComments(req.params.id)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting comments to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getComments;
