const { matchedData } = require("express-validator");
const { tracksModel } = require("../models/index");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR GET ITEMS')
    }
};

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR CREATE_ITEMS ITEMS')
    }

};

const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req;
        const data = await tracksModel.findById(id);
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR GET ITEM")
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(
            id, body
        );
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR UPDATE_ITEMS ITEMS')
    }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.deleteOne({ _id: id });
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR DELETE ITEM')
    }
};





module.exports = { getItems, createItem, updateItem, deleteItem, getItem };