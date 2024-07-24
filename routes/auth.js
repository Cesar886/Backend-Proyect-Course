const express = require("express");
const { encypt } = require("../utils/handlePassword");
const { validatorRegister } = require("../validators/auth");
const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { tokenSing } = require("../utils/handlejwt");


const router = express.Router();

router.post("/register", validatorRegister, async (req, res) => {
    req = matchedData(req);
    const password = await encypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }
    res.send({ data });
});

module.exports = router;