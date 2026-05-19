const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')

const app = express();

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post('/upload/files', upload.single('image'), async (req, res) => {
    const result = await uploadFile(req.file.buffer);
    console.log(result);
    res.json(result);
})


module.exports = app;