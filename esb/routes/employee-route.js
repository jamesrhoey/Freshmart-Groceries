const express = require('express');
const router = express.Router();

const { addEmployee, fetchEmployees, deleteEmployee, updateEmployee } = require('../controllers/employeeController');

// Define routes
router.post('/add', addEmployee);  // Matches frontend POST /api/v1/employees/add
router.get('/all', fetchEmployees); // Matches frontend GET /api/v1/employees/all
router.put('/update/:id', updateEmployee); // Update an employee
router.delete('/delete/:id', deleteEmployee); // Matches frontend DELETE /api/v1/employees/delete/:id

// Fix incorrect export statement
module.exports = router;

