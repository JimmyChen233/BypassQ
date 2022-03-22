const jwt = require('jsonwebtoken');
const { User } = require('../model')
const PREFIX = 'Bearer ';

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send();
  }

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (e) {
    res.status(401).json({
      error: 'User verify Error',
      message: e.message,
    });
  }
};



const verifyToken = async (rawToken) => {
  const token = rawToken.slice(PREFIX.length, token.length);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id)

  if (!user) {
    throw Error('user not found.')
  }

  return user;
}