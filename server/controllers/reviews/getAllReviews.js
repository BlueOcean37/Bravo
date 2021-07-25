const { selectAllReviews } = require('../../models/reviews');

const getAllReviews = (req, res) => {
  selectAllReviews()
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      console.error('error getting all reviews from db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getAllReviews;
