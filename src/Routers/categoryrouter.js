const express = require('express');
const deparmentcontroller = require('../Controllers/categorycontroller');
const router = express.Router();

router.get('/listCategories', deparmentcontroller.listCategories);

module.exports = router;