const employee = require('./employee')
const Employee = require('./employee')
const mongoose = require('mongoose')


const createEmployee = async (req, res) =>{
    
    const {name, email,number, department, salary} = req.body

    try {
        const employee = await Employee.create({name, email, number, department, salary})
        res.status(200).json({success: true, message: employee})
    } catch (error) {
        console.log(err)
        res.status(500).json({success: false, message: err.message})
    }

}

const getAllEmployees = async (req, res) =>{

    try {
        const employees = await Employee.find({})
        res.status(200).json({success: true, message: employee})
    } catch (error) {
        console.log(err)
        res.status(500).json({success: false, message: err.message})
    }
} 

const deleteEmployee = async (req, res) =>{

    const {employeeId} = req.params

    if(!mongoose.Types.ObjectId.isValid(employeetId)){
        res.status(400).json({success: false, messsage: `Invalid ID: ${employeeId}`})
    }
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports={
    createEmployee,
    getAllEmployees,
    deleteEmployee
}