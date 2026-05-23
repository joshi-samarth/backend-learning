
const musicmodel = require('../models/music.model');
const jwt = require('jsonwebtoken');

async function addmusic(req, res) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "unauthorized" });
        }

    }
    catch (err) {
        res.status(500).json({ message: "error adding music", error: err.message });
    }

}

module.exports = { addmusic };