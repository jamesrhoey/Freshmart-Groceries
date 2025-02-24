const express = require('express');
const router = express.Router();

// Import employee controller functions
const { addEmployee, fetchEmployees, deleteEmployee } = require('../controllers/employee-controller');

// Define routes
router.post('/new', addEmployee);
router.get('/all', fetchEmployees);
router.delete('/:id', deleteEmployee);

module.exports = router;

