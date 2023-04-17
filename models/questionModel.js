const mongoose = require("mongoose")
const questionSchema = mongoose.Schema({
    game_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Game",
    },
    questiontype_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "QuestionType",
    },
    questionname:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("Question", questionSchema);