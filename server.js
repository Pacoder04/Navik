const express = require('express');
const app = express();
const apiRouter = require('./api');
const config = require('./config.js'); // Add this line

app.use('/api', apiRouter);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});