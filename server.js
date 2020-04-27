const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const loginRouter = require('./backend/routes/login');
const getDataRouter = require('./backend/routes/getdata');

app.use('/get', getDataRouter);
app.use('/login', loginRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
  console.log('Connected');
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
