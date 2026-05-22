const usermodel = require('../model/user.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    try {
        const { username, email, password, role } = req.body;

        

        const user = await usermodel.create({ username, email, password, role });
        res.status(201).json({ message: "user registered successfully", user });
    }
    catch (err) {
        res.status(500).json({ message: "error registering user", error: err.message }); 
    }
}

module.exports = { register };
