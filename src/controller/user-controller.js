const employee = require("../models/employeeSchema");
const addEmployee = async (req, res) => {
  const user = req.body;
  const newEmployee = new employee(user);
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getEmployees = async (req, res) => {
  try {
    const employees = await employee.find({});
    res.status(201).json(employees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    // const employeeById = await employee.find({ _id: req.params.id });
    const employeeById = await employee.findById(req.params.id);
    res.status(201).json(employeeById);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const editEmployeeById = async (req, res) => {
  const { first_name, last_name, email, designation, state, city } = req.body;

  try {
    await employee.updateOne({ _id: req.params.id }, { first_name, last_name, email, designation, state, city });
    res.status(201).json(req.body);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const deleteEmployeeById = async (req, res) => {
  const employeeData = req.body;
  const editEmployee = new employee(employeeData);
  try {
    await employee.deleteOne({ _id: req.params.id }, editEmployee);
    res.status(201).json(editEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = { addEmployee, getEmployees, deleteEmployeeById, getEmployeeById, editEmployeeById };
