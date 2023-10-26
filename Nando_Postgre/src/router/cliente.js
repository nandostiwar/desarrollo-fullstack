const { Router } = require('express');
const routerCliente = Router();

const { getClientes, getClienteById, createCliente, updateCliente, deleteCliente } = require('../controller/cliente.js');

routerCliente.get('/getAll',        getClientes     );
routerCliente.get('/get/:id',       getClienteById  );
routerCliente.post('/create',       createCliente   );
routerCliente.put('/update/:id',    updateCliente   ); 
routerCliente.delete('/delete/:id', deleteCliente   );

module.exports = routerCliente;