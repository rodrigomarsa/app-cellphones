const express = require('express');

const { createUser } = require('../controllers/userController');

const registerRouter = express.Router();

registerRouter.post('/', createUser);

module.exports = registerRouter;
