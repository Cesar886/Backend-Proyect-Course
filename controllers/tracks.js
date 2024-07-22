const {tracksModel} = require('../models/index')

const getItems = async (req, res) => {

    const data = await tracksModel.find({});

    res.send({data})
};
const getItem = (req, res) => {};
const createItems = (req, res) => {};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};





module.exports = { getItems, createItems, updateItems, deleteItems, getItem };