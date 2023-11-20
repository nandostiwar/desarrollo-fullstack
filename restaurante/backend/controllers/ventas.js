const db = require('../conexion/db'); 
const fs = require('fs').promises;
const path = require('path');

async function getAllSells(req, res) {
    try {
      const sells = await db.any('SELECT * FROM sells')
      res.json(sells);
    } catch (error) {
      console.error('Error al obtener la lista de ventas', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async function createSell(req, res) {
    const { nombreproducto, unidad } = req.body;
  
    try {
      // Ejemplo de consulta SQL para insertar un nuevo producto
      const query = `
        INSERT INTO sells (nombreproducto, unidad)
        VALUES ($1, $2)
      `;
  
      // Ejecutar la consulta SQL
      await db.none(query, [nombreproducto, unidad]);
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al crear el producto', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  module.exports = {
    getAllSells,
    createSell,
  };
  