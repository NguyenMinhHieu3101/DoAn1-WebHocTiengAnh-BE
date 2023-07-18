const mongoose = require("mongoose");
const game3Schema = mongoose.Schema({
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
    topic:{
        type: String,
        required: [true, "Please add the game topic"],
    },
    lessonTitle: {
        type: String,
        required: [true, "Please add the game lesson title"],
    },
    state: {
        type: String,
        required: [true, "Please add the game state"],
    },
    // question: {
    //     type: String,
    //     required: [true, "Please add the game question"],
    // },
    // textOptions: {
    //     type: String,
    //     required: [true, "Please add the game answer options"],
    // },
    // answerOptions: {
    //     type: String,
    //     required: [true, "Please add the game answer options"],
    // },
    // correctAnswer: {
    //     type: String,
    //     required: [true, "Please add the game correct answer"],
    // }, 
    // correctText: {
    //     type: String,
    //     required: [true, "Please add the game correct answer"],
    // }, 
    score: {
        type: Number,
        required: [true, "Please add the game score"],
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model("Game3", game3Schema);