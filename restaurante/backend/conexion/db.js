const pgp = require('pg-promise')();

// Configura la conexión a la base de datos
const dbConfig = {
  host: 'localhost', // Host de tu base de datos
  port: 5432, // Puerto de PostgreSQL
  database: 'Restaurante', // Nombre de tu base de datos
  user: 'postgres', // Nombre de usuario de PostgreSQL
  password: '1012pocholin', // Contraseña de PostgreSQL
};

// Crea una instancia de la base de datos
const db = pgp(dbConfig);

module.exports = db;