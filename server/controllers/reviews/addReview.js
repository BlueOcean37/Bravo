// POST add a review
const pool = require('../../db/index');

const addReview = (req, res) => {
  const timestamp = new Date().getTime();
  const addReview = `
    INSERT INTO reviews (show_id, user_id, show_rating, text, date)
    VALUES (${req.body.show_id}, ${req.body.user_id}, ${req.body.show_rating}, '${req.body.text}', ${timestamp});`;
  pool
    .query(addReview)
    .then((result) => res.sendStatus(201))
    .catch((err) => {
      console.error('error adding new review to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addReview;
