const express = require('express');
const router = express.Router();
const botonControllers = require('./controllers/botonControllers.js');

// Ruta GET para obtener datos
router.get('/datos', botonControllers.obtenerDatos);

// Ruta POST para procesar el formulario
router.post('/procesar-formulario', botonControllers.procesarFormulario);

module.exports = router;



