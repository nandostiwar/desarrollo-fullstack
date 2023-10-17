const express = require('express');
const app = express();
const usuarios = require('./usuarios');
const PORT = 5173;

app.use(express.json());

const users = [];

app.post('/formulario', (req, res) => {
  const user = req.body;
  usuarios.agregarUsuario(usuario);
  res.status(201).json({ message: 'Usuario añadido correctamente' });
});

app.get('/consulta/:sortType', (req, res) => {
  const sortType = req.params.sortType;
  let sortedUsers = [];

  if (sortType === 'edad') {
    sortedUsers = users.sort((a, b) => a.edad - b.edad);
  } else if (sortType === 'estrato') {
    sortedUsers = users.sort((a, b) => a.estado - b.estado);
  }

  res.status(200).json(sortedUsers);
});

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});