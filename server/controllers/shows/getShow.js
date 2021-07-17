// GET show By ID controller
const pool = require("../../db/index");

const getShow = (req, res) => {
  const id = req.params.id;
  const queryString = `SELECT * FROM shows WHERE shows.id = ${id}`;
  pool
    .query(queryString)
    .then((result) => res.status(200).send(result.rows[0]))
    .catch((err) => {
      console.error("error getting all reviews for a single show", err.stack);
      res.sendStatus(500);
    });
};

module.exports = getShow;
