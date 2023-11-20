const db = require('../conexion/db'); 
const fs = require('fs').promises;
const path = require('path');

async function validateUser(req, res) {
  const username = req.params.username;
  const password = req.header('Authorization').replace('Bearer ', '');

  try {
    const user = await db.oneOrNone(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (user) {
      // Si se encuentra el usuario y la contraseña coincide, devuelve una respuesta exitosa
      res.json(user);
    } else {
      // Si no se encuentra el usuario o la contraseña no coincide, devuelve una respuesta de error
      res.status(401).json({ error: 'Autenticación fallida' });
    }
  } catch (error) {
    // Maneja errores de la consulta SQL o la conexión a la base de datos
    console.error('Error al validar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
    validateUser,
  };
  