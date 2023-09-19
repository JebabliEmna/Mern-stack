const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({

    Title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            "Price is required"
        ]
    },
    Description: {
        type: String,
        required: [
            true,
            "Description is required"
        ]
    },


}, { timestamps: true });

module.exports = mongoose.model("product",ProductSchema )