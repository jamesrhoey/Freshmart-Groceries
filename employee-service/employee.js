const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }, 
    salary: {
        type: Number,
        required: true
    }

},{timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema)