const express = require('express');
const router = express.Router();
const ventas = require('../controllers/ventas');

router.get('/sells', ventas.getAllSells);
router.post('/createSell', ventas.createSell);

module.exports = router;