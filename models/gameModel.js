const mongoose = require("mongoose")
const gameSchema = mongoose.Schema({
   gamename:{
    type:String,
    require: [true, "Please add the game name"],
},
},{
    timestamps: true,
});
module.exports = mongoose.model("Game", gameSchema);