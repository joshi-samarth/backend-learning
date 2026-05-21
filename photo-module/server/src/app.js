const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel=require('./model/post.model')

const app = express();

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post('/upload/files', upload.single('image'), async (req, res) => {
    const result = await uploadFile(req.file.buffer);
    
    const post= await postModel.create({
        image:result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message:"post created"
    })
})

app.get('/upload/get',async (req,res)=>{
    const show= await postModel.find();

    return res.status(200).json({
        message:"data send successfully",
        show

    })
})


module.exports = app;