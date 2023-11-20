const express = require('express');
const router = express.Router();
const productos = require('../controllers/productos');

router.get('/products', productos.getAllProduct);
router.post('/createProducto', productos.createProducto);
router.delete('/products/:id', productos.deleteProduct);
router.put('/editarProducto/:id', productos.editProduct);

module.exports = router;