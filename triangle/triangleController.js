const {getTypeOfTriangle} = require("./triangleValidation");

exports.processTypeOfTriangle = async (req,res) => {
    const triangle = await getTypeOfTriangle(req.body);
    console.log(triangle);
    res.status(200).json({message:"The triangle is "});
};