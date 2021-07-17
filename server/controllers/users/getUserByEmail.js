const pool = require('../../db/index');

const getUserByEmail = (req, res) => {
  const { email } = req.body;
  let queryString = `SELECT id
  FROM users
  WHERE email = '${email}';`;
  pool
    .query(queryString)
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((err) => {
      console.error(err.stack, 'Failed to get user by email');
      res.sendStatus(500);
    });
};

module.exports = getUserByEmail;
