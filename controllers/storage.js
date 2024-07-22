const {storageModel} = require("../models/index")

const getItems = async (req, res) => {

    const data = await storageModel.find({});

    res.send({data})
};
const getItem = (req, res) => {};
const createItem = async (req, res) => {
    const { body, file } = req
    console.log("🚀 ~ createItem ~ body:", file)
    const fileDate = {
        filename: file.filename
    }
    // const data = await storageModel.create(body)
    res.send({file})
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};





module.exports = { getItems, createItem, updateItems, deleteItems, getItem };