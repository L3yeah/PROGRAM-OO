const employeeModel = require("../models/employees")

const getEmployees = (req, res) => {
    return res.status(200).json(employeeModel.employees)
}

const createEmployees = (req, res) => {
    const newEmployee = req.body;
    const addedEmployee = employeeModel.employees.push(newEmployee);
    return res.status(200).json(addedEmployee)
}

const getEmployeesById = (req, res) => {
    const {id} = req.params;
    const employeeById = employeeModel.employees.filter(employee => (
        employee.id == id
    ))
    return res.status(200).json(employeeById)
}

const delEmployees = (req, res) => {
    const {id} = req.params;
    const employeeById = employeeModel.employees.filter(employee => (
        employee.id != id
    ))
    return res.status(200).json(employeeById)
}

module.exports = {
    getEmployees,
    createEmployees,
    getEmployeesById,
    delEmployees
};