// import the controllers to use the instantiated

const ProductControllers = require("../controllers/product.controllers")

console.log(ProductControllers)

module.exports = (app) => {
    app.get("/api/product", ProductControllers.findALLProducts)
    app.post("/api/product", ProductControllers.createProduct)
    app.get("/api/product/:id", ProductControllers.findOneproduct)
    app.put("/api/product/:id", ProductControllers.updateOneProduct)
    app.delete("/api/product/:id", ProductControllers.deleteProduct)
}