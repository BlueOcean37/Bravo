// POST add a comment to review controller
const pool = require('../../db/index');

const addComment = (req, res) => {
  let reviewId = req.params.reviewId;
  let userId = req.body.id;
  let text = req.body.text;
  const reviewComment = `INSERT INTO comments (review_id, user_id, text) VALUES (${reviewId}, ${userId}, ${text})`;
  pool
    .query(reviewComment)
    .then((result) => res.status(201).send('Comment Added'))
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = addComment;
