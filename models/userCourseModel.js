const mongoose = require("mongoose")
const userCourseSchema = mongoose.Schema({
    course: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});
module.exports = mongoose.model("UserCourse", userCourseSchema);