const express = require("express");
const { encypt } = require("../utils/handlePassword");
const { validatorRegister } = require("../validators/auth");
const { usersModel } = require("../models");
const { matchedData } = require("express-validator");


const router = express.Router();

router.post("/register", validatorRegister, async (req, res) => {
    try {
        req = matchedData(req);
        const existingUser = await usersModel.findOne({ email: req.email });
        if (existingUser) {
            return res.status(409).send({ error: "El email ya está en uso." });
        }
        const password = await encypt(req.password);
        const body = { ...req, password };
        const data = await usersModel.create(body);
        data.set("password", undefined, { strict: false });
        res.send({ data });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ error: "El email ya está registrado." });
        } else {
            res.status(500).send({ error: "Error interno del servidor." });
        }
    }
});

module.exports = router;