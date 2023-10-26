const { Router } = require('express');
const routerCompra = Router();

const { getCompras, getComprasByCliente, getComprasByProducto, createCompra, updateCompra, deleteCompra } = require('../controller/compra');

routerCompra.get('/getAll',                 getCompras    );
routerCompra.get('/getByCliente/:id',       getComprasByCliente );
routerCompra.get('/getByProducto/:id',      getComprasByProducto  );
routerCompra.post('/create',                createCompra  );
routerCompra.put('/update/:id',             updateCompra  ); 
routerCompra.delete('/delete/:id',          deleteCompra  );

module.exports = routerCompra;