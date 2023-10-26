const express = require('express');

const routerCliente = require('./router/cliente');
const routerCompra = require('./router/compra');
const routerProducto = require('./router/producto');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/cliente', routerCliente);
app.use('/compra', routerCompra);
app.use('/producto', routerProducto);

app.listen(3000);
console.log('Server on port', 3000);