const express = require('express');


const { createCard, getCardByID, getAllCard } = require('../controller/card.js');
const upload = require('../middleware/multer.js');

const router = express.Router();

router.post('/card', upload.array('image', 10), createCard);
router.get('/card', getAllCard)
router.get('/card/:id', getCardByID);

module.exports = router;