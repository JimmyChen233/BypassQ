const { findTopThree } = require('../lib/helper');
const ObjectId = require('mongodb').ObjectId;
const { Order, Dish, User } = require('../model');

exports.newOrder = async (req, res, next) => {
  const { orderItems, totalPrice } = req.body;

  const order = await Order.create({
    orderItems,
    totalPrice,
    paidAt: Date.now(),
    user: req.user.id,
  });

  res.status(201).json({
    success: true,
    order,
  });
};

exports.myOrders = async (req, res, next) => {
  const { userId } = req.params;

  const result = await Order.find({
    userId,
  });

  res.status(200).json({
    result,
  });
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  let totalAmount = 0;
  const dishesArray = [];
  const topDishes = [];

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
    dishesArray.push(...order.cartItems.map((item) => item.name));
  });

  await Promise.all(
    findTopThree(dishesArray).map(async (dish) => {
      const result = await Dish.findOne(
        { 'dishes.name': dish.key },
        { categories: 1, 'dishes.$': 1 },
      );

      if (result) {
        topDishes.push(result.dishes[0]);
      }
    }),
  );

  res.status(200).json({
    totalAmount,
    topDishes,
    orders,
  });
};

exports.allOrder = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json({
    orders,
  });
};
