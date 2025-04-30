const { v4: uuidv4 } = require('uuid');
const { readData, writeData } = require('../db/db');

exports.getAllFoods = () => {
    const data = readData();
    return data.foods;
};

exports.getFoodById = (id) => {
    const data = readData();
    return data.foods.find(food => food.id === id);
};

exports.createFood = (foodData) => {
    const data = readData();
    const newFood = { id: uuidv4(), ...foodData };
    data.foods.push(newFood);
    writeData(data);
    return newFood;
};

exports.updateFood = (id, updatedData) => {
    const data = readData();
    const foodIndex = data.foods.findIndex(food => food.id === id);
    if (foodIndex === -1) return null;
    data.foods[foodIndex] = { ...data.foods[foodIndex], ...updatedData };
    writeData(data);
    return data.foods[foodIndex];
};

exports.patchFood = (id, partialData) => {
    const data = readData();
    const foodIndex = data.foods.findIndex(food => food.id === id);
    if (foodIndex === -1) return null;
    data.foods[foodIndex] = { ...data.foods[foodIndex], ...partialData };
    writeData(data);
    return data.foods[foodIndex];
};