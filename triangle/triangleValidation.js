const Triangle = require("./Triangle");

exports.getTypeOfTriangle = (sidesLengthsArray) => {
    return new Promise((resolve)=> {
        const triangle = new Triangle(sidesLengthsArray);
        const equilateral = triangle.isEquilateral();
        const isosceles = triangle.isIsosceles();

        if (equilateral) {
            resolve("Equilateral")
        } else if (isosceles) {
            resolve("Isosceles")
        } else {
            resolve("Scalene")
        }
        
    });
};