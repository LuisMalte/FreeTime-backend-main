const express = require('express');
const freetimercontroller = require('../Controllers/freetimercontroller');
const router = express.Router();

router.post('/createfreetimer', freetimercontroller.createFreetimer);
router.get('/listfreetimers', freetimercontroller.listFreetimers);
router.get('/listFreetimerByCategories/:categoryId', freetimercontroller.listFreetimerByCategories);
router.put('/updateFreetimer/:freetimerId', freetimercontroller.updateFreetimer);
router.put('/disablefreetimer/:freetimerId', freetimercontroller.disableFreetimer);
router.put('/enablefreetimer/:freetimerId', freetimercontroller.enableFreetimer);
router.get('/getfreetimer/:freetimerId', freetimercontroller.getFreetimer)

module.exports = router;
