const express = require('express');
const { auth, register, login, logout } = require('../controllers/auth');
const router = express.Router();

router.get('/', auth);

router.post('/logout', logout);

router.post('/register', register);
router.post('/login', login);

module.exports = router;