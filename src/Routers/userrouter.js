const express = require('express');
const usercontroller = require('../Controllers/usercontroller');
const router = express.Router();

router.post('/createuser', usercontroller.createUser);
router.get('/listuser', usercontroller.listUser);
router.put('/updateuser/:userId', usercontroller.updateUser);
router.put('/disableuser/:userId', usercontroller.disableUser);
router.put('/enableuser/:userId', usercontroller.enableUser);
router.get('/getuser/:userId', usercontroller.getUser)

module.exports = router;