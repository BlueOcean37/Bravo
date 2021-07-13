const usersRouter = require("express").Router();
const { addUser, getUser } = require("../controllers/users");

usersRouter.get("/:id", getUser);
usersRouter.post("/", addUser);

module.exports = usersRouter;
