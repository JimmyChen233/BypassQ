const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cartItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      dish: {
        type: mongoose.Schema.ObjectId,
        ref: 'Dish',
        required: true,
      },
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  billingId: {
    type: String,
    require: true,
  },
  paymentStatus: {
    type: String,
    default: 'Successfully',
    required: true,
  },
  payAt: {
    type: String,
  },

  userId: {
    type: String,
  },
});
module.exports = orderSchema;
