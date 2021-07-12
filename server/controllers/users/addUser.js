const pool = require('../../db/index');

const addUser = (req, res) => {
  const { username, password, email, first_name, last_name, photo } = req.body;
  let queryString = `INSERT INTO users ( username, password, email, first_name, last_name, photo) VALUES ('${username}', '${password}', '${email}', '${first_name}', '${last_name}', '${photo}')`;

  pool
    .query(queryString)
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(400).json(err));
};

module.exports = addUser;
