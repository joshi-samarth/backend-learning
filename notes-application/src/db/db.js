const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect('eat-5-star-do-nothing')
    console.log("connected to database")
}

module.exports = connectDB;
