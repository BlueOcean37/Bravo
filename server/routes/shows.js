const showsRouter = require("express").Router();
const { getAllShows, getShow, addShow } = require("../controllers/shows");

showsRouter.get("/", getAllShows);

showsRouter.get("/:id", getShow);

showsRouter.post("/", addShow);

module.exports = showsRouter;
