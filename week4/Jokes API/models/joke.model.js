// import mongoose to build the model

const mongoose = require("mongoose")

// the model - the rules of the entries that we need to follow


const JokeSchema = new mongoose.Schema({

    setup: {
        type: String
    },
    punchline: {
        type: Number
    }

}, { timestamps: true })

module.exports.joke = mongoose.model("joke", JokeSchema)