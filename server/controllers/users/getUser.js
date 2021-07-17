const pool = require('../../db/index');

const getUser = (req, res) => {
  const { id } = req.params;
  let queryString = `SELECT id, username, first_name, last_name, photo
  FROM users
  WHERE users.id = ${id}`;
  pool
    .query(queryString)
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((err) => {
      console.error(err.stack, 'Failed to get user');
      res.sendStatus(500);
    });
};

module.exports = getUser;
