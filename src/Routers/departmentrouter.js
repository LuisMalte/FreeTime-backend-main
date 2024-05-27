const express = require('express');
const deparmentcontroller = require('../Controllers/departmentcontroller');
const router = express.Router();
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

//todos los tokens son del login usuario

router.get('/listdepartments',authenticateToken, deparmentcontroller.listDepartments);

module.exports = router;