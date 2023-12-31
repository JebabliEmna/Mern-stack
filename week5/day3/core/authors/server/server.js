const express = require("express")
const cors = require("cors")

const app = express()

// --- MIDDLEWARE --
app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors())


require("dotenv").config()

require("./config/mongoose.config")

const port = process.env.PORT

require("./routes/author.routes.js")(app)



app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port} `)
})  
