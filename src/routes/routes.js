/**                      VERBOS HTTP (4 TIPOS)
 *  GET      - Obter dados
 *  POST     - Enviar/Receber dados
 *             -> Do ponto de vista do client ele envia dados
 *             -> Do ponto de vista do Servidor ele recebe dados
 * PUT      - Atualizar dados
 * DELETE   - Remover dados
*/

const router = require('express').Router()

const ProductsController = require('../controllers/products')

router.get('/products/:id?', ProductsController.get)
// router.post('/products', ProductsController.post)
// router.put('/products/:id', ProductsController.put)
// router.delete('/products/:id', ProductsController.delete)

module.exports = router