const express = require('express');
const router = express.Router();
const botonControllers = require('../controllers/botonControllers.js');

router
    .get('/', botonControllers.getNumbers)
    .post('/changeNumber/:button', botonControllers.changeNumber)

module.exports = router;