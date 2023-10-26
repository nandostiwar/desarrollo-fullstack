const pool = require('../conexion/conexion.js');

const getClientes = async (req, res) => {

    const response = await pool.query('SELECT * FROM clientes ORDER BY id ASC');
    
    res.status(200).json(response.rows);
};

const getClienteById = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const response = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    
    if (response.rows.length > 0) {

        res.json(response.rows);
    } else {

        res.json({ message: 'No se encontró ningún cliente con el ID proporcionado.' });
    }
};

const createCliente = async (req, res) => {
    
    const { nombre } = req.body;

    //if(nombre) return; 
    //nando
    
    const response = await pool.query('INSERT INTO clientes (nombre) VALUES ($1)', [nombre]);
    
    if (response.rowCount === 1) {
        res.json({
            message: 'Cliente agregado correctamente',
            body: {
                cliente: { nombre }
            }
        });
    } else {
        res.status(500).json({
            message: 'Error al agregar el cliente'
        });
    }
};

const updateCliente = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const { nombre } = req.body;

    const response =await pool.query('UPDATE clientes SET nombre = $1 WHERE id = $2', [
        nombre,
        id
    ]);

    if (response.rowCount > 0) {
        
        res.json('Se actualizó correctamente el cliente.');
    } else {
        
        res.json('No se pudo actualizar el cliente. Es posible que no se encontrara el registro con el ID proporcionado.');
    }
};

const deleteCliente = async (req, res) => {
    
    const id = parseInt(req.params.id);
    
    const response = await pool.query('DELETE FROM clientes where id = $1', [
        id
    ]);
    
    if (response.rowCount > 0) {
        res.json(`El cliente de id: ${id} se eliminó correctamente.`);
    } else {
        res.status(404).json(`No se encontró ningún cliente con el ID: ${id}`);
    }
};

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};