const courseModel = require("../models/courseModel");
const getCourses = async(req, res) => {
    const course = await courseModel.find();
    res.json(course);
    return course;
}
module.exports = {getCourses}