const express = require('express');
const citycontroller = require('../Controllers/citycontroller');
const router = express.Router();
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

//todos los tokens son del login usuario

router.get('/listcities/:departmentId', authenticateToken, citycontroller.listCities);

module.exports = router;