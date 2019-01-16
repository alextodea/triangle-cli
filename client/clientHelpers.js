// validation: check if input values are numbers
exports.checkIfObjValuesAreNumbers = (obj) => {
    return new Promise((resolve,reject)=>{
        const arrOfValues = Object.values(obj);
        const containsNaN = arrOfValues.some(isNotANumber);
        if (containsNaN) {
            reject("At least of the input values is not a number. Please try again and make sure you add only numbers!")
        } else {
            resolve(arrOfValues);
        }
    });
};

// use custom isNaN function because default one treats empty string as nr.
const isNotANumber = (n) => {
    return isNaN(parseFloat(n));
};

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