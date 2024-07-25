const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
// const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const authMiddleware = require("../middleware/session");
const { check } = require("express-validator");
const router = express.Router();

//Todo http://localhost/tracks GET, POST, DELETE, PUT
router.get("/", authMiddleware, getItems)

router.get("/:id", validatorGetItem, check([" admin "]), getItem)

router.post("/", validatorCreateItem, createItem)

router.put("/:id", validatorCreateItem, validatorGetItem, updateItem)

router.delete("/:id", validatorGetItem, deleteItem)



module.exports = router;