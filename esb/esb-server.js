require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ Import CORS

// Init App
const app = express();

// ✅ Enable CORS
app.use(cors());

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use((req, res, next) => {
    console.log(req.method, req.path, "Request Body:", req.body);
    next();
});

// Request Mapper
const mapper = '/api/v1';

// Import Routes
const productServices = require('./routes/inventory-route');
const posServices = require('./routes/pos-routes');
const authService = require('./routes/auth-routes');
const employeeService = require('./routes/employee-routes');

// Service Routes
app.use(`${mapper}/inventory`, productServices);
app.use(`${mapper}/pos`, posServices);
app.use(`${mapper}/auth`, authService);
app.use(`${mapper}/employees`, employeeService);

// If no request matches
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// Start Server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
