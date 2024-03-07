const { UserService } = require('../services');
const { verifyToken } = require('../auth/authFunctions');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded = verifyToken(token);

    const user = await UserService.getByUserId(decoded.data.userId);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'User not found or token expired' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
