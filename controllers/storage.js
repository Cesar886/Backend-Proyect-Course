const { matchedData } = require("express-validator");
const fs = require("fs");
const { storageModel } = require("../models/index");
const { handleHttpError } = require("../utils/handleError");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR LIST ITEM')
    }
};

const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await storageModel.findById(id);
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR GET ITEM')
    }
};

const createItem = async (req, res) => {
    const { body, file } = req
    console.log("🚀 ~ createItem ~ body:", file)
    const fileDate = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileDate)
    res.send({ data })
};

const updateItem = async (req, res) => { };

const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne(id)
        // await storageModel.delete({_id:id}) asi quedaria para que no se borren en la db
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        // fs.unlinkSync(filePath); asi seria para que no se borre en la db
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR DETAILS ITEM')
    }
};





module.exports = { getItems, createItem, updateItem, deleteItem, getItem };