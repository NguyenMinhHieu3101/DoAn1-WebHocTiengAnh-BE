const mongoose = require("mongoose")
const videoSchema = mongoose.Schema({
    name: {
        type:String,
        require: [true, "Please add the name"],
    },
    image:{
        type: String,
        required: false,
    },
    des: {
        type:String,
        require: [true, "Please add the name"],
    },
    link: {
        type:String,
        require: [true, "Please add the name"],
    }

},{
    timestamps: true,
});
module.exports = mongoose.model("Video", videoSchema);