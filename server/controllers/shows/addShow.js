const { insertShow } = require('../../models/shows');

const addShow = (req, res) => {
  const showData = [
    req.body.user_id,
    req.body.title,
    req.body.street,
    req.body.city,
    req.body.zip,
    req.body.state,
    req.body.date,
    req.body.website,
    req.body.description,
    req.body.photo,
  ];

  insertShow(showData)
    .then((result) => res.status(201).send(result.rows[0]))
    .catch((err) => {
      console.error('error adding a show to db', err.stack);
      res.sendStatus(500);
    });
};

module.exports = addShow;
