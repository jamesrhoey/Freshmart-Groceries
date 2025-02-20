const express = require('express')
const router = express.Router()


const {
    createEmployee,
    getAllEmployees
} = require('../controllers/employee-controller')



router.post('/new', createEmployee)
router.get('/all', getAllEmployees)

module.exports = router