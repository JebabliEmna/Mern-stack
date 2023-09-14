const express = require("express")

const app = express()

// --- MIDDLEWARE --
app.use(express.json(), express.urlencoded({ extended: true }))

require("dotenv").config()

require("./config/mongoose.config")


const port = process.env.PORT

const JOKES = require("./routes/joke.routes.js")
JOKES(app)

app.listen(port, () => {
    console.log(`>>>>> Server is running on Prot ${port}`)
})