const { selectUserById } = require('../../models/users');

const getUser = (req, res) => {
  selectUserById(req.params.id)
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((err) => {
      console.error(err.stack, 'Failed to get user');
      res.sendStatus(500);
    });
};

module.exports = getUser;
