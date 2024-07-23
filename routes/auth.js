const express = require("express");
const { validatorRegister } = require("../validators/auth");
const { matchedData } = require("express-validator");
const router = express.Router();

router.post("/register", validatorRegister, (req, res) => {
    req = matchedData(req);
    res.send({data:req})
});


// module.exports = 