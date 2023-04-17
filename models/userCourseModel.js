const mongoose = require("mongoose")
const userCourseSchema = mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    starttime:{
        type: String,
        require: true,
    },
    endtime:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("UserCourse", userCourseSchema);