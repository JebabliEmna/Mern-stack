const mongoose = require("mongoose")


const PlayerSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: [true,"Title is required"],
        minlength: [2, "Note Name must be at least 2 characters long"]
    },
    Position: {
        type: String,
    }

}, { timestamps: true });

module.exports = mongoose.model("player",PlayerSchema )