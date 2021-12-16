const express = require('express');


const { createCard, getCardByID, getAllCard, getCardsByCategory, getCardsByNumber } = require('../controller/card.js');
const upload = require('../middleware/multer.js');

const router = express.Router();

router.post('/card', upload.array('image', 10), createCard);
router.get('/card', getAllCard)
router.get('/card/:id', getCardByID);
router.get('/card/category/:id', getCardsByCategory);
router.get('/card/number/:number', getCardsByNumber);

module.exports = router;