// GET show By ID controller
const pool = require('../../db/index');

const getShow = (req, res) => {
  const id = req.params.id;
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
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => {
      console.error('error getting all reviews for a single show', err.stack);
      res.sendStatus(500);
    });
};

module.exports = getShow;
