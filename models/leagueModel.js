const mongoose = require("mongoose");
const leagueSchema = mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    image: {
        type:String,
        required: false,
    },
    productName:{
        type: String,
        required: true,
    },
    score:{
        type: Number,
        required: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("League", leagueSchema);