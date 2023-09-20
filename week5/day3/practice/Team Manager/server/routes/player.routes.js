// import the controllers to use the instantiated

const PlayerControllers = require("../controllers/player.controllers")

console.log(PlayerControllers)

module.exports = (app) => {
    app.get("/api/player", PlayerControllers.findALLPlayers)
    app.post("/api/player", PlayerControllers.createPlayer)
    app.get("/api/player/:id", PlayerControllers.createPlayer)
    app.put("/api/player/:id",PlayerControllers.updateOnePlayer)
    app.delete("/api/player/:id", PlayerControllers.deletePlayer)
}