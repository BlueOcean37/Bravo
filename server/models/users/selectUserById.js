const pool = require('../../db/index');

const selectUser = (data) => {
  let queryString = `SELECT id, username, first_name, last_name, photo
  FROM users
  WHERE users.id = ${data}`;

  return pool.query(queryString);
};

module.exports = selectUser;
