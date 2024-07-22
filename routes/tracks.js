const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const router = express.Router();

//Todo http://localhost/tracks GET, POST, DELETE, PUT

router.get("/",getItems)
router.post("/",createItem)


module.exports = router 