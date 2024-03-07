const { UserService } = require('../services');
const { mapError } = require('../utils/mapError');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await UserService.createUser({
    email,
    password,
  });

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await UserService.getByUserId(id);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  createUser,
  getByUserId,
};
