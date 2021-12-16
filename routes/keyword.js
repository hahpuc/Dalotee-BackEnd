const express = require('express');
const { createKeyWord, getKeyWordById, getAllKeyWord } = require('../controller/keyword.js');


const router = express.Router();

router.post('/create-keyword', createKeyWord);
router.get('/keyword/:id', getKeyWordById);
router.get('/keyword', getAllKeyWord)

module.exports = router;