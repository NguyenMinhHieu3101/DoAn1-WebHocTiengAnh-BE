const mongoose = require("mongoose")
const testSchema = mongoose.Schema({
    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
    content: {
        type:String,
        require: [true, "Please add the content of the test"],
    },
    time:{
        type: String,
        required: [true, "Please add the time of the test"]
    },
    testname: {        
        type:String,
        require: [true, "Please add the test name"],
    },
    order: {
        type: Number,
        require: [true,"Please add the order of test"]
    }
   
},{
    timestamps: true,
});
module.exports = mongoose.model("Test", testSchema);