const express = require("express");
const router = express.Router();
const {processTypeOfTriangle} = require("./triangleController");

router.post("/triangle-type", processTypeOfTriangle);

module.exports = router;