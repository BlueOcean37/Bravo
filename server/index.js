const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
