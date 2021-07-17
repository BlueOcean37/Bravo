const pool = require("../../db/index");

const selectShowById = (data) => {
  const queryString = `SELECT * FROM shows WHERE shows.id = ${data}`;

  return pool.query(queryString);
};

module.exports = selectShowById;
