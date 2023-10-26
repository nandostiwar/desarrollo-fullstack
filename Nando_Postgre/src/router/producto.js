const { Router } = require('express');
const routerProducto = Router();

const { getProducto, getProductoById, createProducto, updateNombreProducto, updatePrecioProducto, deleteProducto } = require('../controller/producto');

routerProducto.get('/getAll',              getProducto    );
routerProducto.get('/get/:id',             getProductoById );
routerProducto.post('/post',               createProducto  );
routerProducto.put('/updateNombre/:id',    updateNombreProducto  ); 
routerProducto.put('/updatePrecio/:id',    updatePrecioProducto  );
routerProducto.delete('/delete/:id',       deleteProducto  );

module.exports = routerProducto;