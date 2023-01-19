const express = require("express");
const employeesRoutes = require("./routes/employess.routes");
const homeRoutes = require("./routes/home.routes");

const app = express();

app.use(express.json());


app.use(employeesRoutes);
app.use(homeRoutes);

app.listen(4300, () => {
  console.log("se inicio el server en el puerto", 4300);
});
