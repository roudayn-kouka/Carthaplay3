const Question = require('../models/Question');
const Game = require('../models/Game');

const addQuestions = async (req, res) => {
  try {
    const questions = req.body.questions;

    const updatedQuestions = questions.map((q) => {
      const xPositions = [25, 50, 75];
      const formattedAnswers = q.options.map((text, index) => ({
        text,
        x: xPositions[index],
      }));

      const correctAnswer = xPositions[q.options.indexOf(q.correctAnswer)];

      const formattedQuestion = {
        question: q.question, 
        answers: formattedAnswers,
        correctAnswer,
        y: 80, 
      };

      return formattedQuestion;
    });
    const savedQuestions = await Question.insertMany(updatedQuestions);

    res.status(201).json({
      success: true,
      data: savedQuestions.map(q => ({
        _id: q._id,
        question: q.question,
        answers: q.answers,
        correctAnswer: q.correctAnswer,
        y: q.y,
        __v: q.__v,
      })),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    const formattedQuestions = questions.map(q => ({
      _id: q._id,
      question: q.question,
      answers: q.answers.map(a => ({
        text: a.text,
        x: a.x,
        _id: a._id,
      })),
      correctAnswer: q.correctAnswer,
      y: q.y,
      __v: q.__v,
    }));

    res.status(200).json({
      success: true,
      data: formattedQuestions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { addQuestions, getQuestions };

