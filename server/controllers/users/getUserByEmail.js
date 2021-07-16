const pool = require('../../db/index');

const getUserByEmail = (req, res) => {
  const { email } = req.body;
  let queryString = `SELECT id
  FROM users
  WHERE email = '${email}';`;
  pool
    .query(queryString)
    .then((result) => {
      console.log(result.rows[0]);
      res.status(200).json(result.rows[0]);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

module.exports = getUserByEmail;
