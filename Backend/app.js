const express = require('express');
const cors = require('cors');
const errorhandler = require('./middleware/errorHandler');
const userRoutes = require('./router/user');
const dishRoutes = require('./router/dish');
const bodyParser = require('body-parser');
const orderRoutes = require('./router/order');

const app = express();

require('./model/index');

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

//routes
app.use(userRoutes);
app.use(dishRoutes);
app.use('/api/v1', orderRoutes);

app.get('/api/health', (req, res) => {
  res.send('API is healthy');
});

//handle 404 error middleware
app.use((req, res, next) => {
  res.status(404).send('404 not found');
});

//handle 500 internal error middleware
app.use(errorhandler());

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
