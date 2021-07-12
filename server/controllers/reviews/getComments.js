// get all comments of a review
const pool = require('../../db/index');

const getComments = (req, res) => {
  const getAllComments = `SELECT * from comments WHERE review_id = ${req.params.id} ORDER BY date DESC`;
  pool
    .query(getAllComments)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => {
      res.sendStatus(500);
    });
};

module.exports = getComments;
