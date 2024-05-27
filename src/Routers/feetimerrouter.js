const express = require('express');
const freetimercontroller = require('../Controllers/freetimercontroller');
const router = express.Router();
const authenticateTokenFreeTimer = require('../Middleware/authenticateTokenFreeTimer'); 
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

router.post('/createfreetimer',authenticateToken,  freetimercontroller.createFreetimer); // se necesita el token  del login del usuario para crear un freetimer 

//los siguientes son  los tokens son del login del freetimer 
router.get('/listfreetimers',authenticateTokenFreeTimer, freetimercontroller.listFreetimers);
router.get('/listFreetimerByCategories/:categoryId', authenticateTokenFreeTimer, freetimercontroller.listFreetimerByCategories);
router.put('/updateFreetimer/:freetimerId', authenticateTokenFreeTimer, freetimercontroller.updateFreetimer);
router.put('/disablefreetimer/:freetimerId',authenticateTokenFreeTimer, freetimercontroller.disableFreetimer);
router.put('/enablefreetimer/:freetimerId', authenticateTokenFreeTimer, freetimercontroller.enableFreetimer);
router.get('/getfreetimer/:freetimerId',authenticateTokenFreeTimer,  freetimercontroller.getFreetimer)
router.post('/loginfreetimer', freetimercontroller.loginFreetimer)

module.exports = router;
