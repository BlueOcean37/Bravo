// GET reviews By showID controller
const pool = require("../../db/index");

const getReviewsByShow = (req, res) => {
  const id = req.params.id;
  const queryString = `SELECT *,
  (
    SELECT jsonb_build_object(
        'username', users.username,
        'photo', users.photo
      )
    FROM users
    WHERE id = reviews.user_id
  ) AS user,
  (
    SELECT jsonb_build_object(
        'title', shows.title,
        'location', shows.street
      )
    FROM shows
    WHERE id = reviews.show_id
  ) AS show,
  (
    SELECT jsonb_agg(jsonb_build_object(
        'text', comments.text,
        'date', comments.date,
        'username', (
          SELECT username FROM users WHERE users.id = comments.user_id
        )
      ))
    FROM comments
    WHERE comments.review_id = reviews.id
  ) as comments
  FROM reviews
  WHERE show_id = ${id}
  ORDER BY rating DESC`;
  pool
    .query(queryString)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => {
      console.error("error getting all reviews for a single show", err.stack);
      res.sendStatus(500);
    });
};

module.exports = getReviewsByShow;
