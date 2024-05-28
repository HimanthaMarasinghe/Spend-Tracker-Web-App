const express = require('express');
const { getAllItems, addItem } = require('../controllers/transaction');
const router = express.Router();

router.get('/', getAllItems);

router.post('/add/:type', addItem);

module.exports = router;