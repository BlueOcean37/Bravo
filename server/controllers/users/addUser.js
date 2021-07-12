const pool = require('../../db/index');

const addUser = (req, res) => {
  const { username, password, email, first_name, last_name, photo } = req.body;
  let queryString = `INSERT INTO users ( username, password, email, first_name, last_name, photo) VALUES ('${username}', '${password}', '${email}', '${first_name}', '${last_name}', '${photo}')`;

  pool
    .query(queryString)
    .then((result) => res.send(result))
    .catch((err) => res.send(err, 'failed'));
};

module.exports = addUser;
