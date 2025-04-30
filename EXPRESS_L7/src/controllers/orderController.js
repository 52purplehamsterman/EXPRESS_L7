const orderService = require('../services/orderService');

exports.getAllOrders = (req, res) => {
    try {
        const orders = orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrderById = (req, res) => {
    try {
        const order = orderService.getOrderById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createOrder = (req, res) => {
    try {
        const newOrder = orderService.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateOrder = (req, res) => {
    try {
        const updatedOrder = orderService.updateOrder(req.params.id, req.body);
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.patchOrder = (req, res) => {
    try {
        const patchedOrder = orderService.patchOrder(req.params.id, req.body);
        if (!patchedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(patchedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};