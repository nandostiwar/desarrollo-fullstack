const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'eparra123',
    database: 'postgres',
    port: '5432'
})

module.exports = pool;