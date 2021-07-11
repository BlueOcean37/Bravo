const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
