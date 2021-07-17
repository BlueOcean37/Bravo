const pool = require('../../db/index');

const insertShow = (data) => {
  const queryString = `
  INSERT INTO shows
  (user_id, title, street, city,
  zip, state, date, website,
  description, photo, rating)
  VALUES (
  $1, $2, $3, $4,
  $5, $6, $7, $8,
  $9, $10, 0
  )
  RETURNING id;`;

  return pool.query(queryString, data);
};

module.exports = insertShow;
