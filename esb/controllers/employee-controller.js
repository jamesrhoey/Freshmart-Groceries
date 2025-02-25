const axios = require('axios');

const EMPLOYEE_SERVICE = process.env.EMPLOYEE_SERVICE; // Ensure this is set correctly (e.g., http://127.0.0.1:8080)

// ✅ Fetch Employees
const fetchEmployees = async (req, res) => {
    try {
        const response = await axios.get(`${EMPLOYEE_SERVICE}/employees`);

        res.status(200).json({
            status: "success",
            data: response.data
        });
    } catch (error) {
        console.error("Error in fetchEmployees:", error.response?.data || error.message);
        res.status(500).json({
            status: "error",
            message: error.response?.data?.message || "Failed to fetch employees"
        });
    }
};

// ✅ Add Employee
const addEmployee = async (req, res) => {
    try {
        console.log("Adding Employee:", req.body);

        const response = await axios.post(
            `${EMPLOYEE_SERVICE}/employees`,  // ✅ Ensure it matches PHP service route
            req.body,
            { headers: { 'Content-Type': 'application/json' } }
        );

        res.status(201).json({
            status: "success",
            message: "Employee added successfully",
            data: response.data
        });
    } catch (error) {
        console.error("Error in addEmployee:", error.response?.data || error.message);
        res.status(500).json({
            status: "error",
            message: error.response?.data?.message || "Failed to add employee"
        });
    }
};

// ✅ Update Employee
const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Updating Employee ID: ${id}`, req.body);

        const response = await axios.put(
            `${EMPLOYEE_SERVICE}/employees/${id}`,  // ✅ Match PHP service route
            req.body,
            { headers: { 'Content-Type': 'application/json' } }
        );

        res.status(200).json({
            status: "success",
            message: "Employee updated successfully",
            data: response.data
        });
    } catch (error) {
        console.error("Error in updateEmployee:", error.response?.data || error.message);
        res.status(500).json({
            status: "error",
            message: error.response?.data?.message || "Failed to update employee"
        });
    }
};

// ✅ Delete Employee
const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Deleting Employee ID: ${id}`);

        const response = await axios.delete(`${EMPLOYEE_SERVICE}/employees/${id}`);

        res.status(200).json({
            status: "success",
            message: "Employee deleted successfully",
            data: response.data
        });
    } catch (error) {
        console.error("Error in deleteEmployee:", error.response?.data || error.message);
        res.status(500).json({
            status: "error",
            message: error.response?.data?.message || "Failed to delete employee"
        });
    }
};

module.exports = {
    fetchEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
};

