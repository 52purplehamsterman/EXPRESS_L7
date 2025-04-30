require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const foodRoutes = require('./src/routes/foodRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());
app.use('/api/v1/foods', foodRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});