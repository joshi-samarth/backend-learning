const express = require('express');
const musiccontroller = require('../controller/music.controller')
const router = express.Router();

router.post('/music', musiccontroller.addmusic);


module.exports = router;