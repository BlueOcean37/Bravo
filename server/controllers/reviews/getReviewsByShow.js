// GET reviews By showID controller
const { selectReviewsByShow } = require("../../models/reviews");

const getReviewsByShow = (req, res) => {
  selectReviewsByShow(req.params.id)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => {
      console.error("error getting all reviews for a single show", err.stack);
      res.sendStatus(500);
    });
};

module.exports = getReviewsByShow;
