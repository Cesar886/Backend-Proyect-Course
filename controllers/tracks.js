const getItems = (req, res) => {
    const data = ["Hola", "Mundo"]

    res.send({data})
};
const getItem = (req, res) => {};
const createItems = (req, res) => {};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};





module.exports = { getItems, createItems, updateItems, deleteItems, getItem };