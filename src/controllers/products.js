const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    
    const findById = id ? { _id: id } : null
    const products = await ProductsModel.find(findById)
    
    res.send(products)
}

module.exports = {
    get,

}