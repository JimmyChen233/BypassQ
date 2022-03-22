const express = require('express');

const { newOrder, myOrders, getAllOrders, allOrder } = require('../controller/orderController');
const router = express.Router();

// router.use(authHandler)

router.post('/order/new', newOrder);
router.get('/orders/me/:userId', myOrders);
router.get('/admin/orders', getAllOrders);
router.get('/admin/allOrders', allOrder);

module.exports = router;
