const db = require('../conexion/db'); 
const fs = require('fs').promises;
const path = require('path');

async function getAllUsers(req, res) {
  try {
    const users = await db.any('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function createUser(req, res) {
  const { username, password, id, age, role } = req.body;

  try {
    // Ejemplo de consulta SQL para insertar un nuevo usuario
    const query = `
      INSERT INTO users (id, username, password, age, role)
      VALUES ($1, $2, $3, $4, $5)
    `;

    // Ejecutar la consulta SQL
    await db.none(query, [id, username, password, age, role]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;

  try {
    // Ejemplo de consulta SQL para eliminar un usuario por su nombre de usuario
    const query = `
      DELETE FROM users
      WHERE id = $1
    `;

    // Ejecutar la consulta SQL
    await db.none(query, [id]);

    console.log('Usuario eliminado con éxito');

    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function editUser(req, res) {
  const { id, username, password, age, role } = req.body;

  try {
    // Ejemplo de consulta SQL para editar un usuario por su identificación
    const query = `
      UPDATE users
      SET username = $2, password = $3, age = $4, role = $5
      WHERE id = $1
    `;

    // Ejecutar la consulta SQL
    await db.none(query, [id, username, password, age, role]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al editar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  editUser,
};
