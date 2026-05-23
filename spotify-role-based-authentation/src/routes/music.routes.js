const express = require('express');
const musiccontroller = require('../controller/music.controller')
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
});

router.post('/music', upload.single('music') ,musiccontroller.addmusic);


module.exports = router;