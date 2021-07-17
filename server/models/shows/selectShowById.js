const pool = require('../../db/index');

const selectShowById = (data) => {
  const queryString = `SELECT *, (
    SELECT jsonb_agg(jsonb_build_object(
      'id', reviews.id,
      'text', reviews.text,
      'date', reviews.date,
      'rating', reviews.rating,
      'show_rating', reviews.show_rating,
      'photo', (SELECT photo FROM users WHERE reviews.user_id = users.id),
      'username', (SELECT username FROM users WHERE reviews.user_id = users.id),
      'user_id', (SELECT id FROM users WHERE reviews.user_id = users.id),
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
    WHERE reviews.show_id = ${data}
  ) as reviews
  FROM shows
  WHERE shows.id = ${data}`;

  return pool.query(queryString);
};

module.exports = selectShowById;
