const pool = require('../conexion/conexion.js');

const getCompras = async (req, res) => {

    const response = await pool.query('SELECT * FROM compras ORDER BY id ASC');
    
    res.status(200).json(response.rows);
};

const getComprasByCliente = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const response = await pool.query('SELECT * FROM compras WHERE cliente_id = $1', [id]);
    
    if (response.rows.length > 0) {

        res.json(response.rows);
    } else {

        res.json({ message: 'No se encontró ninguna compra con el cliente id proporcionado.' });
    }
};

const getComprasByProducto = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const response = await pool.query('SELECT * FROM compras WHERE producto_id = $1', [id]);
    
    if (response.rows.length > 0) {

        res.json(response.rows);
    } else {

        res.json({ message: 'No se encontró ninguna compra con el producto id proporcionado.' });
    }
};

const createCompra = async (req, res) => {
    
    const { cliente_id, producto_id } = req.body;
    
    const response = await pool.query('INSERT INTO compras (cliente_id, producto_id, fecha_compra) VALUES ($1,$2,$3)', [cliente_id, producto_id, new Date()]);
    
    if (response.rowCount === 1) {
        res.json({
            message: 'Compra agregada correctamente'
        });
    } else {
        res.status(500).json({
            message: 'Error al agregar la compra.'
        });
    }
};

const updateCompra = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const { producto_id } = req.body;

    const response =await pool.query('UPDATE compras SET producto_id = $1 WHERE id = $2', [
        producto_id,
        id
    ]);

    if (response.rowCount > 0) {
        
        res.json('Se actualizó correctamente el producto de la compra.');
    } else {
        
        res.json('No se pudo actualizar la compra. Es posible que no se encontrara el registro con el ID proporcionado.');
    }
};

const deleteCompra = async (req, res) => {
    
    const id = parseInt(req.params.id);
    
    await pool.query('DELETE FROM compras where id = $1', [
        id
    ]);
    
    if (response.rowCount > 0) {
        res.json(`La compra de id: ${id} se eliminó correctamente.`);
    } else {
        res.status(404).json(`No se encontró ninguna compra con el ID: ${id}`);
    }
};

module.exports = {
    getCompras,
    getComprasByCliente,
    getComprasByProducto,
    createCompra,
    updateCompra,
    deleteCompra
};