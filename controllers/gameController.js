const Game1 = require("../models/game1Model.js");
const MiniGame = require("../models/miniGameModel.js");
const League = require("../models/leagueModel.js");

const getGame1 = async (req, res) => {
  try {
    const game = await Game1.find();
    res.json(game);
    return game;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const saveMiniGame = async (req, res) => {
  try {
    const game = await MiniGame.create(req.body);
    res.json(game);
    return game;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateLeague = async (req, res) => {
  try {
    const score = await League.create(req.body);
    res.json(score);
    return score;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

function calculateTotalScores(users) {
  const userTotals = {};

  users.forEach(user1 => {
    const { user, score, ...otherProps } = user1;

    if (!userTotals[user]) {
      userTotals[user] = { user, score, ...otherProps };
    } else {
      userTotals[user].score += score;
    }
  });

  const uniqueUsers = Object.values(userTotals);

  return uniqueUsers;
}

let userTopAll, userTopThis;

const getLeague = async (req, res) => {
  try {
    let scores = await League.find();

    scores = scores.map(score => score.toObject());

    const uniqueUsersWithTotalScores = calculateTotalScores(scores);

    uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < uniqueUsersWithTotalScores.length; i++) {
      uniqueUsersWithTotalScores[i].top = i + 1;
    }

    const currentUser = uniqueUsersWithTotalScores.find(user => user.user === req.query.user);
    userTopAll = currentUser ? currentUser.top : undefined;

    console.log("All course", uniqueUsersWithTotalScores);
    res.json(uniqueUsersWithTotalScores);
    return uniqueUsersWithTotalScores;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getLeagueThisCourse = async (req, res) => {
  try {
    let scores = await League.find({ productName: req.query.productName });

    scores = scores.map(score => score.toObject());

    const uniqueUsersWithTotalScores = calculateTotalScores(scores);

    uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < uniqueUsersWithTotalScores.length; i++) {
      uniqueUsersWithTotalScores[i].top = i + 1;
    }

    const currentUser = uniqueUsersWithTotalScores.find(user => user.user === req.query.user);
    userTopThis = currentUser ? currentUser.top : undefined;

    console.log("This course", uniqueUsersWithTotalScores);
    res.json(uniqueUsersWithTotalScores);
    return uniqueUsersWithTotalScores;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getLeagueMeAll = async (req, res) => {
  try {
    let scores = await League.find({ user: req.query.user });

    scores = scores.map(score => score.toObject());

    const uniqueUsersWithTotalScores = calculateTotalScores(scores);

    uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);

    if (uniqueUsersWithTotalScores.length > 0) {
      uniqueUsersWithTotalScores[0].top = userTopAll;
    }

    console.log("Me all course", uniqueUsersWithTotalScores);
    res.json(uniqueUsersWithTotalScores);
    return uniqueUsersWithTotalScores;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getLeagueMeThis = async (req, res) => {
  try {
    let scores = await League.find({ productName: req.query.productName, user: req.query.user });

    scores = scores.map(score => score.toObject());

    const uniqueUsersWithTotalScores = calculateTotalScores(scores);

    uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);

    if (uniqueUsersWithTotalScores.length > 0) {
      uniqueUsersWithTotalScores[0].top = userTopThis;
    }

    console.log("Me this course", uniqueUsersWithTotalScores);
    res.json(uniqueUsersWithTotalScores);
    return uniqueUsersWithTotalScores;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getGame1,
  saveMiniGame,
  updateLeague,
  getLeague,
  getLeagueThisCourse,
  getLeagueMeAll,
  getLeagueMeThis
};
