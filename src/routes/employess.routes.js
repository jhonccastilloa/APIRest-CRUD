const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get("/ping", async (req, res) => {
  const employee = await pool.query("SELECT * FROM employee ");
  res.json(employee[0]);
});

module.exports = router;
