const express = require('express');
const cors = require('cors');
const registerRouter = require('../routes/register.route');
const loginRouter = require('../routes/login.route');
const productRouter = require('../routes/product.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);

module.exports = app;
