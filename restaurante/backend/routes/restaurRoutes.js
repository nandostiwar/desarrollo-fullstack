// restaurRoutes.js
const express = require('express');
const router = express.Router();
const restaurController = require('../controllers/restaurController');

router.post('/validar/:username', restaurController.validateUser);
router.get('/users', restaurController.getAllUsers);
router.delete('/users/:username', restaurController.deleteUser);
router.post('/crearUsuario', restaurController.createUser);
router.post('/crearProducto', restaurController.createProduct);
router.post('/createSell', restaurController.createSell);
router.get('/products', restaurController.getAllProduct);
router.get('/sells', restaurController.getAllSells);
router.delete('/products/:productName', restaurController.deleteProduct);

module.exports = router;