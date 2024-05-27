const express = require('express');
const fulltimercontroller = require('../Controllers/fulltimercontroller');
const router = express.Router();
const authenticateTokenFulltimer = require('../Middleware/authenticateTokenFulltimer'); 
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

router.post('/createfulltimer',authenticateToken, fulltimercontroller.createFulltimer);// se necesita el token  del login del usuario para crear un fulltiemr 

//los siguientes son  los tokens son del login usuario

router.get('/listfulltimer', authenticateTokenFulltimer, fulltimercontroller.listFulltimer);
router.put('/disablefulltimer/:fulltimerId',authenticateTokenFulltimer, fulltimercontroller.disableFulltimer);
router.put('/enablefulltimer/:fulltimerId',authenticateTokenFulltimer, fulltimercontroller.enableFulltimer);
router.get('/listfulltimerid', authenticateTokenFulltimer, fulltimercontroller.listFulltimerId);
router.post('/loginfulltimer', fulltimercontroller.loginFulltimer)

module.exports = router;
