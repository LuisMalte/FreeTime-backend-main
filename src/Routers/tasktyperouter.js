const express = require('express');
const tasktypecontroller = require('../Controllers/tasktypecontroller');
const router = express.Router();
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

//todos los tokens son del login usuario

router.get('/listTypes', authenticateToken, tasktypecontroller.listTypes);

module.exports = router;