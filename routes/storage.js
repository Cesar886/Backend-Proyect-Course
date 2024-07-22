const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");

const router = express.Router()

// .shift() agarra el primer valor de split()
// caso contrario .pop() agarra el ultimo valor de split()

router.post("/", uploadMiddleware.single("myfile"));

module.exports = router