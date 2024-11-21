const Game = require('../models/Game');

const addGame = async (req, res) => {
  const { name, description, type } = req.body;

  try {
    const existingGame = await Game.findOne({ name });
    if (existingGame) {
      return res.status(400).json({ message: 'Game with this name already exists.' });
    }
    const game = new Game({ name, description, type });
    await game.save();

    res.status(201).json({ message: 'Game added successfully', game });
  } catch (error) {
    res.status(500).json({ message: 'Error adding game', error });
  }
};

module.exports = { addGame };
