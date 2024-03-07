const { User } = require('../database/models');
const { validateNewUser } = require('./validations/validateNewUser');

const createUser = async ({ email, password }) => {
  const error = await validateNewUser(email, password);
  if (error.type) return error;

  const newUser = await User.create({ email, password });

  return { type: null, message: newUser };
};

const getByEmail = async (email) => User.findOne({ where: { email } });

const getByUserId = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = {
  createUser,
  getByEmail,
  getByUserId,
};
