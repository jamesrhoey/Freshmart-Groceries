const express = require('express')
const router = express.Router()

const {
    createEmployee,
    getAllEmployees,
    DeleteEmployee
} = require('./controller')

router.post('/add', createEmployee)
router.get('/', getAllEmployees)
router.delete('/delete/:employeeId', DeleteEmployee);

module.exports = router