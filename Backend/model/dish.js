const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  categories: {
    type: String,
    unique: true,
  },
  dishes: [{ name: String, url: String, price: Number }],
});

module.exports = dishSchema;
