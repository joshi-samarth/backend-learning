const usermodel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function register(req, res) {
    try {
        const { username, email, password, role = 'user' } = req.body;


        const isuserpresent = await usermodel.findOne({
            $or:
                [
                    { username }, { email }
                ]
        });

        if (isuserpresent) {
            return res.status(400).json({ message: "user already exists" });
        }
        else {

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await usermodel.create({ username, email, password: hashedPassword, role });
            const token = jwt.sign({
                id: user._id,
                role: user.role
            }, process.env.JWT_SECRET)

            res.cookie("token", token);
            res.status(201).json({ message: "user registered successfully", user });
        }

    }
    catch (err) {
        res.status(500).json({ message: "error registering user", error: err.message });
    }
}


async function login(req, res) {
    try {
        const { username, email, password, role = 'user' } = req.body;

        const user = await usermodel.findOne({
            $or: [
                { username }, { email }
            ]
        });

        if (!user) {
            return res.status(401).json({ message: "invalid creditionlas" })
        }

        const ispasswordmatch = await bcrypt.compare(password, user.password);

        if (!ispasswordmatch) {
            return res.status(401).json({ message: "invalid credentials" });
        }


        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET);

        res.cookie("token", token);
        res.status(200).json({ message: "user logged in successfully", user });

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { register, login };
