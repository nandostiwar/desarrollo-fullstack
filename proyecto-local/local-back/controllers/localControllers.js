const fs = require('fs/promises');
const path = require('path');

async function getAllUsuarios(req, res){
    const dataJsonUsers = await fs.readFile(path.join(__dirname, '../db/usuarios.json'));
    const objUsers = JSON.parse(dataJsonUsers);
    res.json(objUsers);
}

async function getAllProductos(req, res){
    const dataJsonProducts = await fs.readFile(path.join(__dirname, '../db/productos.json'));
    const objProducts = JSON.parse(dataJsonProducts);
    res.json(objProducts);
}

async function getAllVentas(req, res){
    const dataJsonSales = await fs.readFile(path.join(__dirname, '../db/ventas.json'));
    const objSales = JSON.parse(dataJsonSales);
    res.json(objSales);
}

async function validarUsuario(req, res){
    const username = req.params.username;
    const dataJsonUsers = await fs.readFile(path.join(__dirname, '../db/usuarios.json'));
    const arrayObjUsers = JSON.parse(dataJsonUsers);
    const result = arrayObjUsers.filter((elem)=>{
        if(elem.nombre === username){
            return elem;
        }
    })
    res.json(result[0]); 
}

async function crearUsuario(req, res){
    const {username, rol} = req.body;
    const dataJsonUsers = await fs.readFile(path.join(__dirname, '../db/usuarios.json'));
    const arrayObjUsers = JSON.parse(dataJsonUsers);
    arrayObjUsers.push({
        nombre: username,
        rol: rol
    })
    await fs.writeFile(path.join(__dirname, '../db/usuarios.json'), JSON.stringify(arrayObjUsers, null, 2), {encoding: 'utf-8'})
    res.json({
        message: "user created"
    })
}

async function crearProducto(req, res){
    const {nombreProducto, precio} = req.body;
    const dataJsonProducts = await fs.readFile(path.join(__dirname, '../db/productos.json'));
    const arrayObjProducts = JSON.parse(dataJsonProducts);
    arrayObjProducts.push({
        nombreProducto,
        precio
    })
    await fs.writeFile(path.join(__dirname, '../db/productos.json'), JSON.stringify(arrayObjProducts, null, 2), {encoding: 'utf-8'})
    res.json({
        message: "producte created"
    })
}

async function eliminarUsuario(req, res){
    const {username} = req.body;
    const dataJsonUsers = await fs.readFile(path.join(__dirname, '../db/usuarios.json'));
    const arrayObjUsers = JSON.parse(dataJsonUsers);
    const resultUsersDeleted = arrayObjUsers.filter((user)=>{
        if(user.nombre !== username){
            return user
        }
    });
    await fs.writeFile(path.join(__dirname, '../db/usuarios.json'), JSON.stringify(resultUsersDeleted, null, 2), {encoding: 'utf-8'})
    res.json({
        message: "deleting user"
    })
}

async function eliminarProducto(req, res){
    const {nombreProducto} = req.body;
    const dataJsonProducts = await fs.readFile(path.join(__dirname, '../db/productos.json'));
    const arrayObjProducts = JSON.parse(dataJsonProducts);
    const resultProductsDeleted = arrayObjProducts.filter((product)=>{
        if(product.nombreProducto !== nombreProducto){
            return product
        }
    });
    await fs.writeFile(path.join(__dirname, '../db/productos.json'), JSON.stringify(resultProductsDeleted, null, 2), {encoding: 'utf-8'})
    res.json({
        message: "deleting product"
    })
}

async function crearVenta(req, res){
    const {nombreProducto, cantidad} = req.body;
    const dataJsonSales = await fs.readFile(path.join(__dirname, '../db/ventas.json'))
    const arrayObjSales = JSON.parse(dataJsonSales);
    arrayObjSales.push({nombreProducto, cantidad});
    await fs.writeFile(path.join(__dirname, '../db/ventas.json'), JSON.stringify(arrayObjSales, null, 2), {encoding: 'utf-8'});
    res.json({
        message: "Sale Recorded"
    })
}

module.exports = {
    getAllUsuarios,
    getAllProductos,
    getAllVentas,
    validarUsuario,
    crearUsuario,
    crearProducto,
    crearVenta,
    eliminarUsuario,
    eliminarProducto
}