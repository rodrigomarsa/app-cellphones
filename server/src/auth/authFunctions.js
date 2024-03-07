require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWT_CONFIG = {
  algorithm: 'HS256',
};

const createToken = (user) =>
  jwt.sign({ data: { userId: user.id } }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };
