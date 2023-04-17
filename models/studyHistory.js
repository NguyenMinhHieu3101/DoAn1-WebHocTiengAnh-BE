const mongoose = require("mongoose")
const studyHistorySchema = mongoose.Schema({
    user_course_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "UserCourse",
    },
    lesson_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Lesson",
    },
    studydate:{
        type: String,
        require: true,
    },
    starttime:{
        type: String,
        require: true,
    },
    endtime:{
        type:  String,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("StudyHistory", studyHistorySchema);