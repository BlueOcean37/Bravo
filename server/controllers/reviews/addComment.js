const { insertComment } = require('../../models/reviews');

const addComment = (req, res) => {
  const reviewId = req.params.id;
  const userId = req.body.user_id;
  const text = req.body.text;
  const timestamp = new Date().getTime();
  const commentData = [reviewId, userId, text, timestamp];

  insertComment(commentData)
    .then((result) => res.sendStatus(201))
    .catch((err) => {
      console.error('error adding comment to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addComment;
