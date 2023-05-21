
const express = require("express");
const {getVocab} = require("../controllers/vocabularyController");

const router = express.Router();

router.get("/getVocab",getVocab)

module.exports = router;

