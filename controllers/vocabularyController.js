const User = require("../models/userModel")
const path = require('path');
const vocabularyModel = require("../models/vocabularyModel");

//@desc GetVocabulary
//@route POST/api/users/current
//@access private

// const getVocab = async (req, res) => {
//     const vocab = await vocabularyModel.create({
//         name: "comet",
//         meaning:"Sao chổi",
//         image: "a",
//         sound:"/ˈkɑː.mɪt/"
//     })
//     console.log(`User Created ${vocab}`)

    // const say = require('say');
    // say.speak("")
    // res.json({ message: "Add vocab successfully." })
// }
const getVocab = async(req, res) => {
    const topic = req.body.topic;
    const vocab = await vocabularyModel.find({topic});
    res.json(vocab);
    return vocab;
}
module.exports = {getVocab}