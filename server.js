const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

const loginRouter = require('./backend/routes/login');
const clientRouter = require('./backend/routes/clients');
const articleRouter = require('./backend/routes/articles');
const storageRouter = require('./backend/routes/storages');
const articleStockRouter = require('./backend/routes/articleStock');

app.use('/api/articles', articleRouter);
app.use('/api/clients', clientRouter);
app.use('/api/login', loginRouter);
app.use('/api/storages', storageRouter);
app.use('/api/articleStock', articleStockRouter);

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
