const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected');
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
