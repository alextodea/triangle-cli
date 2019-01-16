const Triangle = require("./Triangle");

exports.getTypeOfTriangle = (obj) => {
    return new Promise((resolve,reject)=> {
        const triangle = new Triangle(obj);
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