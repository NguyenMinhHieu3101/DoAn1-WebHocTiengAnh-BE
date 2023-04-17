const mongoose = require("mongoose")
const lessonGameSchema = mongoose.Schema({
    lesson_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Lesson",
    },
    game_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Game",
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("LessonGame", lessonGameSchema);