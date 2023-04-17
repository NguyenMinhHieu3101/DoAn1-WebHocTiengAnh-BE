const mongoose = require("mongoose")
const courseSchema = mongoose.Schema({
    coursename: {
        type:String,
        require: [true, "Please add the course name"],
    },
    description:{
        type: String,
        required: [true, "Please add the description"]
    },
    image: {
        type:String,
        require: [true, "Please add the image"],
    },
    maxcandidates: {
        type: Number,
        require: [true,"Please add the max number of candidates"]
    }, 
    creatorname: {
        type:String,
        require: [true, "Please add the creator name"],
    },
   
},{
    timestamps: true,
});
module.exports = mongoose.model("Course", courseSchema);