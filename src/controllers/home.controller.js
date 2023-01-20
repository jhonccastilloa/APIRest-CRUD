const pool = require("../db");


const getPing = async (req, res) => {
  const employee = await pool.query("SELECT * FROM employee ");
  res.json(employee[0]);
};

module.exports={
  getPing
}