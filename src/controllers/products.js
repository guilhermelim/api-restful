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

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        product,
    })

    // retorna o produto em json antes de atualizar
    // const product = await ProductsModel.findOne({ _id: id })
    // await product.updateOne(req.body)
    // console.log(req.body)

    // res.send({
    //     message: 'success',
    //     product,
    // })

}

async function remove(req, res) {
    const { id } = req.params

    const product = await ProductsModel.deleteOne({ _id: id })

    let message = product.deletedCount !== 0 ? 'success' : 'error'

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}