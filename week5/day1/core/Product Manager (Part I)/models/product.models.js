const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({

    Title: {
        type: String,
    },
    price: {
        type: Number,
    },
    Description: {
        type: String,
    },


}, { timestamps: true });

module.exports = mongoose.model("product",ProductSchema )