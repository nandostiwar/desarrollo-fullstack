const express = require('express');
const router = express.Router();
const resControllers = require('../controllers/controllers.js');

router
    .get('/usuarios',resControllers.getAllUsuarios)
    .post('/validation/:usuarioname',resControllers.getOneUsuarios)
    .post('/createVenta', resControllers.createVenta)
    .post('/crearUsuario', resControllers.createUsuario)
    .post('/crearProducto', resControllers.createProducto)
    .get('/ventas', resControllers.getAllVentas)
    .get('/productos', resControllers.getAllProducto)
    .post('/saldo', resControllers.getAllSaldo)
    .post('/crearSaldo', resControllers.createSaldo);

module.exports=router;