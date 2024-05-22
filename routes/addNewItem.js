const express = require('express');
const { addIncomeItem, addExpenseItem } = require('../controllers/transaction');
const router = express.Router();

router.post('/income', addIncomeItem);
router.post('/expense', addExpenseItem);

module.exports = router;