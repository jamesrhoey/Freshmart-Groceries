require('dotenv').config()

const express = require('express')

// Services
const productServices = require('./routes/inventory-route')
const posServices = require('./routes/pos-routes')
const authService = require('./routes/auth-routes')
const employeeService = require('./routes/employee-routes') // ADD THIS

// Request Mapper
const mapper = '/api/v1'

// Init App
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})

// Service Routes
app.use(`${mapper}/inventory`, productServices)
app.use(`${mapper}/pos`, posServices)
app.use(`${mapper}/auth`, authService)
app.use(`${mapper}/employees`, employeeService) 

// If no request matches
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' })
})

