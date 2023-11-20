// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const routeriniciarSesion = require('./routes/routerInicioSesion');
const routerproductos = require('./routes/routerProductos');
const routerusuarios = require('./routes/routerUsers');
const routerventas = require('./routes/routerVentas');

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Middleware para habilitar el acceso CORS (si es necesario)
app.use(cors());

// Usa las rutas en el prefijo /api
app.use('/validacion', routeriniciarSesion);
app.use('/verproductos', routerproductos);
app.use('/verusuarios', routerusuarios);
app.use('/verventas', routerventas);

// Define tus otras rutas y lógica aquí

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});