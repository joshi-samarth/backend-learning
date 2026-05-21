const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    image: String,
    Caption: String
})

const model = mongoose.model("post", schema);

module.exports = model;