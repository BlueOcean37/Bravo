const pool = require("../../db/index");

const getUser = (req, res) => {
  const id = req.params.id;
  let queryString = `SELECT id, username, first_name, last_name, photo
  FROM users
  WHERE users.id = ${id}`;
  pool
    .query(queryString)
    .then((result) => res.status(201).json(result.rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = getUser;
