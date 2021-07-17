const { insertUser } = require('../../models/users');

const addUser = (req, res) => {
  const userData = [
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.first_name,
    req.body.last_name,
    req.body.photo,
  ];

  insertUser(userData)
    .then((result) => res.sendStatus(201))
    .catch((err) => {
      console.error('error adding a user', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addUser;
