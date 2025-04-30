const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/', foodController.getAllFoods);
router.get('/:id', foodController.getFoodById);
router.post('/', foodController.createFood);
router.put('/:id', foodController.updateFood);
router.patch('/:id', foodController.patchFood);

module.exports = router;