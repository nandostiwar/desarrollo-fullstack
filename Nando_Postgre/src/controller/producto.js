const pool = require('../conexion/conexion.js');

const getProducto = async (req, res) => {

    const response = await pool.query('SELECT * FROM productos ORDER BY id ASC');
    
    res.status(200).json(response.rows);
};

const getProductoById = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const response = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    
    if (response.rows.length > 0) {

        res.json(response.rows);
    } else {

        res.json({ message: 'No se encontró ningún producto con el ID proporcionado.' });
    }
};

const createProducto = async (req, res) => {
    
    const { nombre, precio } = req.body;
    
    const response = await pool.query('INSERT INTO productos (nombre, precio) VALUES ($1,$2)', [nombre,precio]);
    
    if (response.rowCount === 1) {
        res.json({
            message: 'El producto se agregado correctamente',
            body: {
                producto: { nombre }
            }
        });
    } else {
        res.status(500).json({
            message: 'Error al agregar el producto'
        });
    }
};

const updateNombreProducto = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const { nombre } = req.body;

    const response =await pool.query('UPDATE productos SET nombre = $1 WHERE id = $2', [
        nombre,
        id
    ]);

    if (response.rowCount > 0) {
        
        res.json('Se actualizó correctamente el producto.');
    } else {
        
        res.json('No se pudo actualizar el producto. Es posible que no se encontrara el registro con el ID proporcionado.');
    }
};

const updatePrecioProducto = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const { precio } = req.body;

    const response =await pool.query('UPDATE productos SET precio = $1 WHERE id = $2', [
        precio,
        id
    ]);

    if (response.rowCount > 0) {
        
        res.json('Se actualizó correctamente el producto.');
    } else {
        
        res.json('No se pudo actualizar el producto. Es posible que no se encontrara el registro con el ID proporcionado.');
    }
};

const deleteProducto = async (req, res) => {
    
    const id = parseInt(req.params.id);
    
    await pool.query('DELETE FROM productos where id = $1', [
        id
    ]);
    
    if (response.rowCount > 0) {
        res.json(`El producto de id: ${id} se eliminó correctamente.`);
    } else {
        res.status(404).json(`No se encontró ningún producto con el ID: ${id}`);
    }
};

module.exports = {
    getProducto,
    getProductoById,
    createProducto,
    updateNombreProducto,
    updatePrecioProducto,
    deleteProducto
};