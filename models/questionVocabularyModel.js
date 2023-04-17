const mongoose = require("mongoose")
const questionVocabularySchema = mongoose.Schema({
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Question",
    },
    vocabulary_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Vocabulary",
    },
    detailAnswer:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("QuestionVocabulary", questionVocabularySchema);