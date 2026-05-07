const mongoose = require('mongoose')

async function connectdb() {
    await mongoose.connect("mongodb+srv://root-ueser:7u4AN4dUAkHvtrs7@cluster0.tuevhvk.mongodb.net/photo-application")
    console.log("connected");
}

module.exports = connectdb;