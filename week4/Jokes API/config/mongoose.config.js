const mongoose = require("mongoose")

const myDB = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27017/${myDB}`)
    .then(() => console.log(`Established a connection to the database ${myDB}`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err))