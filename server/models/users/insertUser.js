const pool = require('../../db/index');

const insertUser = (data) => {
  let queryString = `
  INSERT INTO users
  ( username, password, email, first_name, last_name, photo)
  VALUES ($1, $2, $3, $4, $5, $6)`;

  return pool.query(queryString, data);
};

module.exports = insertUser;
