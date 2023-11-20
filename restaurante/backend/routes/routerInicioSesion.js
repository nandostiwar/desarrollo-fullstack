const express = require('express');
const router = express.Router();
const validate = require('../controllers/inicioSesion');

router.post('/validar/:username', validate.validateUser);

module.exports = router;