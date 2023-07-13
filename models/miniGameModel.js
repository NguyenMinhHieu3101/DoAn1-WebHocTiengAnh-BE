const mongoose = require("mongoose");
const miniGameSchema = mongoose.Schema({
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "User",
    // },
    user:{
        type: String,
        require: true,
    },
    productName:{
        type: String,
        require: true,
    },
    count:{
        type: Number,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("MiniGame", miniGameSchema);