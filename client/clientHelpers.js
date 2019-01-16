// validation: check if input values are numbers
exports.checkIfObjValuesAreNumbers = (obj) => {
    return new Promise((resolve,reject)=>{
        const valuesArr = Object.values(obj);
        const intValuesArr = valuesArr.map(parseArrToInt);
        const containsNaN = intValuesArr.some(isNaN);

        if (containsNaN) {
            reject("At least of the input values is not a number. Please try again and make sure you add only numbers!")
        } else {
            resolve(intValuesArr);
        }
    });
};

parseArrToInt = (x => {
    return parseInt(x);
});

// func used in addition with sort for ascending sorting
const compareNumbers = (a, b) => {
    return a - b;
  }

// triangle inequality theorem in order to check if a triangle is valid based on input values
exports.checkTriangleInequality = (numbersArr) => {
    return new Promise((resolve,reject) => {
        const sortedNumbersArr = numbersArr.sort(compareNumbers);
        if ( (sortedNumbersArr[0] + sortedNumbersArr[1]) > sortedNumbersArr[2] ) {
            resolve();
        } else {
            reject("The triangle is not valid! Make sure that the sum of the two smallest sides is bigger than the remaining one!")
        }
    });
};