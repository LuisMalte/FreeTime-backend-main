const express = require('express');
const categorycontroller = require('../Controllers/categorycontroller');
const router = express.Router();
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

//todos los tokens son del login usuario

router.get('/listCategories',authenticateToken,  categorycontroller.listCategories);

module.exports = router;