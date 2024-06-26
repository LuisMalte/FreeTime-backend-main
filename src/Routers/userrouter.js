const express = require('express');
const usercontroller = require('../Controllers/usercontroller');
const authenticateToken = require('../Middleware/authenticateTokenUser'); 
const router = express.Router();


//todos los tokens son del login usuario
router.post('/createuser', usercontroller.createUser);
router.get('/listuser',authenticateToken, usercontroller.listUser);
router.put('/updateuser/:userId',authenticateToken,  usercontroller.updateUser);
router.put('/disableuser/:userId',authenticateToken, usercontroller.disableUser);
router.put('/enableuser/:userId',authenticateToken, usercontroller.enableUser);
router.get('/getuser/:userId', authenticateToken, usercontroller.getUser)
router.get('/getuser/:userId',authenticateToken, usercontroller.getUser)
router.post('/login', usercontroller.loginUser)

module.exports = router;