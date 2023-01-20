const express = require("express");
const { getEmployees,createEmployee,deleteEmployee,updateEmployee, getEmployee } = require("../controllers/employees.controller");

const router = express.Router();


router.get("/", getEmployees);
router.get("/:id", getEmployee);

router.post("/", createEmployee);

router.patch("/:id",updateEmployee );

router.delete("/:id", deleteEmployee);
module.exports = router;

