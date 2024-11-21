
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const QuestionRoutes = require('./routes/QuestionRoutes')
const gameRoutes = require('./routes/gameRoutes')

const app = express();
const cors = require('cors');


connectDB();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/question', QuestionRoutes);
app.use('/api/game', gameRoutes);


module.exports = app;
