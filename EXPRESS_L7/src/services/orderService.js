const { v4: uuidv4 } = require('uuid');
const { readData, writeData } = require('../db/db');

exports.getAllOrders = () => {
    const data = readData();
    return data.orders;
};

exports.getOrderById = (id) => {
    const data = readData();
    return data.orders.find(order => order.id === id);
};

exports.createOrder = (orderData) => {
    const data = readData();
    const newOrder = { id: uuidv4(), ...orderData };
    data.orders.push(newOrder);
    writeData(data);
    return newOrder;
};

exports.updateOrder = (id, updatedData) => {
    const data = readData();
    const orderIndex = data.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) return null;
    data.orders[orderIndex] = { ...data.orders[orderIndex], ...updatedData };
    writeData(data);
    return data.orders[orderIndex];
};

exports.patchOrder = (id, partialData) => {
    const data = readData();
    const orderIndex = data.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) return null;
    data.orders[orderIndex] = { ...data.orders[orderIndex], ...partialData };
    writeData(data);
    return data.orders[orderIndex];
};