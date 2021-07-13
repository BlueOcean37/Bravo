// GET all shows controller
const pool = require("../../db/index");

const getAllShows = (req, res) => {
  const queryString = "SELECT * FROM shows";
  pool
    .query(queryString)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = getAllShows;
