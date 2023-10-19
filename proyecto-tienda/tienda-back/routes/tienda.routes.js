const express = require('express');
const router = express.Router();
const tiendaControllers = require('../controllers/tiendaControllers.js');

router
    .get('/usuarios', tiendaControllers.getAllUsers)
    .get('/productos', tiendaControllers.getAllProducts)
    .get('/ventas', tiendaControllers.getAllSales)
    .post('/validar/:username', tiendaControllers.validateUser)
    .post('/crear', tiendaControllers.createUser)
    .post('/crearProducto', tiendaControllers.createProduct)
    .post('/crearVenta', tiendaControllers.createSale)
    .delete('/borrarUsuario', tiendaControllers.deleteUser)
    .delete('/borrarProducto', tiendaControllers.deleteProduct)

module.exports = router;