const serverUrl = "http://localhost:3000/calculator/triangle-type";
const {checkIfObjValuesAreNumbers,checkTriangleInequality,postDetails} = require("./clientHelpers");
const rp = require("request-promise");

exports.handleInput = async (answersObj) => {
        try {
            
            // Validation:
            // 1. Check if input values format is correct
            // 2. Check if triangle is valid based on triangle ineq. theorem
            const inputNumbers = await checkIfObjValuesAreNumbers(answersObj);
            await checkTriangleInequality(inputNumbers);
            
            // post options
            const options = {
                method: 'POST',
                uri:serverUrl,
                body:inputNumbers,
                json: true
            };
            
            // send post with input values and handle response from "backend"
            await rp(options);

        } catch (err) {
            console.error(err);
            process.exit();
        }
};