const { insertReview } = require('../../models/reviews');

const addReview = (req, res) => {
  const timestamp = new Date().getTime();
  const reviewData = [
    req.body.show_id,
    req.body.user_id,
    req.body.show_rating,
    req.body.text,
    timestamp,
  ];

  insertReview(reviewData)
    .then((result) => res.sendStatus(201))
    .catch((err) => {
      console.error('error adding review to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addReview;
