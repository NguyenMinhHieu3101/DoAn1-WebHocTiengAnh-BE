const courseModel = require("../models/courseModel");
const videoModel = require("../models/videoModel");
const getCourses = async(req, res) => {
    const courses = await courseModel.find();
    courses.sort((a, b) => b.amount - a.amount);
    res.json(courses);
    return courses;
}
const getVideos = async(req, res) => {
    const videos = await videoModel.find();
    res.json(videos);
    return videos;
}


module.exports = {getCourses, getVideos}