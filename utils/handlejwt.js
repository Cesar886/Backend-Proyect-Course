// const jwt = require("jsonwebtoken")
const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const tokenSing = async (user) => {
    const sing = await jsonwebtoken.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );
    return sing;
}

require('dotenv').config();

const verifyToken = async (tokenJwt) => {
    try {
        return jsonwebtoken.verify(tokenJwt, JWT_SECRET)
    } catch (e) {
        return null
    }
}


module.exports = { tokenSing, verifyToken };