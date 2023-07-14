const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: {
        type:String,
        require: [true, "Please add the user name"],
    },
    email:{
        type: String,
        required:[true, "Please add the user email address"],
        unique:[true, "Email address already taken"],
    },
    password:{
        type: String,
        required: [true, "Please add the user password"]
    },
    image:{
        type: String,
        required: false
    },
    name: {
        type:String,
        require: [true, "Please add the name"],
    },
    dateofbirth: {
        type:String,
        require: [true, "Please add the date of birth"],
    },
},{
    timestamps: true,
});
module.exports = mongoose.model("User", userSchema);
