const Game1 = require("../models/game1Model.js")
const MiniGame = require("../models/miniGameModel.js")
const getGame1 = async(req, res) => {
    const game = await Game1.find();
    res.json(game);
    return game;
}
const saveMiniGame = async(req, res) => {
    console.log('Tới đây rồi');
    const game = await MiniGame.create(req.body);
    res.json(game);
    return game;
}
module.exports = {getGame1, saveMiniGame}