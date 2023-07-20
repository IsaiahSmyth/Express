const user = require('../model/user.model')

module.exports = {
    hello: (req, res) => {
        res.json({message: "Hello World"});
    },

    allUser: (req, res) => {
        res.json(req)
    },

    oneUser: (req,res) =>{
        res.json(req)
    },

    newUser: (req, res)=> {
        res.json(req)
    },

    updateUser: (req, res)=>{
        res.json(req)
    },

    deleteUser: (req, res) =>{
        res.json(req)
    }
}
