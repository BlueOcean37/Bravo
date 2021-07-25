const pool = require('../../db/index');

const selectComments = (data) => {
  const queryString = `SELECT * from comments WHERE review_id = ${data} ORDER BY date DESC`;
  return pool.query(queryString);
};

module.exports = selectComments;
