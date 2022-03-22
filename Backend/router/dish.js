const express = require('express');
const multer = require('multer');
const uuid = require('uuid');
const DishController = require('../controller/dishController');
const { isDishValueExist, isCategoryValueExist } = require('../middleware/dishHandler');
const router = express.Router();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, uuid.v1() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get('/api/v1/dish', DishController.allDish);
router.post('/api/v1/dish', upload.single('dishImg'), isDishValueExist, DishController.addDishes);

router.patch(
  '/api/v1/dish',
  upload.single('dishImg'),
  isDishValueExist,
  DishController.updateDishes,
);

router.delete('/api/v1/dish/:id', DishController.deleteDishes);
router.post('/api/v1/dish/categories', isCategoryValueExist, DishController.addCategories);
router.delete('/api/v1/dish/categories/:categories', DishController.deleteCategories);

module.exports = router;
