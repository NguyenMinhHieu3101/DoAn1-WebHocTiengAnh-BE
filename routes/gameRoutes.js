const express = require("express");
const {getGame1, saveMiniGame, updateLeague, getLeague, getLeagueThisCourse, getLeagueMeAll, getLeagueMeThis} = require("../controllers/gameController");

const router = express.Router();

router.get("/getGame1",getGame1)
router.post("/saveMiniGame",saveMiniGame)
router.post("/saveLeague",updateLeague)
router.get("/getLeague",getLeague)
router.get("/getLeagueThisCourse",getLeagueThisCourse)
router.get("/getLeagueMeAll",getLeagueMeAll)
router.get("/getLeagueMeThis",getLeagueMeThis)
module.exports = router;
