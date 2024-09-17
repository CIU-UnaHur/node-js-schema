const { Router } = require('express')
const productosControllers = require('../controllers/productos.controllers')
const validador = require('../middleware/validador')
const route = Router()

route.get('/productos', productosControllers.getAllProductos)

route.post('/productos', validador, productosControllers.createProducto)

module.exports = route




