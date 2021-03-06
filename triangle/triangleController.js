const {getTypeOfTriangle} = require("./triangleValidation");

exports.processTypeOfTriangle = async (req,res) => {
    const triangleType = await getTypeOfTriangle(req.body);
    
    const responseJson = {
        message: "The triangle is " + triangleType
    };

    res.status(200).json(responseJson);
};