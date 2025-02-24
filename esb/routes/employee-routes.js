const express = require('express');
const router = express.Router();


const { addEmployee, fetchEmployees, deleteEmployee } = require('../controllers/employee-controller');


router.post('/new', addEmployee);
router.get('/all', fetchEmployees);
router.delete('/:id', deleteEmployee);

module.exports = router;
