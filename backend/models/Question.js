const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: { type: String, required: true },
  x: { type: Number }, 
});

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answers: [answerSchema],
  correctAnswer: { type: Number, required: true }, 
  y: { type: Number, default: 80 },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;