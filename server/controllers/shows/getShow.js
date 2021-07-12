// GET show By ID controller
const pool = require("../../db/index");

const getShow = (req, res) => {
  const { id } = req.query;
  const queryString = `SELECT *, (
    SELECT jsonb_agg(jsonb_build_object(
      'id', reviews.id,
      'text', reviews.text,
      'date', reviews.date,
      'rating', reviews.rating,
      'show_rating', reviews.show_rating,
      'username', (SELECT username FROM users WHERE reviews.user_id = users.id),
      'comments', (
        SELECT jsonb_agg(jsonb_build_object(
          'text', comments.text,
          'date', comments.date,
          'username', (SELECT username FROM users WHERE comments.user_id = users.id)
        ))
        FROM comments
        WHERE reviews.id = comments.review_id
      )
    ))
    FROM reviews
    WHERE reviews.show_id = ${id}
  ) as reviews
  FROM shows
  WHERE shows.id = ${id}`;
  pool
    .query(queryString)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = getShow;
