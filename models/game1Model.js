const mongoose = require("mongoose");
const game1Schema = mongoose.Schema({
    kind: {
        type: String,
        required: [true, "Please add the game kind"],
    },
    category: {
        type: String,
        required: [true, "Please add the game category"],
    },
    lesson: {
        type: String,
        required: [true, "Please add the game lesson"],
    },
    topic: {
        type: String,
        required: [true, "Please add the game topic"],
    },
    lessonTitle: {
        type: String,
        required: [true, "Please add the game lesson title"],
    },
    question: {
        type: String,
        required: [true, "Please add the game question"],
    },
    answerOptions: {
        type: Array,
        required: [true, "Please add the game answer options"],
    },
    image: {
        type: String,
        required: [true, "Please add the game image"],
    },
    correctAnswer: {
        type: String,
        required: [true, "Please add the game correct answer"],
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model("Game1", game1Schema);