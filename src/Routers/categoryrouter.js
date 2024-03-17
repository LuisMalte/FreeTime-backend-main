const express = require('express');
const categorycontroller = require('../Controllers/categorycontroller');
const router = express.Router();

router.get('/listCategories', categorycontroller.listCategories);

module.exports = router;