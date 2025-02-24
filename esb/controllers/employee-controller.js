const axios = require('axios');

const addEmployee = async (req, res) => {
    try {
        const response = await axios.post(`${process.env.EMPLOYEE_SERVICE_URL}/employees`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const fetchEmployees = async (req, res) => {
    try {
        const response = await axios.get(`${process.env.EMPLOYEE_SERVICE_URL}/employees`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const response = await axios.delete(`${process.env.EMPLOYEE_SERVICE_URL}/employees/${req.params.id}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Export all functions
module.exports = { addEmployee, fetchEmployees, deleteEmployee };

