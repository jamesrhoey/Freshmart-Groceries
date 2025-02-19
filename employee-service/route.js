const express = require('express')
const router = express.Router()

const {
    createEmployee,
    getAllEmployees,
    deleteEmployee
} = require('./controller')

router.post('/add', createEmployee)
router.get('/', getAllEmployees)
router.delete('/:id', deleteEmployee);

module.exports = router