// POST add a comment to review controller
const pool = require('../../db/index');

const addComment = (req, res) => {
  const reviewId = req.params.id;
  const userId = req.body.user_id;
  const text = req.body.text;
  const timestamp = new Date().getTime();
  const reviewComment = `INSERT INTO comments (review_id, user_id, text, date) VALUES (${reviewId}, ${userId}, '${text}', ${timestamp})`;
  pool
    .query(reviewComment)
    .then((result) => res.sendStatus(201))
    .catch((err) => {
      console.error('error adding comment to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addComment;
