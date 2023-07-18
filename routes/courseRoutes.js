const express = require("express");
const {getCourses, getVideos} = require("../controllers/courseController");

const router = express.Router();

router.get("/getCourses",getCourses)
router.get("/getVideos",getVideos)

module.exports = router;

