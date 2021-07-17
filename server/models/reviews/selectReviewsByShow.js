const pool = require("../../db/index");

const selectReviewsByShow = (data) => {
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
  WHERE show_id = ${data}
  ORDER BY rating DESC`;
  return pool.query(queryString);
};

module.exports = selectReviewsByShow;
