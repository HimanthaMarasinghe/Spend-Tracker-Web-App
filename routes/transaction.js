const express = require('express');
const { getAllItems } = require('../controllers/transaction');
const router = express.Router();

router.get('/', getAllItems);

module.exports = router;