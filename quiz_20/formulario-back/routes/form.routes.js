const express = require('express');
const router = express.Router();
const formController = require('../controllers/formControllers.js');
router
    .get('/', formController.getData)
    .post('/enviar', formController.saveData)

module.exports = router;