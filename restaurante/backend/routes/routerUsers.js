const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/users', users.getAllUsers);
router.post('/crearUsuario', users.createUser);
router.put('/editarUsuario/:id', users.editUser);
router.delete('/users/:id', users.deleteUser);

module.exports = router;