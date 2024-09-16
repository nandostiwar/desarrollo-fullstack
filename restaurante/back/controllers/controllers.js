const fs = require('fs/promises');
const path = require('path');

async function validateUsuario(req, res) {
    const usuarioname = req.params.usuarioname;
    const password = req.header('Authorization').replace('Bearer ', '');
    const usuariosFilePath = path.join(__dirname, '../db/Usuarios.json');
  
    try {
      const dataJsonUsuarios = await fs.readFile(usuariosFilePath, 'utf-8');
      const arrayObjUsuarios = JSON.parse(dataJsonUsuarios);
  
      const usuario = arrayObjUsuarios.find(
        (search) => search.usuarioname === usuarioname && search.password === password
      );
  
      if (usuario) {
        // Si se encuentra el usuario y la contraseña coincide, devuelve una respuesta exitosa
        res.json(usuario);
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

async function getAllUsuarios(req, res){
    const usuariosData = await fs.readFile(path.join(__dirname, '../db/Usuarios.json'));
    const jsonUsuarios = JSON.parse(usuariosData);
    res.json(jsonUsuarios);
}

async function deleteUsuario(req, res) {
    const usuarioname = req.params.usuarioname;
  
    try {
      const usuariosFilePath = path.join(__dirname, '../db/Usuarios.json');
      let data = await fs.readFile(usuariosFilePath, 'utf-8');
      let usuarios = JSON.parse(data);
  
      // Filtrar y eliminar el usuario por su nombre de usuario
      usuarios = usuarios.filter((usuario) => usuario.usuarioname !== usuarioname);
  
      console.log('Usuarios después de la eliminación:', usuarios);
  
      // Guardar los datos actualizados en el archivo JSON
      await fs.writeFile(usuariosFilePath, JSON.stringify(usuarios, null, 2));
  
      console.log('Usuario eliminado con éxito');
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  
  async function deleteProducto(req, res) {
    const productoName = req.params.productoName;
  
    try {
      const productoFilepath = path.join(__dirname, '../db/Producto.json');
      let data = await fs.readFile(productoFilepath, 'utf-8');
      let productos = JSON.parse(data);
  
      // Filtrar y eliminar el usuario por su nombre de usuario
      productos = productos.filter((producto) => producto.productoName !== productoName);
  
      console.log('Productos después de la eliminación:', productos);
  
      // Guardar los datos actualizados en el archivo JSON
      await fs.writeFile(productoFilepath, JSON.stringify(productos, null, 2));
  
      console.log('producto eliminado con éxito');
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al eliminar el producto', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  async function createProducto(req, res) {
    const { productoName, precio, id,  } = req.body;
  
    try {
      const productoFilepath = path.join(__dirname, '../db/Producto.json');
      let data = await fs.readFile(productoFilepath, 'utf-8');
      let productos = JSON.parse(data);
  
      // Crear un nuevo producto con los datos del cuerpo de la solicitud
      const newProducto = {
        id: id,
        productoName: productoName,
        precio: precio,
      };
  
      // Agregar el nuevo producto a la lista de productos
      productos.push(newProducto);
  
      // Guardar los datos actualizados en el archivo JSON
      await fs.writeFile(productoFilepath, JSON.stringify(productos, null, 2));
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al crear el producto', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  //CREAR UN SALDO
  async function createSaldo(req, res) {
    const { saldoName, precio, id,  } = req.body;
  
    try {
      const saldoFilepath = path.join(__dirname, '../db/Saldo.json');
      let data = await fs.readFile(saldoFilepath, 'utf-8');
      let saldo = JSON.parse(data);
  
      // Crear un nuevo producto con los datos del cuerpo de la solicitud
      const newSaldo = {
        id: id,
        saldoName: saldoName,
        precio: precio,
      };
  
      // Agregar a la lista de saldo
      saldo.push(newSaldo);
  
      // Guardar los datos actualizados en el archivo JSON
      await fs.writeFile(saldoFilepath, JSON.stringify(saldo, null, 2));
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al crear el saldo', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }


  async function getAllProducto(req, res) {
    try {
      // Leer la lista de productos desde un archivo JSON
      const productoFilepath = path.join(__dirname, '../db/Producto.json');
      const data = await fs.readFile(productoFilepath, 'utf-8');
      const productos = JSON.parse(data);
  
      res.json(productos);
    } catch (error) {
      console.error('Error al obtener la lista de productos', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async function getAllSaldo(req, res) {
    try {
      // Leer la lista de productos desde un archivo JSON
      const saldoFilepath = path.join(__dirname, '../db/Saldo.json');
      const data = await fs.readFile(saldoFilepath, 'utf-8');
      const saldo = JSON.parse(data);
  
      res.json(saldo);
    } catch (error) {
      console.error('Error al obtener la lista de saldo', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  
async function getOneUsuarios(req, res){
    const usuarioname = req.params.usuarioname;
  const password = req.header('Authorization').replace('Bearer ', '');
  const usuariosFilePath = path.join(__dirname, '../db/Usuarios.json');

  try {
    const dataJsonUsuarios = await fs.readFile(usuariosFilePath, 'utf-8');
    const arrayObjUsuarios = JSON.parse(dataJsonUsuarios);

    const usuario = arrayObjUsuarios.find(
      (search) => search.usuarioname === usuarioname && search.password === password
    );

    if (usuario) {
        // Si se encuentra el usuario y la contraseña coincide, devuelve una respuesta exitosa
        res.json(usuario);
      } else {
        // Si no se encuentra el usuario o la contraseña no coincide, devuelve una respuesta de error
        res.status(401).json({ error: 'Autenticación fallida' });
      }

    }catch (error) {
        // Maneja errores de lectura o análisis del archivo JSON
        console.error('Error al validar el usuario', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }


}
async function getAllVentas(req, res) {
    try {
      // Leer la lista de ventas desde un archivo JSON
      const ventaFilepath = path.join(__dirname, '../db/Ventas.json');
      const data = await fs.readFile(ventaFilepath, 'utf-8');
      const ventas = JSON.parse(data);
  
      res.json(ventas);
    } catch (error) {
      console.error('Error al obtener la lista de ventas', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  async function createUsuario(req, res) {
    const { usuarioname, password, id, Edad, role } = req.body;
  
    try {
      const usuariosFilePath = path.join(__dirname, '../db/Usuarios.json');
      let data = await fs.readFile(usuariosFilePath, 'utf-8');
      let usuarios = JSON.parse(data);
  
      // Crear un nuevo usuario con los datos del cuerpo de la solicitud
      const newUsuario = {
        id: id,
        usuarioname: usuarioname,
        password: password,
        Edad: Edad,
        role: role,
      };
  
      // Agregar el nuevo usuario a la lista de usuarios
      usuarios.push(newUsuario);
  
      // Guardar los datos actualizados en el archivo JSON
      await fs.writeFile(usuariosFilePath, JSON.stringify(usuarios, null, 2));
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al crear el usuario', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

async function createVenta(req, res) {
    const { nombreProducto, Unidad,  } = req.body;
  
    try {
      const ventaFilepath = path.join(__dirname, '../db/Ventas.json');
      let data = await fs.readFile(ventaFilepath, 'utf-8');
      let ventas = JSON.parse(data);
  
      // Crear una nueva venta con los datos del cuerpo de la solicitud
      const newVenta = {
        nombreProducto: nombreProducto,
        Unidad: Unidad,
      };
  
      // Agregar el nuevo venta a la lista de ventas
      ventas.push(newVenta);
  
      // Guardar los datos actualizados en el archivo JSON
      await fs.writeFile(ventaFilepath, JSON.stringify(ventas, null, 2));
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error al crear el producto', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

module.exports = { 
    validateUsuario,
    deleteUsuario,
    deleteProducto,
    getAllProducto,
    createProducto,
    getAllUsuarios, 
    getOneUsuarios,
    createVenta,
    getAllVentas,
    createUsuario,
    createSaldo,
    getAllSaldo,

}