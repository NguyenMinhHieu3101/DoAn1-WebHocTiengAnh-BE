const mongoose = require("mongoose")
const questionTypeSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    discription:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
});      
module.exports = mongoose.model("QuestionType", questionTypeSchema);