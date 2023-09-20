const mongoose = require("mongoose")


const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [3, "Note Name must be at least 3 characters long"]
    }


}, { timestamps: true });

module.exports = mongoose.model("author", AuthorSchema)