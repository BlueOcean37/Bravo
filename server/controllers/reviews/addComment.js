// POST add a comment to review controller
const pool = require('../../db/index');

const addComment = (req, res) => {
  const reviewId = req.params.id;
  console.log('reviewId: ', reviewId);
  const userId = req.body.user_id;
  const text = req.body.text;
  const timestamp = new Date().getTime();
  const reviewComment = `INSERT INTO comments (review_id, user_id, text, date) VALUES (${reviewId}, ${userId}, '${text}', ${timestamp})`;
  pool
    .query(reviewComment)
    .then((result) => res.status(201).send('Comment Added'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = addComment;
