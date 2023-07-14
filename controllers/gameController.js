const Game1 = require("../models/game1Model.js")
const MiniGame = require("../models/miniGameModel.js")
const League = require("../models/leagueModel.js")
const getGame1 = async(req, res) => {
    const game = await Game1.find();
    res.json(game);
    return game;
}
const saveMiniGame = async(req, res) => {
    const game = await MiniGame.create(req.body);
    res.json(game);
    return game;
}
const updateLeague = async (req, res) => {
    const score = await League.create(req.body);
    res.json(score)
    return score;
}
const getLeague = async(req, res) => {
    const scores = await League.find();
    scores.sort((a, b) => b.score - a.score);
    res.json(scores);
    return scores;
}
module.exports = {getGame1, saveMiniGame, updateLeague, getLeague}