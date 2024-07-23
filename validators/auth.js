const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator")

const validatorRegister = [
    check("name")
        .exists()
        .notEmpty()
        .isMongoId()
        .isLength({ min: 3, max: 99 }),
    check("age")
        .exists()
        .notEmpty()
        .isMongoId()
        .isNumeric(),
    check("password")
        .exists()
        .notEmpty()
        .isMongoId()
        .isLength({ min: 3, max: 15 }),
    check("email")
        .exists()
        .notEmpty()
        .isMongoId()
        .isEmail(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorLogin = [
    check("email")
        .exists()
        .notEmpty()
        .isMongoId()
        .isEmail(),
    check("password")
        .exists()
        .notEmpty()
        .isMongoId()
        .isLength({ min: 3, max: 15 }),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

module.exports = { validatorRegister, validatorLogin }