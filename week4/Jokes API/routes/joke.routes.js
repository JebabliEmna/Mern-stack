const JokeControllers = require("../controller/joke.controller")

console.log(JokeControllers)


module.exports = (app) => {
    app.get("/api/jokes ", JokeControllers.findAlljokes)
    app.post("/api/jokes", JokeControllers.createjoke)

} 

