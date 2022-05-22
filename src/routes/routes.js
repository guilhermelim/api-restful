/**
 *                     VERBOS HTTP (4 TIPOS)
 * +---------+-------------------------------------------------+
 * | Métodos | Descrição                                       |
 * +---------+-------------------------------------------------+
 * | GET     | Para realizar requisição de dados ao servidor.  |
 * +---------+-------------------------------------------------+
 * | POST    | Para fazer a inclusão de dados no servidor.     |
 * +---------+-------------------------------------------------+
 * | PUT     | Para atualizar dados no servidor.               |
 * +---------+-------------------------------------------------+
 * | DELETE  | Para excluir dados no servidor.                 |
 * +---------+-------------------------------------------------+
 */

const router = require('express').Router()

const ProductsController = require('../controllers/products')

router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)

module.exports = router