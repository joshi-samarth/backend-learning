const usermodel = require('../model/user.model')
const jwt = require('jsonwebtoken')

async function register(req, res) {
    const { username, email, password } = req.body;

    const user = await usermodel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.status(201).json({
        message: "done",
        user,
        token
    })
}

module.exports = { register };