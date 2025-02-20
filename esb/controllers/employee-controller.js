const axios = require('axios')

const createEmployee = async(req, res) =>{
    try{
        const response = await axios.post(`${process.env.EMPLOYEE_SERVICE}/add`, req.body)
        res.status(201).json(response.data)
    }catch(error){
        res.status(500).json({success: false, message: error.message})
    }
}
const getAllEmployees = async(req, res) =>{
    try{
        const response = await axios.get(`${process.env.EMPLOYEE_SERVICE}/`)
        res.status(201).json(response.data)
    }catch(error){
        res.status(500).json({success: false, message: error.message})
    }
}

module.exports = {createEmployee, getAllEmployees}