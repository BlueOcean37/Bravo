const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { reviewsRouter, showsRouter, usersRouter } = require('./routes/index');

const app = express();
const port = 4000;

app.use(express.static('../client/public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('../client/public'));

app.use('/reviews', reviewsRouter);
app.use('/shows', showsRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
