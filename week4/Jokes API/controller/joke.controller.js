// to import the Model

const { Joke } = require("../models/joke.model")

module.exports.findAlljokes = (req, res) => {
    Joke.find()
        .then(alljokes => {
            res.json({ alljokes })
        })
        .catch(err => { res.json({ message: "wait a minute " }) })
}
module.exports.createjoke = (req, res) => {
    // db.Food.insert({name,price})
    Food.create(req.body)
        .then(createjoke => {
            res.json({ createjoke })
        })
        .catch(err => { res.json({ message: "wait a minute" }) })
}