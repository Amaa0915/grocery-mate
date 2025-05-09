const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const InventorySchema = new Schema({
    itemNo : {
        type : Number,  // datatype
        required : true, //validation
    },

    name : {
        type : String,  // datatype
        required : true, //validation
    },

    description : {
        type : String,  // datatype
        required : true, //validation
    },

    category : {
        type : String,  // datatype
        required : true, //validation
    },

    stock : {
        type : Number,  // datatype
        required : true, //validation
    },
});

const Invent = model("inventory", InventorySchema);

module.exports = Invent;