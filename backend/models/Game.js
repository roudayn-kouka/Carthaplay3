const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  lesson: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  level: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }], 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', GameSchema);
