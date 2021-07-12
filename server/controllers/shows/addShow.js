// POST add a show controller
const pool = require("../../db/index");

const addShow = (req, res) => {
  const {
    title,
    street,
    city,
    zip,
    state,
    cast,
    website,
    description,
    photo,
    user_id,
    date,
  } = req.body;

  const queryString = `
  INSERT INTO shows
  (user_id, title, street, city, zip, state, date, "cast", website, description, photo)
  VALUES (
  '${user_id}', '${title}', '${street}', '${city}',
  '${zip}','${state}', '${date}', '${cast}', '${website}',
  '${description}', '${photo}'
  )`;

  pool
    .query(queryString)
    .then((data) => res.send(201).json(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = addShow;
