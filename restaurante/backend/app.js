// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const restaurRoutes = require('./routes/restaurRoutes');

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Middleware para habilitar el acceso CORS (si es necesario)
app.use(cors());

// Usa las rutas en el prefijo /api
app.use('/api', restaurRoutes);

// Define tus otras rutas y lógica aquí

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});