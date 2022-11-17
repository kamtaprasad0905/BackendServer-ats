const express = require("express");
const {
  addEmployee,
  editEmployeeById,
  deleteEmployeeById,
  getEmployees,
  getEmployeeById,
} = require("../controller/user-controller");

const router = express.Router();

router.post("/add_employee", addEmployee);
router.get("/all_employee", getEmployees);
router.get("/employee/:id", getEmployeeById);
router.put("/employee/edit/:id", editEmployeeById);
router.delete("/employee/:id", deleteEmployeeById);
module.exports = router;
