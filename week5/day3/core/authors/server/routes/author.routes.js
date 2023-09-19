// import the controllers to use the instantiated

const AuthorControllers = require("../controllers/author.controllers")

console.log(AuthorControllers)

module.exports = (app) => {
    app.get("/api/author", AuthorControllers.findALLAuthors)
    app.post("/api/author", AuthorControllers.createAuthor)
    app.get("/api/author/:id", AuthorControllers.findOneAuthor)
    app.put("/api/author/:id", AuthorControllers.updateOneAuthor)
    app.delete("/api/author/:id", AuthorControllers.deleteAuthor)
}