let productos = require('../../data/productos.json')
const controllers = {}

const getAllProductos = (req, res) => {
    res.status(200).json(productos)
}
controllers.getAllProductos = getAllProductos

const createProducto = (req, res) => {
    const { nombre, precio } = req.body
    const ids = productos.map(producto => producto.id)
    const id = Math.max(...ids) + 1
    const producto = {
        id,
        nombre,
        precio
    }
    productos.push(producto)
    res.status(201).json(producto)
}
controllers.createProducto = createProducto

module.exports = controllers
