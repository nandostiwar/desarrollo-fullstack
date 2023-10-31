const fs = require('fs/promises');
const path = require('path');

const obtenerDatos = async (req, res) => {
    const filePathPedidos = path.join(__dirname, '../../db/bd_venta.json');
    const pedidosFile = await fs.readFile(filePathPedidos, 'utf-8');
    const objPedidos = JSON.parse(pedidosFile);

    res.json({
      pedidos: objPedidos,
    });
  }

const procesarFormulario = async (req, res) => {
    const { nombre, cantidad } = req.body;
    const nuevoPedido = {
      nombre,
      cantidad
    };
    const filePath = path.join(__dirname, '../../db/bd_venta.json');

    let objPedidos = [];
      const pedidosFile = await fs.readFile(filePath, 'utf-8');
      objPedidos = JSON.parse(pedidosFile);
    objPedidos.push(nuevoPedido);

    await fs.writeFile(filePath, JSON.stringify(objPedidos, null, 2), 'utf-8');

    res.json({
      message: "Pedido registrado con éxito."
    });
  }



const procesarUsuarios = async (req, res) => {
    const usuarios = req.body;
    const filePath = path.join(__dirname, '../../db/usuarios.json');
    let usuariosArray = [];

      const usuariosFile = await fs.readFile(filePath, 'utf-8');
      usuariosArray = JSON.parse(usuariosFile);

    usuariosArray = usuariosArray.concat(usuarios);

    await fs.writeFile(filePath, JSON.stringify(usuariosArray, null, 2), 'utf-8');

    res.json({
      message: "Usuarios registrados con éxito."
    });
}


const agregarProducto = async (req, res) => {
    const producto = req.body;
    const filePath = path.join(__dirname, '../../db/productos.json');

    let productosArray = [];

      const productosFile = await fs.readFile(filePath, 'utf-8');
      productosArray = JSON.parse(productosFile);

    productosArray.push(producto);

    await fs.writeFile(filePath, JSON.stringify(productosArray, null, 2), 'utf-8');

    res.json({
      message: "Producto registrado con éxito."
    });
  };


const obtenerUsuarios = async (req, res) => {
    const filePathUsuarios = path.join(__dirname, '../../db/usuarios.json');
    const usuariosFile = await fs.readFile(filePathUsuarios, 'utf-8');
    const usuarios = JSON.parse(usuariosFile);

    res.json({ usuarios });
  }

const obtenerProductos = async (req, res) => {
    const filePathProductos = path.join(__dirname, '../../db/productos.json');
    const productosFile = await fs.readFile(filePathProductos, 'utf-8');
    const productos = JSON.parse(productosFile);

    res.json({ productos });
  };

const obtenerVentas = async (req, res) => {
    const filePathVentas = path.join(__dirname, '../../db/bd_venta.json');
    const ventasFile = await fs.readFile(filePathVentas, 'utf-8');
    const ventas = JSON.parse(ventasFile);

    res.json({ ventas });
  };

module.exports = {
  procesarFormulario,
  procesarUsuarios,
  agregarProducto,
  obtenerUsuarios,
  obtenerProductos,
  obtenerVentas,
  obtenerDatos
};

