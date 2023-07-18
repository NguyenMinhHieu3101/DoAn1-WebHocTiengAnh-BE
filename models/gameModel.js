const mongoose = require("mongoose");
const gameSchema = mongoose.Schema({
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

    // state: {
    //     type: String,
    //     required: [true, "Please add the game state"],
    // },
    score: {
        type: Number,
        required: [true, "Please add the game score"],
    },
        // topic:{
    //     type: String,
    //     required: [true, "Please add the game topic"],
    // },
    // question: {
    //     type: String,
    //     required: [true, "Please add the game question"],
    // },
    // answerOptions: {
    //     type: String,
    //     required: [true, "Please add the game answer options"],
    // },
    // image: {
    //     type: String,
    //     required: [true, "Please add the game image"],
    // },
    // correctAnswer: {
    //     type: String,
    //     required: [true, "Please add the game correct answer"],
    // }, 
  
}, {
    timestamps: true,
});
module.exports = mongoose.model("Game", gameSchema);