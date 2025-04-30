const foodService = require('../services/foodService');

exports.getAllFoods = (req, res) => {
    try {
        const foods = foodService.getAllFoods();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFoodById = (req, res) => {
    try {
        const food = foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createFood = (req, res) => {
    try {
        const newFood = foodService.createFood(req.body);
        res.status(201).json(newFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateFood = (req, res) => {
    try {
        const updatedFood = foodService.updateFood(req.params.id, req.body);
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.patchFood = (req, res) => {
    try {
        const patchedFood = foodService.patchFood(req.params.id, req.body);
        if (!patchedFood) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json(patchedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};