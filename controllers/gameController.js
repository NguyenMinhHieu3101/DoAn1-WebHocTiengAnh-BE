const Game = require("../models/gameModel.js");
const MiniGame = require("../models/miniGameModel.js");
const League = require("../models/leagueModel.js");
const Vocab = require("../models/vocabularyModel.js");

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

let userTopAll = 0, userTopThis = 0;

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

function getRandomItems(array, count) {
  const result = [];
  const length = array.length;

  // Kiểm tra nếu số lượng đối tượng cần chọn lớn hơn số lượng đối tượng trong mảng
  if (count > length) {
    throw new Error("Số lượng đối tượng cần chọn lớn hơn số lượng đối tượng trong mảng.");
  }

  // Tạo một bản sao của mảng gốc để không làm thay đổi mảng ban đầu
  const copy = array.slice();

  // Chọn ngẫu nhiên đối tượng từ mảng
  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    const randomItem = copy[randomIndex];

    // Kiểm tra xem đối tượng đã được chọn chưa
    if (!result.includes(randomItem)) {
      result.push(randomItem);
      // Xóa đối tượng đã được chọn khỏi bản sao của mảng
      copy.splice(randomIndex, 1);
    }
  }

  return result;
}
const getGamesData = async (req, res) => {
  try {
    let productName = req.query.courseName;
    let games = await Game.find();

    const vocabs = await Vocab.find({ topic: productName.toLowerCase() });

    games = games.map(game => game.toObject());
    games = games.sort((a, b) => a.lesson - b.lesson);

    const randomVocabs = getRandomItems(vocabs, 4);
    console.log(randomVocabs + "Số lương: ", randomVocabs.length);

    for (let i = 0; i < games.length; i++) {
      games[i].topic = req.query.courseName;
      games[i].state = false;
      switch (games[i].category) {
        case 'Game1':
          {
            const answerVocabs = getRandomItems(randomVocabs, 1);
            games[i].question = `What does "${answerVocabs[0].name}" means in Vietnamese?`
            let answerLetter = '';

            let answerOptions = [];
            for (let j = 0; j < randomVocabs.length; j++) {
              if(randomVocabs[j].name === answerVocabs[0].name) {
                answerLetter = String.fromCharCode(65 + j);
              }
              const option = {
                id: String.fromCharCode(65 + j),
                text: randomVocabs[j].meaning
              };
              answerOptions.push(option);
            }
            console.log("4 cái đáp án nè: " + JSON.stringify(answerOptions));
            games[i].answerOptions = answerOptions;

            games[i].correctAnswer = answerLetter;
            games[i].correctText = answerVocabs[0].meaning;

            break;
          }
        case 'Game2':
          {
            const randomVocab = getRandomItems(vocabs, 1);
            games[i].vietnamesePhrase = randomVocab[0].meaning;
            games[i].image = randomVocab[0].image;
            games[i].correctAnswer = randomVocab[0].name;
            games[i].correctText = randomVocab[0].name;
            games[i].question = `Write the meaning in English of "${randomVocab[0].meaning}"`;    
          }
          break;
        case 'Game3':
          {

          }
          break;
        case 'Game4':
          {

          }
          break;
        default:
          break;
      }
    }
    res.json(games);
    return games;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports = {
  getGame1,
  saveMiniGame,
  updateLeague,
  getLeague,
  getLeagueThisCourse,
  getLeagueMeAll,
  getLeagueMeThis,
  getGamesData
};
