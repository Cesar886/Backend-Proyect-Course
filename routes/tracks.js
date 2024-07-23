const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
// const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

//Todo http://localhost/tracks GET, POST, DELETE, PUT
router.get("/", getItems)

router.get("/:id", validatorGetItem, getItem)

router.post("/", validatorCreateItem, createItem)

router.put("/:id", validatorCreateItem, validatorGetItem, updateItem)

router.delete("/:id", validatorGetItem, deleteItem)



module.exports = router;