const pool = require("../db");

const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};
const getEmployee = async (req, res) => {
  const { id } = req.params;

  const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);
  res.json(rows);
};

const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee(name,salary) VALUES (?,?)",
    [name, salary]
  );
  res.json({
    id: rows.insertId,
    name,
    salary,
  });
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  console.log(id, name, salary);
  const result = await pool.query("UPDATE employee SET name=?, salary=? WHERE id=?", [name,salary,id]);
  console.log(result)
  res.send("editando empleados");
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("DELETE  FROM employee WHERE id=?", [id]);
  console.log(result.affectedRows);
  // res.json(result)
  if (result.affectedRows <= 0)
    return res.json({ message: "employe not found" });
  res.sendStatus(204);
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
