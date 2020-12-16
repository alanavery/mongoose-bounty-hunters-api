const express = require('express');
const app = express();
require('dotenv').config();

const models = require('./models');

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello.');
});

app.use('/bounties', require('./controllers/bountiesController'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is up and running on PORT ${PORT}`);
});
