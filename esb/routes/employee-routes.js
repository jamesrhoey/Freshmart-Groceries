const express = require('express');
const router = express.Router();
const { addEmployee, fetchEmployees, deleteEmployee, updateEmployee } = require('../controllers/employee-controller');

// ✅ Fix Route Paths
router.post('/', addEmployee);  // Instead of '/new'
router.get('/all', fetchEmployees);
router.delete('/:id', deleteEmployee);  // Instead of '/delete/:id'
router.put('/:id', updateEmployee);  // Ensure update works

module.exports = router;

