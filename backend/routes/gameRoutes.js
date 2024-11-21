const express = require('express');
const { addGame } = require('../controllers/GameController');

const router = express.Router();
router.post('/add', addGame);

module.exports = router;
