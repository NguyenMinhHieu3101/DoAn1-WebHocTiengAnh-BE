const mongoose = require("mongoose")
const testResultSchema = mongoose.Schema({
    test_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Test",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    score:{
        type: Number,
        require: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("TestResult", testResultSchema);
