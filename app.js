const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const calculatorRoutes = require("./calculator/calculatorRoutes");

// parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/calculator",calculatorRoutes);

module.exports = app;