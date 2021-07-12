const showsRouter = require("express").Router();
const {
  getAllShows,
  getShow,
  addShow,
  addShowReview,
} = require("../controllers/shows");

showsRouter.get("/", getAllShows);

showsRouter.get("/:id", getShow);

showsRouter.post("/", addShow);

showsRouter.post("/:id/review", addShowReview);

module.exports = showsRouter;
