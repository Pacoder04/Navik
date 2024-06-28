const express = require('express');
const app = express();
const apiRouter = require('./api');
const config = require('./config.js');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api', apiRouter);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});