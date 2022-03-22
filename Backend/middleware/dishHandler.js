const isEmpty = require('lodash/isEmpty');

exports.isDishValueExist = function (req, res, next) {
  const { price, name, dishImg } = req.body;
  const { file } = req;

  if (price === 'NaN' || price === '0') {
    res.status(400).json('make sure price is filled with a number');
    return;
  }

  if (name === '' || name === 'undefined') {
    res.status(400).json('make sure name is filled');
    return;
  }

  if (isEmpty(file) && dishImg === 'undefined') {
    res.status(400).json('make sure image is uploaded');
    return;
  }
  next();
};

exports.isCategoryValueExist = function (req, res, next) {
  const { category } = req.body;

  if (isEmpty(category)) {
    res.status(400).json('make sure category is filled');
    return;
  }

  next();
};
