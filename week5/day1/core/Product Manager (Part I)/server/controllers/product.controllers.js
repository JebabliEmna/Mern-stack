const product = require("../models/product.models")

//!-------CRUD

// READ ALL
module.exports.findALLProducts = (req, res) => {
    
    product.find()
        .then(allProducts => {

            res.json({ allProducts })
        })
        .catch(err => res.json(err ))
}

// CREATE

module.exports.createProduct = (req, res) => {
    
    product.create(req.body)
        .then(newproduct => {
            res.status(200).json({
                newproduct
            })
        })
        .catch(err => res.status(400).json(err ))
}


// Find One

module.exports.findOneproduct = (req, res) => {
   
    product.findOne({ _id: req.params.id })
        .then(oneproduct => res.status(200).json({
            oneproduct
        })
        ).catch(err => { res.status(400).json(err ) })
}

// Update
module.exports.updateOneProduct = (req, res) => {
    product.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => { res.json(updatedProduct ) })
        .catch(err => { res.status(400).json(err) })
}
// Delete

module.exports.deleteProduct = (req, res) => {
    product.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json(err) })


}