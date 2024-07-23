const { tracksModel } = require("../models/index");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {

    try {

        const data = await tracksModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR EN GET ITEMS')
    }

};
const createItem = async (req, res) => {

    try {

        const { body } = req
        console.log("🚀 ~ createItem ~ body:", body)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR EN GET ITEMS')
    }

};

const getItem = (req, res) => { };
const updateItems = (req, res) => { };
const deleteItems = (req, res) => { };





module.exports = { getItems, createItem, updateItems, deleteItems, getItem };