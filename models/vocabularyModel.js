const mongoose = require("mongoose")
const vocabularySchema = mongoose.Schema({
    name: {
        type:String,
        require: [true, "Please add the vocabulary name"],
    },
    meaning:{
        type: String,
        required: [true, "Please add the meaning"]
    },
    image: {
        type:String,
        require: [true, "Please add the image"],
    },
    sound: {
        type: String,
        require: [true,"Please add the sound"]
    }
   
},{
    timestamps: true,
});
module.exports = mongoose.model("Vocabulary", vocabularySchema);