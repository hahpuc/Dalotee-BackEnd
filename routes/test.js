const express = require('express');
const { createTest } = require('../controller/test.js');

const router = express.Router();

router.post('/test', createTest);

module.exports = router;