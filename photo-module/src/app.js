const express = require('express')
const model = require('./model/post.model')
const multer = require('multer')

const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })



module.exports = app;