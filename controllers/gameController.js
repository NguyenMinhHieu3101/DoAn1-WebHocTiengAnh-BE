const Game1 = require("../models/game1Model.js")
const MiniGame = require("../models/miniGameModel.js")
const League = require("../models/leagueModel.js")
const getGame1 = async (req, res) => {
  const game = await Game1.find();
  res.json(game);
  return game;
}
const saveMiniGame = async (req, res) => {
  const game = await MiniGame.create(req.body);
  res.json(game);
  return game;
}
const updateLeague = async (req, res) => {
  const score = await League.create(req.body);
  res.json(score)
  return score;
}
function calculateTotalScores(users) {
  // Tạo một đối tượng để lưu trữ tổng điểm của từng user
  const userTotals = {};

  // Tính tổng điểm cho từng user
  users.forEach(user1 => {
    const { user, score, ...otherProps } = user1;

    if (!userTotals[user]) {
      userTotals[user] = { user,score, ...otherProps };
    } else {
      userTotals[user].score += score;
    }
  });

  // Tạo một mảng user không trùng nhau từ đối tượng userTotals
  const uniqueUsers = Object.values(userTotals);

  return uniqueUsers;
}
let userTopAll, userTopThis;
const getLeague = async (req, res) => {
  let scores = await League.find(); //Lấy tất cả các lần nộp big test của tất cả học viên

  //Chuyển đổi đối tượng cứng thành đối tượng js thông thường

  scores = scores.map(score => score.toObject());

  const uniqueUsersWithTotalScores = calculateTotalScores(scores); //Tính tổng điểm của từng học viên

  uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);  //Sắp xếp giảm dần

  //Thêm thuộc tính top
  for (let i = 0; i < uniqueUsersWithTotalScores.length; i++) {
    uniqueUsersWithTotalScores[i].top = i + 1;
  }

  const currentUser = uniqueUsersWithTotalScores.find(user => user.user === req.query.user);
  userTopAll = currentUser.top;
console.log("All course",uniqueUsersWithTotalScores)
  res.json(uniqueUsersWithTotalScores);
  return uniqueUsersWithTotalScores;
};
const getLeagueThisCourse = async (req, res) => {
  let scores = await League.find({ productName: req.query.productName }); //Lấy tất cả các lần nộp big test của tất cả học viên

  //Chuyển đổi đối tượng cứng thành đối tượng js thông thường

  scores = scores.map(score => score.toObject());

  const uniqueUsersWithTotalScores = calculateTotalScores(scores); //Tính tổng điểm của từng học viên

  uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);  //Sắp xếp giảm dần

  //Thêm thuộc tính top
  for (let i = 0; i < uniqueUsersWithTotalScores.length; i++) {
    uniqueUsersWithTotalScores[i].top = i + 1;
  }

  const currentUser = uniqueUsersWithTotalScores.find(user => user.user === req.query.user);
  userTopThis = currentUser.top;
console.log("This course", uniqueUsersWithTotalScores)
  res.json(uniqueUsersWithTotalScores);
  return uniqueUsersWithTotalScores;
};

const getLeagueMeAll = async (req, res) => {
  let scores = await League.find({user:req.query.user}); //Lấy tất cả các lần nộp big test của tất cả học viên

  //Chuyển đổi đối tượng cứng thành đối tượng js thông thường

  scores = scores.map(score => score.toObject());

  const uniqueUsersWithTotalScores = calculateTotalScores(scores); //Tính tổng điểm của từng học viên

  uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);  //Sắp xếp giảm dần

  //Thêm thuộc tính top
  for (let i = 0; i < uniqueUsersWithTotalScores.length; i++) {
    uniqueUsersWithTotalScores[i].top = userTopAll;
  }
console.log("Me all course",uniqueUsersWithTotalScores)
  res.json(uniqueUsersWithTotalScores);
  return uniqueUsersWithTotalScores;
};

const getLeagueMeThis = async (req, res) => {
  let scores = await League.find({ productName: req.query.productName , user:req.query.user}); //Lấy tất cả các lần nộp big test của tất cả học viên

  //Chuyển đổi đối tượng cứng thành đối tượng js thông thường

  scores = scores.map(score => score.toObject());

  const uniqueUsersWithTotalScores = calculateTotalScores(scores); //Tính tổng điểm của từng học viên

  uniqueUsersWithTotalScores.sort((a, b) => b.score - a.score);
  //Sắp xếp giảm dần

  //Thêm thuộc tính top
  for (let i = 0; i < uniqueUsersWithTotalScores.length; i++) {
    uniqueUsersWithTotalScores[i].top = userTopThis;
  }
console.log("Me this course",uniqueUsersWithTotalScores)
  res.json(uniqueUsersWithTotalScores);
  return uniqueUsersWithTotalScores;
};
module.exports = { getGame1, saveMiniGame, updateLeague, getLeague, getLeagueThisCourse,getLeagueMeAll, getLeagueMeThis}