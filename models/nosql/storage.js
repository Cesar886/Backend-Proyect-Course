const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
    },
    {
        timestamps:true, //TODO createAD, updateAD
        versionKey:false
    },
);

StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", StorageScheme)