const express = require('express');
const { addItem } = require('../controllers/transaction');
const router = express.Router();

router.post('/:type', addItem);

module.exports = router;