const courseModel = require("../models/courseModel");
const getCourses = async(req, res) => {
    const courses = await courseModel.find();
    courses.sort((a, b) => b.amount - a.amount);
    res.json(courses);
    return courses;
}

module.exports = {getCourses}