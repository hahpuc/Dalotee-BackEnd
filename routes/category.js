const express = require('express');

const { createCategory, getCategories } = require('../controller/category.js');

const router = express.Router();

router.post('/create-category', createCategory);
router.get('/categories', getCategories);

module.exports = router;