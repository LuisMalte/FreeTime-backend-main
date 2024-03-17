const express = require('express');
const freetimercontroller = require('../Controllers/freetimercontroller');
const router = express.Router();

router.post('/createfreetimer', freetimercontroller.createFreetimer);
router.get('/listfreetimers/:categoryId', freetimercontroller.listFreetimers);
router.put('/disablefreetimer/:freetimerId', freetimercontroller.disableFreetimer);
router.put('/enablefreetimer/:freetimerId', freetimercontroller.enableFreetimer);

module.exports = router;
