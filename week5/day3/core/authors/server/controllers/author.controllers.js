const  author= require("../models/author.models")

//!-------CRUD

// READ ALL
module.exports.findALLAuthors = (req, res) => {
    
    author.find()
        .then(allAuthors => {

            res.json({allAuthors })
        })
        .catch(err => res.json(err ))
}

// CREATE

module.exports.createAuthor = (req, res) => {
    
    author.create(req.body)
        .then(newauthor => {
            res.status(200).json({
                newauthor
            })
        })
        .catch(err => res.status(400).json(err ))
}


// Find One

module.exports.findOneAuthor = (req, res) => {
   
    author.findOne({ _id: req.params.id })
        .then(oneauthor => res.status(200).json({
            oneauthor
        })
        ).catch(err => { res.status(400).json(err ) })
}

// Update
module.exports.updateOneAuthor = (req, res) => {
    author.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => { res.json(updatedAuthor ) })
        .catch(err => { res.status(400).json(err) })
}
// Delete

module.exports.deleteAuthor = (req, res) => {
    author.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json(err) })


}