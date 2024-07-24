const express = require("express");
const { encypt } = require("../utils/handlePassword");
const { validatorRegister } = require("../validators/auth");
const { matchedData } = require("express-validator");


const router = express.Router();

router.post("/register", validatorRegister, async (req, res) => {
    req = matchedData(req);
    const password = await encypt(req.password);
    const body = { ...req, password };
    res.send({ data: body });
});

module.exports = router;