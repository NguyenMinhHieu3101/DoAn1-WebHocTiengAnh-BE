const mongoose = require("mongoose")
const courseLessonSchema = mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
    lesson_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Lesson",
    },
    order:{                  
        type: Number,
        require: true,
    },
},{
    timestamps: true,
});
module.exports = mongoose.model("CourseLesson", courseLessonSchema);