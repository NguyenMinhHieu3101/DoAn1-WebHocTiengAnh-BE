const mongoose = require("mongoose");
const game2Schema = mongoose.Schema({
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
    // vietnamesePhrase:{
    //     type: String,
    //     required: [true, "Please add the game vietnamese phrase"],
    // },
    // image: {
    //     type: String,
    //     required: [true, "Please add the game image"],
    // },
    // correctAnswer: {
    //     type: String,
    //     required: [true, "Please add the game correct answer"],
    // }, 
    // correctText:{
    //     type: String,
    //     required: [true, "Please add the game correct text"],
    // },
    score: {
        type: Number,
        required: [true, "Please add the game score"],
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model("Game2", game2Schema);