const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'nando123',
    database: 'tienda2',
    port: '5433'
});

module.exports = pool;