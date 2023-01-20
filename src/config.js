require("dotenv").config();

const PORT = process.env.PORT || 3900;
const DB_USER = process.env.DB_USER || "root";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DATABASE = process.env.DB_DATABASE || "companydb";

module.exports = {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
};
