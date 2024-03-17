const express = require('express');
const fulltimercontroller = require('../Controllers/fulltimercontroller');
const router = express.Router();

router.post('/createfulltimer', fulltimercontroller.createFulltimer);
router.get('/listfulltimer', fulltimercontroller.listFulltimer);
router.put('/disablefulltimer/:fulltimerId', fulltimercontroller.disableFulltimer);
router.put('/enablefulltimer/:fulltimerId', fulltimercontroller.enableFulltimer);

module.exports = router;
