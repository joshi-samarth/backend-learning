
const musicmodel = require('../models/music.model');
const jwt = require('jsonwebtoken');

async function addmusic(req, res) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (decoded.role !== 'artist') {
                return res.status(403).json({ message: "not allowed" });
            }
        }
        catch (err) {
            return res.status(401).json({ message: "invalid token" });
        }

    }
    catch (err) {
        res.status(500).json({ message: "error adding music", error: err.message });
    }

    const { title } = req.body.title;

}

module.exports = { addmusic };