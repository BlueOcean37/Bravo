const { selectReviewsByUser } = require('../../models/reviews');

const getReviewsByUser = (req, res) => {
  selectReviewsByUser(req.params.id)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => {
      console.error('error getting reviews by user from db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getReviewsByUser;
