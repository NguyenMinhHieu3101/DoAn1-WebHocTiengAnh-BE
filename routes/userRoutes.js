
const express = require("express");
const {registerUser, loginUser, currentUser, changeInfo, getUserCourse,saveUserCourse,getContinueCourses, changePassword} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler")
const router = express.Router();
router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/current",validateToken, currentUser)
router.put("/changeInfo",changeInfo)
router.put("/changePassword",changePassword)
router.get("/getUsersCourses", getUserCourse)
router.post("/saveUserCourse", saveUserCourse)
router.get("/getContinueCourses", getContinueCourses)
module.exports = router;

