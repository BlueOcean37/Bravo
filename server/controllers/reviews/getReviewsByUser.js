const pool = require('../../db/index');

const getReviewsByUser = (req, res) => {
  const getReviewsByUser = `
  SELECT reviews.*, (SELECT username FROM users WHERE reviews.user_id = users.id) AS username, (
    SELECT jsonb_agg(jsonb_build_object(
      'text', comments.text,
      'date', comments.date,
      'username', (SELECT username FROM users WHERE comments.user_id = users.id)
    ))
    FROM comments
    WHERE review_id = reviews.id
  ) as comments
  FROM reviews
  WHERE user_id = ${req.params.id}`;
  pool
    .query(getReviewsByUser)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => console.error("this didn't work", err.stack));
};

module.exports = getReviewsByUser;
