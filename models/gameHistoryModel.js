const mongoose = require("mongoose")
const gameHistorySchema = mongoose.Schema({
    studyhistory_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "StudyHistory",
    },
    game_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Game",
    },
    time:{
        type: String,
        require: true,
    },
    datetime:{
        type: String,
        require: true,
    },
    score:{
        type: Number,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("GameHistory", gameHistorySchema);