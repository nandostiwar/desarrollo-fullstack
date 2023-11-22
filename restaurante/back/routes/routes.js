const express = require('express');
const router = express.Router();
const resControllers = require('../controllers/controllers.js');

router
    .get('/users',resControllers.getAllUsers)
    .post('/validation/:username',resControllers.getOneUsers)
    .post('/createSell', resControllers.createSell)
    .post('/crearUsuario', resControllers.createUser)
    .post('/crearProducto', resControllers.createProduct)
    .get('/sells', resControllers.getAllSells)
    .get('/products', resControllers.getAllProduct)
    .post('/gasto', resControllers.getAllGasto)
    .post('/crearGasto', resControllers.createGasto);

module.exports=router;