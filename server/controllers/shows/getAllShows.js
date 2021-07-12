// GET all shows controller
const pool = require("../../db/index");

const databaseQuery = () => {
  const queryString = "SELECT * FROM shows";
  return pool.query(queryString);
};

const getAllShows = (req, res) => {
  databaseQuery()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = getAllShows;
