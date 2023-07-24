const Joke = require('../models/joke.model')

module.exports = {
    hello: (req, res) => {
        res.json({message: "Hello World"});
    },

    allJokes: (req, res) => {
        Joke.find(req.body)
        .then(jokes=>{
            res.json(jokes)
        })
        .catch((err)=>{
            res.json(err)
        })
    },

    oneJoke: (req,res) =>{
        Joke.findOne({_id: req.params.id})
        .then(joke =>{
            res.json(joke)
        })
        .catch((err)=>{
            res.json(err)
        })
    },

    newJoke: (req, res)=> {
        Joke.create(req.body)
        .then(newJoke =>{
            res.json({joke: newJoke})
        })
        .catch((err)=>{
            res.json(err)
        })
    },

    updateJoke: (req, res)=>{
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runvalidators: true})
        .then(joke =>{
            res.json(joke)
        })
        .catch((err)=>{
            res.json(err)
        })
    },

    deleteJoke: (req, res) =>{
        Joke.findOneAndDelete({_id: req.params.id})
        .then(joke =>{
            res.json(joke)
        })
        .catch((err)=>{
            res.json(err)
        })
    }
}
