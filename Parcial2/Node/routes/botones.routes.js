const express = require('express');
const router = express.Router();
const botonControllers = require('./controllers/botonControllers.js');

// Rutas  GET para obtener datos
router.get('/datos', botonControllers.obtenerDatos);
router.get('/obtener-usuarios', botonControllers.obtenerUsuarios);
router.get('/obtener-productos', botonControllers.obtenerProductos);
router.get('/obtener-ventas', botonControllers.obtenerVentas);


// Ruta POST para procesar la informacion
router.post('/procesar-formulario', botonControllers.procesarFormulario);
router.post('/agregar-usuario', botonControllers.procesarUsuarios);
router.post('/agregar-producto', botonControllers.agregarProducto);


module.exports = router;
