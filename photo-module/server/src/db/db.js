const mongoose = require('mongoose')

async function connectdb() {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("connected");
}

module.exports = connectdb;