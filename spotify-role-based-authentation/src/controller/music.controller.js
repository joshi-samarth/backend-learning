const musicmodel = require('../models/music.model');
const jwt = require('jsonwebtoken');
const { uploadfile } = require('../services/music.service');

async function addmusic(req, res) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== 'artist') {
            return res.status(403).json({ message: "not allowed" });
        }

        const { title } = req.body;
        const file = req.file;

        if (!title) {
            return res.status(400).json({ message: "title is required" });
        }

        if (!file) {
            return res.status(400).json({ message: "file is required" });
        }

        const result = await uploadfile(file.buffer.toString('base64'));

        const music = await musicmodel.create({
            title,
            uri: result.url,
            artist: decoded.id
        });

        return res.status(201).json({ message: "music added successfully", music });
    }
    catch (err) {
        return res.status(500).json({ message: "error adding music", error: err.message });
    }

}

module.exports = { addmusic };