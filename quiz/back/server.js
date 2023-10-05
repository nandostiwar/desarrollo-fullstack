// server.js
const express = require('express');
const fs = require('fs/promises');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Inicializa el archivo JSON con un objeto vacío
const initialData = {};
fs.writeFile('counters.json', JSON.stringify(initialData))
  .then(() => {
    console.log('Archivo JSON inicializado con éxito.');
  })
  .catch((err) => {
    console.error('Error al inicializar el archivo JSON:', err);
  });

app.post('/api/saveAllCounts', async (req, res) => {
  try {
    const counters = req.body;

    // Escribe los datos actualizados en el archivo JSON
    await fs.writeFile('counters.json', JSON.stringify(counters, null, 2));

    res.sendStatus(200);
  } catch (error) {
    console.error('Error al guardar los contadores:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
