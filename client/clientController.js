const serverUrl = "http://localhost:3000/calculator/triangle-type";
const {checkIfObjValuesAreNumbers,checkTriangleInequality,postDetails} = require("./clientHelpers");
const rp = require("request-promise");

exports.handleInput = async (inputStringsObj) => {
        try {       
            // Check if input values format is correct
            const inputIntegersArray = await checkIfObjValuesAreNumbers(inputStringsObj);
           
            // Check if triangle is valid based on triangle inequality theorem
            await checkTriangleInequality(inputIntegersArray);
            
            // post options
            const options = {
                method: 'POST',
                uri:serverUrl,
                body:inputIntegersArray,
                json: true
            };
            
            // send post with input values and handle response from "backend"
            rp(options).then(incomingResponse => {
                console.log(incomingResponse.message);
                process.exit();
            });

        } catch (err) {
            console.error(err);
            process.exit();
        }
};