const express = require('express');
const usercontroller = require('../Controllers/usercontroller');
const router = express.Router();

router.post('/createuser', usercontroller.createuser);
router.get('/listuser', usercontroller.listusers);
router.put('/updateuser/:userId', usercontroller.updateuser);
router.put('/disableuser/:userId', usercontroller.disableuser);
router.put('/enableuser/:userId', usercontroller.enableuser);

module.exports = router;