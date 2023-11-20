const db = require('../conexion/db'); 
const fs = require('fs').promises;
const path = require('path');

async function getAllProduct(req, res) {
  try {
    const products = await db.any('SELECT * FROM product')
    res.json(products);
  } catch (error) {
    console.error('Error al obtener la lista de productos', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function createProducto(req, res) {
  const { productname, price } = req.body;

  try {
    // Ejemplo de consulta SQL para insertar un nuevo producto
    const query = `
      INSERT INTO product (productname, price)
      VALUES ($1, $2)
    `;

    // Ejecutar la consulta SQL
    await db.none(query, [productname, price]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function deleteProduct(req, res) {
  const id = req.params.id;

  try {
    // Ejemplo de consulta SQL para eliminar un usuario por su nombre de usuario
    const query = `
      DELETE FROM product
      WHERE id = $1
    `;

    // Ejecutar la consulta SQL
    await db.none(query, [id]);

    console.log('Producto eliminado con éxito');

    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function editProduct(req, res) {
  const { id, productname, price} = req.body;

  try {
    // Ejemplo de consulta SQL para editar un usuario por su identificación
    const query = `
      UPDATE product
      SET productname = $2, price = $3
      WHERE id = $1
    `;

    // Ejecutar la consulta SQL
    await db.none(query, [id, productname, price]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al editar el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
    getAllProduct,
    createProducto,
    deleteProduct,
    editProduct,
  };
  