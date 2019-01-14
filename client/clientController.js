const rp = require("request-promise");
const calculatorEndpointUrl = "http://localhost:3000/calculator/triangle-type";

exports.handleInput = (answers) => {
    console.log(answers);
};