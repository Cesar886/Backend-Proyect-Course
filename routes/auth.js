const express = require("express");
const { validatorRegister } = require("../validators/auth");
const { matchedData } = require("express-validator");
const router = express.Router();

router.post("/register", validatorRegister, (req, res) => {
    req = matchedData(req);
    res.send({data:req});
});

// Aquí se exporta el router para que pueda ser utilizado por otros archivos, como tu archivo index.js
module.exports = router;