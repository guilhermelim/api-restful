const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const findById = id ? { _id: id } : null
    const products = await ProductsModel.find(findById)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success'
    })
}

module.exports = {
    get,
    post,
}