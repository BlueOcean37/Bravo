const pool = require('../../db/index');

const addUser = (req, res) => {
  const { username, password, email, first_name, last_name, photo } = req.body;
  let queryString = `INSERT INTO users ( username, password, email, first_name, last_name, photo) VALUES ('${username}', '${password}', '${email}', '${first_name}', '${last_name}', '${photo}')`;

  pool
    .query(queryString)
    .then((result) => res.sendStatus(201))
    .catch((err) => {
      console.error('error adding a user', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addUser;
