const express = require("express");
const { getEmployees,createEmployee,deleteEmployee,updateEmployee, getEmployee } = require("../controllers/employees.controller");

const router = express.Router();


router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

router.put("/employees/:id",updateEmployee );

router.delete("/employees/:id", deleteEmployee);
module.exports = router;
