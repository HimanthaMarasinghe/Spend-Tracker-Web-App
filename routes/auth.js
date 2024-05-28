const express = require('express');
const { auth, register, login } = require('../controllers/auth');
const router = express.Router();

router.get('/', auth);

router.post('/register', register);
router.post('/login', login);

module.exports = router;