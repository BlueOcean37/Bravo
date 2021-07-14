const pool = require("../../db/index");

const getReviewsByUser = (req, res) => {
  const getReviewsByUser = `SELECT *, (
    SELECT jsonb_build_object(
      'username', users.username,
      'photo', users.photo
    )
    FROM users WHERE users.id = reviews.user_id
  ) AS user, (
    SELECT jsonb_build_object(
      'title', shows.title,
      'location', shows.street
    )
    FROM shows WHERE shows.id = reviews.show_id
  ) AS show, (
    SELECT jsonb_agg(jsonb_build_object(
      'text', comments.text,
      'date', comments.date,
      'username', (
        SELECT username FROM users WHERE users.id = comments.user_id
      )
    ))
    FROM comments WHERE comments.review_id = reviews.id
  ) AS comments
  FROM reviews
  WHERE reviews.user_id = ${req.params.id}
  ORDER BY rating DESC`;
  pool
    .query(getReviewsByUser)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => console.error("this didn't work", err.stack));
};

module.exports = getReviewsByUser;
