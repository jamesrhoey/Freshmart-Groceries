require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const employeeRoutes = require('./route')

// Init app
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to database and listening on port ${process.env.PORT}`)
        })
    })
    .catch(error => {
        console.error("Database connection error:", error)
    })

app.use('/employee', employeeRoutes)
