const express = require("express");
const {getGame1, saveMiniGame, updateLeague, getLeague} = require("../controllers/gameController");

const router = express.Router();

router.get("/getGame1",getGame1)
router.post("/saveMiniGame",saveMiniGame)
router.post("/saveLeague",updateLeague)
router.get("/getLeague",getLeague)
module.exports = router;
