const employee = require('./employee')
const Employee = require('./employee')
const mongoose = require('mongoose')


const createEmployee = async (req, res) =>{
    
    const {name, email,number, department, salary} = req.body

    try {
        const employee = await Employee.create({name, email, number, department, salary})
        res.status(200).json({success: true, message: employee})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message})
    }

}

const getAllEmployees = async (req, res) =>{

    try {
        const employee = await Employee.find({})
        res.status(200).json({success: true, message: employee})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message})
    }
} 

const DeleteEmployee = async (req, res) => {
    const { employeeId } = req.params;
    try {
        const employee = await Employee.findOneAndDelete({ _id: employeeId });
        res.status(200).json({ success: true, message: employee });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports={
    createEmployee,
    getAllEmployees,
    DeleteEmployee
}