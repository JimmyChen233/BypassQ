const { Dish } = require('../model');
const isEmpty = require('lodash/isEmpty');
const ObjectId = require('mongodb').ObjectId;
const { uploadImg } = require('../lib/s3');

exports.allDish = async (req, res, next) => {
  try {
    const result = await Dish.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.addDishes = async (req, res, next) => {
  const { categories, name, price } = req.body;

  try {
    const { Location } = await uploadImg(req.file);
    const dishes = { name, url: Location, price };
    await Dish.updateOne({ categories }, { $addToSet: { dishes } });
    const result = await Dish.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateDishes = async (req, res, next) => {
  const { _id, price, name, dishImg } = req.body;
  let uploadResult = '';
  try {
    if (req.file) {
      uploadResult = await uploadImg(req.file);
    }
    await Dish.updateOne(
      { 'dishes._id': ObjectId(_id) },
      {
        $set: {
          'dishes.$.name': name,
          'dishes.$.url': dishImg || uploadResult.Location,
          'dishes.$.price': Number(price),
        },
      },
    );
    const result = await Dish.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteDishes = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Dish.updateMany({}, { $pull: { dishes: { _id: ObjectId(id) } } });
    const result = await Dish.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.addCategories = async (req, res, next) => {
  const { category } = req.body;
  try {
    const result = await Dish.find({ categories: category });
    if (isEmpty(result)) {
      await Dish.create({ categories: category, dishes: [] });
      const result = await Dish.find();
      res.status(200).json(result);
      return;
    }
    res.status(400).json('category already exists');
  } catch (err) {
    next(err);
  }
};

exports.deleteCategories = async (req, res, next) => {
  const { categories } = req.params;
  try {
    await Dish.remove({ categories: categories });
    const result = await Dish.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
