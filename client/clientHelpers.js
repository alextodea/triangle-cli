// validation: check if input values are numbers
exports.checkIfObjValuesAreNumbers = (inputStringsObj) => {
    return new Promise((resolve,reject)=>{
        const valuesNotNumbersRejectionMsg = "At least of the input values is not a number. Please try again and make sure you add only numbers!";
        const inputStringsArray = Object.values(inputStringsObj);
        const inputIntegersArray = inputStringsArray.map(parseInteger);
        const arrayContainsNaN = inputIntegersArray.some(isNaN);

        if (arrayContainsNaN) {
            reject(valuesNotNumbersRejectionMsg)
        } else {
            resolve(inputIntegersArray);
        }
    });
};

parseInteger = (x => {
    return parseInt(x);
});

// func used in addition with sort for ascending sorting
const compareNumbers = (a, b) => {
    return a - b;
  };

// triangle inequality theorem in order to check if a triangle is valid based on input values
exports.checkTriangleInequality = (inputIntegersArray) => {
    const triangleNotValidRejectionMsg = "Based on the sides lengths provided, your triangle is invalid! Please try again and make you respect the inequality theorem."
    return new Promise((resolve,reject) => {
        const ascendingSortIntegersArray = inputIntegersArray.sort(compareNumbers);
        if ( (ascendingSortIntegersArray[0] + ascendingSortIntegersArray[1]) > ascendingSortIntegersArray[2] ) {
            resolve();
        } else {
            reject(triangleNotValidRejectionMsg)
        }
    });
};