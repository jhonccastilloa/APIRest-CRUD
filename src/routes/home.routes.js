const express = require("express");

const router = express.Router();

router.get("/employees", (req, res) => {
  res.send("consultqando empleados");
});

router.post("/employees", (req, res) => {
  res.send("agregando empleados");
});

router.put("/employees", (req, res) => {
  res.send("editando empleados");
});

router.delete("/employees", (req, res) => {
  res.send("Eliminando empleados");
});

module.exports = router;
