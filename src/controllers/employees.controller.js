const pool = require("../db");

const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (err) {
    res.status(500).send({ message: "Something goes wrong" });
  }
};
const getEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);

    if (rows.length == 0)
      return res.status(404).json({ message: "employee not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send({ message: "Something goes wrong" });
  }
};

const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee(name,salary) VALUES (?,?)",
      [name, salary]
    );

    res.json({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (err) {
    res.status(500).send({ message: "Something goes wrong" });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name=IFNULL(?,name), salary=IFNULL(?,salary) WHERE id=?",
      [name, salary, id]
    );
    if (result.affectedRows == 0)
      return res.json({ message: "employe not found" });

    const [row] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);
    res.json(row[0]);
  } catch (err) {
    res.status(500).send({ message: "Something goes wrong" });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE  FROM employee WHERE id=?", [id]);
    if (result.affectedRows == 0)
      return res.json({ message: "employe not found" });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send({ message: "Something goes wrong" });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
