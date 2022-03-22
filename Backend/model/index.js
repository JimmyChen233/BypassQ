require('dotenv').config();
const mongoose = require('mongoose');

//database connection
mongoose
  .connect(process.env.PROD_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log('database connected'))
  .catch((err) => console.log('oops, connection error', err));

//exports model
module.exports = {
  User: mongoose.model('User', require('./user')),
  Dish: mongoose.model('Dish', require('./dish')),
  Order: mongoose.model("Order", require('./order')),
};
