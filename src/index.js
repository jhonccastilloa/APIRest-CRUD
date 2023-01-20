const express = require("express");
const { PORT } = require("./config");
const employeesRoutes = require("./routes/employess.routes");
const homeRoutes = require("./routes/home.routes");
require("./config")

const app = express();

app.use(express.json());

app.use("/employees",employeesRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log("se inicio el server en el puerto", PORT);
});
