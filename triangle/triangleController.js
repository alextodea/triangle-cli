const {getTypeOfTriangle} = require("./triangleValidation");

exports.processTypeOfTriangle = async (req,res) => {
    const triangleType = await getTypeOfTriangle(req.body);
    res.status(200).json({message:"The triangle is "+triangleType});
};