// restaurController.js

const fs = require('fs').promises;
const path = require('path');

async function validateUser(req, res) {
  const username = req.params.username;
  const password = req.header('Authorization').replace('Bearer ', '');
  const usersFilePath = path.join(__dirname, '../bd/users.json');

  try {
    const dataJsonUsers = await fs.readFile(usersFilePath, 'utf-8');
    const arrayObjUsers = JSON.parse(dataJsonUsers);

    const user = arrayObjUsers.find(
      (search) => search.username === username && search.password === password
    );

    if (user) {
      // Si se encuentra el usuario y la contraseña coincide, devuelve una respuesta exitosa
      res.json(user);
    } else {
      // Si no se encuentra el usuario o la contraseña no coincide, devuelve una respuesta de error
      res.status(401).json({ error: 'Autenticación fallida' });
    }
  } catch (error) {
    // Maneja errores de lectura o análisis del archivo JSON
    console.error('Error al validar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getAllProduct(req, res) {
  try {
    // Leer la lista de productos desde un archivo JSON
    const productFilepath = path.join(__dirname, '../bd/product.json');
    const data = await fs.readFile(productFilepath, 'utf-8');
    const products = JSON.parse(data);

    res.json(products);
  } catch (error) {
    console.error('Error al obtener la lista de productos', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getAllSells(req, res) {
  try {
    // Leer la lista de ventas desde un archivo JSON
    const sellFilepath = path.join(__dirname, '../bd/sells.json');
    const data = await fs.readFile(sellFilepath, 'utf-8');
    const sells = JSON.parse(data);

    res.json(sells);
  } catch (error) {
    console.error('Error al obtener la lista de ventas', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getAllUsers(req, res) {
  try {
    // Leer la lista de usuarios desde un archivo JSON
    const usersFilePath = path.join(__dirname, '../bd/users.json');
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(data);

    res.json(users);
  } catch (error) {
    console.error('Error al obtener la lista de usuarios', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function deleteUser(req, res) {
  const username = req.params.username;

  try {
    const usersFilePath = path.join(__dirname, '../bd/users.json');
    let data = await fs.readFile(usersFilePath, 'utf-8');
    let users = JSON.parse(data);

    // Filtrar y eliminar el usuario por su nombre de usuario
    users = users.filter((user) => user.username !== username);

    console.log('Usuarios después de la eliminación:', users);

    // Guardar los datos actualizados en el archivo JSON
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    console.log('Usuario eliminado con éxito');

    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function deleteProduct(req, res) {
  const productName = req.params.productName;

  try {
    const productFilepath = path.join(__dirname, '../bd/product.json');
    let data = await fs.readFile(productFilepath, 'utf-8');
    let products = JSON.parse(data);

    // Filtrar y eliminar el usuario por su nombre de usuario
    products = products.filter((product) => product.productName !== productName);

    console.log('Productos después de la eliminación:', products);

    // Guardar los datos actualizados en el archivo JSON
    await fs.writeFile(productFilepath, JSON.stringify(products, null, 2));

    console.log('producto eliminado con éxito');

    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function createUser(req, res) {
  const { username, password, id, age, role } = req.body;

  try {
    const usersFilePath = path.join(__dirname, '../bd/users.json');
    let data = await fs.readFile(usersFilePath, 'utf-8');
    let users = JSON.parse(data);

    // Crear un nuevo usuario con los datos del cuerpo de la solicitud
    const newUser = {
      id: id,
      username: username,
      password: password,
      age: age,
      role: role,
    };

    // Agregar el nuevo usuario a la lista de usuarios
    users.push(newUser);

    // Guardar los datos actualizados en el archivo JSON
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function createProduct(req, res) {
  const { productName, price, id,  } = req.body;

  try {
    const productFilepath = path.join(__dirname, '../bd/product.json');
    let data = await fs.readFile(productFilepath, 'utf-8');
    let products = JSON.parse(data);

    // Crear un nuevo producto con los datos del cuerpo de la solicitud
    const newProduct = {
      id: id,
      productName: productName,
      price: price,
    };

    // Agregar el nuevo producto a la lista de productos
    products.push(newProduct);

    // Guardar los datos actualizados en el archivo JSON
    await fs.writeFile(productFilepath, JSON.stringify(products, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function createSell(req, res) {
  const { nombreProducto, Unidad,  } = req.body;

  try {
    const sellFilepath = path.join(__dirname, '../bd/sells.json');
    let data = await fs.readFile(sellFilepath, 'utf-8');
    let sells = JSON.parse(data);

    // Crear una nueva venta con los datos del cuerpo de la solicitud
    const newSell = {
      nombreProducto: nombreProducto,
      Unidad: Unidad,
    };

    // Agregar el nuevo venta a la lista de ventas
    sells.push(newSell);

    // Guardar los datos actualizados en el archivo JSON
    await fs.writeFile(sellFilepath, JSON.stringify(sells, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  validateUser,
  deleteUser,
  deleteProduct,
  getAllUsers,
  getAllProduct,
  createUser,
  createProduct,
  createSell,
  getAllSells,
};
