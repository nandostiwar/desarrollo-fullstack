const pool = require('../db/connection.js');

async function getAllUsers(req, res){
    try{
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    }catch(e){
        res.json({error: e});
    }
}

async function getAllProducts(req, res){
    try{
        const resultProducts = await pool.query("SELECT * FROM products");
        res.json(resultProducts.rows);
    }catch(e){
        res.json({error: e});
    }
}

async function getAllSales(req, res){
    const resultSales = await pool.query("SELECT * FROM sales");
    res.json(resultSales.rows);
}

async function validateUser(req, res){
    const username = req.params.username;
    const resultUsers = await pool.query("SELECT * FROM users");
    const result = resultUsers.rows.filter((elem)=>{
        if(elem.nombre === username){
            return elem;
        }
    })
    res.json(result[0]); 
}

async function createUser(req, res){
    const {username, rol} = req.body;
    
    await pool.query("INSERT INTO users(nombre, rol) VALUES ($1, $2)", [username, rol]);
    res.json({
        message: "user created succesfully"
    })
}

async function createProduct(req, res){
    const {nombreProducto, precio} = req.body;
    await pool.query("INSERT INTO products(nombre_producto, precio) VALUES ($1, $2)", [nombreProducto, precio]);
    res.json({
        message: "product created succesfully"
    })
}

async function deleteUser(req, res){
    const {username} = req.body;
    await pool.query("DELETE FROM users WHERE nombre = $1", [username]);
    res.json({
        message: "user deleted succesfully"
    })
}

async function deleteProduct(req, res){
    const {nombreProducto} = req.body;
    await pool.query("DELETE FROM products WHERE nombre_producto = $1", [nombreProducto]);
    res.json({
        message: "product deleted succesfully"
    })
}

async function createSale(req, res){
    const {nombreProducto, cantidad} = req.body;
    await pool.query("INSERT INTO sales(nombre_producto, cantidad) VALUES ($1, $2)", [nombreProducto, cantidad]);
    res.json({
        message: "sale created succesfully"
    })
}

module.exports = {
    getAllUsers,
    getAllProducts,
    getAllSales,
    validateUser,
    createUser,
    createProduct,
    createSale,
    deleteUser,
    deleteProduct
}