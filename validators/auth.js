const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator")

const validatorRegister = [
    check("name")
        .exists()
        .withMessage("El campo 'name' es requerido")
        .notEmpty()
        .withMessage("El campo 'name' no debe estar vacío")
        .isLength({ min: 3, max: 99 })
        .withMessage("El campo 'name' debe tener entre 3 y 99 caracteres"),
    check("age")
        .exists()
        .withMessage("El campo 'age' es requerido")
        .notEmpty()
        .withMessage("El campo 'age' no debe estar vacío")
        .isNumeric()
        .withMessage("El campo 'age' debe ser numérico"),
    check("password")
        .exists()
        .withMessage("El campo 'password' es requerido")
        .notEmpty()
        .withMessage("El campo 'password' no debe estar vacío")
        .isLength({ min: 3, max: 15 })
        .withMessage("El campo 'password' debe tener entre 3 y 15 caracteres"),
    check("email")
        .exists()
        .withMessage("El campo 'email' es requerido")
        .notEmpty()
        .withMessage("El campo 'email' no debe estar vacío")
        .isEmail()
        .withMessage("Debe ser un correo electrónico válido"),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

const validatorLogin = [
    check("email")
        .exists()
        .withMessage("El campo 'email' es requerido")
        .notEmpty()
        .withMessage("El campo 'email' no debe estar vacío")
        .isEmail()
        .withMessage("Debe ser un correo electrónico válido"),
    check("password")
        .exists()
        .withMessage("El campo 'password' es requerido")
        .notEmpty()
        .withMessage("El campo 'password' no debe estar vacío")
        .isLength({ min: 3, max: 15 })
        .withMessage("El campo 'password' debe tener entre 3 y 15 caracteres"),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
]

module.exports = { validatorRegister, validatorLogin }