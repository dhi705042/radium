const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    var data= req.body
    let savedData= await productModel.create(data)
    res.send({msg: savedData})    
}



module.exports.createProduct = createProduct;