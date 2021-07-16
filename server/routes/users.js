const usersRouter = require('express').Router();
const { addUser, getUser, getUserByEmail } = require('../controllers/users');

usersRouter.get('/:id', getUser);
usersRouter.post('/', addUser);
usersRouter.put('/', getUserByEmail);

module.exports = usersRouter;
