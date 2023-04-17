const mongoose = require("mongoose")
const lessonSchema = mongoose.Schema({
    lessonname: {
        type:String,
        require: [true, "Please add the lesson name"],
    },
    content:{
        type: String,
        required: [true, "Please add the content"]
    },
    image: {
        type:String,
        require: [true, "Please add the image"],
    },
   
},{
    timestamps: true,
});
module.exports = mongoose.model("Lesson", lessonSchema);