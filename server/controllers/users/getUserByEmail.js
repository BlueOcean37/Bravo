const { selectUserByEmail } = require('../../models/users');

const getUserByEmail = (req, res) => {
  selectUserByEmail(req.body.email)
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((err) => {
      console.error(err.stack, 'Failed to get user by email');
      res.sendStatus(500);
    });
};

module.exports = getUserByEmail;
