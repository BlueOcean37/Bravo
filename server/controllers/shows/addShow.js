// POST add a show controller
const pool = require("../../db/index");

const addShow = (req, res) => {
  console.log(req.body);
  const {
    title,
    street,
    city,
    zip,
    state,
    website,
    description,
    photo,
    user_id,
    date,
  } = req.body;

  const queryString = `
  INSERT INTO shows
  (user_id, title, street, city,
  zip, state, date, website,
  description, photo)
  VALUES (
  ${user_id}, '${title}', '${street}', '${city}',
  '${zip}','${state}', '${date}', '${website}',
  '${description}', '${photo}'
  )
  RETURNING id;`;

  pool
    .query(queryString)
    .then((result) => res.status(201).send(result.rows[0]))
    .catch((err) => {
      console.error("error adding a show to db", err.stack);
      res.sendStatus(500);
    });
};

module.exports = addShow;
