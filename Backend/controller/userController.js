require('dotenv').config();
const { User } = require('../model');
const jwt = require('jsonwebtoken');

const EXPIRE_IN_10_HOURS = 10 * 60 * 60 * 1000

createAuthToken = (id) => {

  const currentTime = new Date().getTime()

  return jwt.sign({
    id,
    createdAt: currentTime,
  }, process.env.JWT_SECRET, {
    expiresIn: '10h'
  });
};

exports.register = async (req, res, next) => {
  const { userInfo } = req.body;
  try {
    const { _id } = await User.create({ ...userInfo });
    const token = createAuthToken(_id);
    res.status(201).json({
      _id,
      token,
    });
  } catch (err) {
    res.status(400).json('Make sure all the information is correct ');
  }
};

exports.login = async (req, res) => {
  const { userInfo } = req.body;

  try {
    const { firstname, lastname, _id, type } = await User.login({ ...userInfo });
    if (userInfo.type !== type) {
      return res.status(403).json('Access is not permitted');
    }
    const token = createAuthToken(_id);
    res.status(201).json({
      _id,
      firstname,
      lastname,
      token,
      type,
    });
  } catch (err) {
    res.status(400).json('Username or Password is incorrect');
  }
};

exports.me = async (req, res) => {
  const { authorization } = req.headers;
  try {
    const { id } = await jwt.verify(authorization, process.env.JWT_SECRET);
    const result = await User.findById(id);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json('Session expired');
  }
};

exports.getAllUser = async (req, res, next) => {
  const { users } = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};