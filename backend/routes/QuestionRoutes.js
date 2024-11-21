const express = require('express');
const router = express.Router();
const { addQuestions, getQuestions } = require('../controllers/QuestionController');

router.post('/questions', addQuestions);
router.get('/questions', getQuestions);

module.exports = router;
