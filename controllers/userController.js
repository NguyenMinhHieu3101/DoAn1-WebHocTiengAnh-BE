const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
const Course = require("../models/courseModel")
const UserCourse = require("../models/userCourseModel")
const path = require('path');

//@desc Register a user
//@route POST/api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, name, dateofbirth } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email })
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash password
  // const hashedPassword = await bcrypt.hash(password, 10);
  // console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password, // password: hashedPassword,
    name,
    dateofbirth
  })
  console.log(`User Created ${user}`)
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });

  } else {
    res.status(400);
    throw new Error("User data is invalid")
  }

  res.json({ message: "Register the user" })
});

//@desc Login user
//@route POST/api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email, password });
  console.log(user)
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
  // if (user && (await bcrypt.compare(password, user.password))) {
  //     const accessToken = jwt.sign({
  //         user: {
  //             username: user.username,
  //             email: user.email,
  //             id: user.id,
  //         },
  //     },
  //         process.env.ACCESS_TOKEN_SECRET,
  //        { expiresIn: "3m" }
  //        )
  //         ;

  //     res.status(200).json({ user })


  // } else {
  //     res.status(401)
  //     throw new Error("email or password is not valid");
  // }
});

//@desc Current user info
//@route POST/api/users/current
//@access private
const currentUser = asyncHandler((req, res) => {
  res.json(req.user)
});
//@desc Current user info
//@route PUT/api/users/changeInfo
//@access public
const changeInfo = async (req, res) => {
  const updatedUser = req.body;
  console.log(req.body)
  const user = await User.findByIdAndUpdate({_id: req.body._id, password : req.body.password}, updatedUser, { new: true });
  if (user) {
    res.status(200).json({ user });
  } else { 
    res.status(404).json({ message: "User not found" });
  }

};
const changePassword = async (req, res) => {
  const updatedPassword = req.body;
  const user_full = await User.findOne({ email: updatedPassword.email });
  const id_user = user_full._id;


  const user = await User.findByIdAndUpdate(id_user, updatedPassword, { new: true });
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
  console.log(user);

};

const getUserCourse = async (req, res) => {
  const users_courses = await UserCourse.find();
  res.json(users_courses);
  return users_courses;
}
const saveUserCourse = async (req, res) => {
  const { user, course } = req.body;
  try {
    const userCourse = await UserCourse.findOne({ user, course });

    if (!userCourse) {
      const newUserCourse = await UserCourse.create({ user, course });
      const updatedCourse = await Course.findOne({ name: course });
      updatedCourse.amount = updatedCourse.amount + 1;
      await Course.findByIdAndUpdate(updatedCourse._id, updatedCourse);
      console.log(newUserCourse);
      res.json(newUserCourse);
      console.log(`User Course Created: ${newUserCourse}`);
      return newUserCourse;
    }
    else {
      // If userCourse exists, you can handle the scenario accordingly
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getContinueCourses = async (req, res) => {
  try {
    console.log(req.query.user)
    const continueCourses = await UserCourse.find();

    const filteredCourses = continueCourses.filter((course) => course.user == req.query.user);
    const courses_name = filteredCourses.map((course) => course.course);
    const courses = await Course.find({ name: { $in: courses_name } });


    res.json(courses);
    return courses;
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { registerUser, loginUser, currentUser, changeInfo, getUserCourse, saveUserCourse, getContinueCourses, changePassword }