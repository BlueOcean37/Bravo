const pool = require('../../db/index');

const selectAllReviews = () => {
  const queryString = `SELECT *, (
    SELECT jsonb_agg(jsonb_build_object(
      'username', users.username,
      'photo', users.photo
    ))
    FROM users WHERE users.id = reviews.user_id
  ) AS user, (
    SELECT jsonb_agg(jsonb_build_object(
      'title', shows.title,
      'location', shows.street,
      'photo', shows.photo
    ))
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
  FROM reviews ORDER BY rating DESC`;

  return pool.query(queryString);
};

module.exports = selectAllReviews;
