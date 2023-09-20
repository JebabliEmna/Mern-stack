const  player= require("../models/player.models")

//!-------CRUD

// READ ALL
module.exports.findALLPlayers = (req, res) => {
    
    player.find()
        .then(allPlayers => {

            res.json({allPlayers })
        })
        .catch(err => res.json(err ))
}

// CREATE

module.exports.createPlayer = (req, res) => {
    
    player.create(req.body)
        .then(newaplayer => {
            res.status(200).json({
                newaplayer
            })
        })
        .catch(err => res.status(400).json(err ))
}


// Find One

module.exports.findOnePlayer = (req, res) => {
   
    player.findOne({ _id: req.params.id })
        .then(oneplayer => res.status(200).json({
            oneplayer
        })
        ).catch(err => { res.status(400).json(err ) })
}

// Update
module.exports.updateOnePlayer = (req, res) => {
    player.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => { res.json(updatedPlayer ) })
        .catch(err => { res.status(400).json(err) })
}
// Delete

module.exports.deletePlayer = (req, res) => {
    player.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json(err) })


}