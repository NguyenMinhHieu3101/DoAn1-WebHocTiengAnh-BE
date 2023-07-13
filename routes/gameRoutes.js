const express = require("express");
const {getGame1, saveMiniGame} = require("../controllers/gameController");

const router = express.Router();

router.get("/getGame1",getGame1)
router.post("/saveMiniGame",saveMiniGame)
module.exports = router;
