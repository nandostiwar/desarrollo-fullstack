const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/submit-form', formController.submitForm);

router.get('/get-data', formController.getData);

module.exports = router;