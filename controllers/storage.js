const { storageModel } = require("../models/index")
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {

    const data = await storageModel.find({});

    res.send({ data })
};
const getItem = (req, res) => { };
const createItem = async (req, res) => {
    const { body, file } = req
    console.log("🚀 ~ createItem ~ body:", file)
    const fileDate = {
        filename: file.filename,
        url: `${ PUBLIC_URL }/${ file.filename }`
    }
    const data = await storageModel.create(fileDate)
    res.send({ data })
};
const updateItems = (req, res) => { };
const deleteItems = (req, res) => { };





module.exports = { getItems, createItem, updateItems, deleteItems, getItem };