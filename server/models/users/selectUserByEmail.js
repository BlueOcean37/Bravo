const pool = require("../../db/index");

const selectUserByEmail = (data) => {
  let queryString = `SELECT id
  FROM users
  WHERE email = '${data}';`;

  return pool.query(queryString);
};

module.exports = selectUserByEmail;
