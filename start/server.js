const express=require('express');

const app=express()  //it is used to create an server

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/about',(req,res)=>{
    res.send("This is About Page");
})

app.listen(3000);  //this is used to start the server

