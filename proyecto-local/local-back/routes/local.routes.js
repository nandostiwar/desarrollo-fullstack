const express = require('express');
const router = express.Router();
const localControllers = require('../controllers/localControllers.js');

router
    .get('/usuarios', localControllers.getAllUsuarios)
    .get('/productos', localControllers.getAllProductos)
    .get('/ventas', localControllers.getAllVentas)
    .post('/validar/:username', localControllers.validarUsuario)
    .post('/crear', localControllers.crearUsuario)
    .post('/crearProducto', localControllers.crearProducto)
    .post('/crearVenta', localControllers.crearVenta)
    .delete('/borrarUsuario', localControllers.eliminarUsuario)
    .delete('/borrarProducto', localControllers.eliminarProducto)

module.exports = router;