const { matchedData } = require("express-validator");
const { encypt } = require("../utils/handlePassword");
const { tokenSing } = require("../utils/handlejwt");
const { usersModel } = require("../models");
const { compare } = require('bcrypt');
const { handleHttpError } = require("../utils/handleError");


const registerCtrl = async (req, res) => {
    try {
        req = matchedData
            (req);
        const password = await encypt(req.password);
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSing(dataUser),
            user: dataUser
        }
        res.send({ data });
    } catch (e) {
        handleHttpError("ERROR_REGISTER_USER", res);
    }
};

const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email })
        .select("password name role email "); // Corregido aquí
        if (!user) {
            handleHttpError("ERROR_USER_NO_EXISTS", 404);
            return;
        }

        const hashPassword = user.password;
        // console.log("🚀 ~ loginCtrl ~ hashPassword:", hashPassword)
        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError("ERROR_PASSWORD_INVALID", 401);
            return;
        }

        user.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSing(user),
            user
        }

        res.send({ data });
    } catch (error) {
        console.error(error);
        handleHttpError(res, "ERROR_LOGIN_USER");
    }
}



module.exports = { registerCtrl, loginCtrl };