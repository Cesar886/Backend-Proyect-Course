const {tracksModel} = require("../models/index")

const getItems = async (req, res) => {

    const data = await tracksModel.find({});

    res.send({data})
};
const getItem = (req, res) => {};
const createItem = async (req, res) => {
    const { body } = req
    console.log("🚀 ~ createItem ~ body:", body)
    const data = await tracksModel.create(body)
    res.send({data})
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};





module.exports = { getItems, createItem, updateItems, deleteItems, getItem };