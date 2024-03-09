const express = require('express');
const cors = require('cors');
const registerRouter = require('../routes/register.route');
const loginRouter = require('../routes/login.route');
const productRouter = require('../routes/product.route');

const app = express();

app.use(express.json());
// app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  app.use(cors());
  next();
});

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);

module.exports = app;
