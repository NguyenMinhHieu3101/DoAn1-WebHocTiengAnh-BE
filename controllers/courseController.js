// const { getDownloadURL } = require('firebase/storage');
// const { storage } = require('../firebase/firebase.js');
// const { ref } = require ('firebase/storage');

const User = require("../models/userModel")
const path = require('path');
const courseModel = require("../models/courseModel");


const getCourses = async(req, res) => {
    const course = await courseModel.find();
    // for (let i = 0; i < course.length; i++){
    //     let downloadURL = await getDownloadURL(ref(storage, 'courses/'+course[i].image));
    //     course[i].image = downloadURL;
    // }
    res.json(course);
    return course;
}
module.exports = {getCourses}