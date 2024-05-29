const express = require('express');
const { getAllItems, addItem, deleteItem } = require('../controllers/transaction');
const router = express.Router();

router.get('/', getAllItems);

router.post('/add/:type', addItem);

router.delete('/delete/:itemId', deleteItem);

module.exports = router;