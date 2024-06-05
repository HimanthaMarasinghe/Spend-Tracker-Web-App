const express = require('express');
const { getAllItems, addItem, deleteItem, updateItem } = require('../controllers/transaction');
const router = express.Router();

router.get('/', getAllItems);

router.post('/add/:type', addItem);

router.delete('/delete/:itemId', deleteItem);

router.post('/update/:type', updateItem);

module.exports = router;