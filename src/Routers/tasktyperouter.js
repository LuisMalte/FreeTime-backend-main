const express = require('express');
const tasktypecontroller = require('../Controllers/tasktypecontroller');
const router = express.Router();

router.get('/listTypes', tasktypecontroller.listTypes);

module.exports = router;