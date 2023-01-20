const express = require("express");
const { getPing } = require("../controllers/home.controller");

const router = express.Router();


router.get("/ping", getPing);

module.exports = router;
