const mongoose = require("mongoose");
const leagueSchema = mongoose.Schema({
    user:{
        type: String,
        require: true,
    },
    image: {
        type:String,
        required: true,
    },
    productName:{
        type: String,
        require: true,
    },
    score:{
        type: Number,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("League", leagueSchema);