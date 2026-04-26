const mongoose=require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://samarth:n9eI0zQH0g6eNi5o@backend-learning.jwatcmf.mongodb.net/photo-application')
    console.log("connected to database")
}

module.exports=connectDB;