const express = require("express");
const router = express.Router();
const {calculateTriangleType} = require("./calculatorController");

router.post("/triangle-type", calculateTriangleType);

module.exports = router;