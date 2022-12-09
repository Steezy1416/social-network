const { trusted } = require("mongoose")
const {User, Thought} = require("../models")

const userController = {
    //get all users
    getUsers(req, res){
        User.find({})
        .then(userData => {
            console.log(userData)
            res.json(userData)
        })
        .catch(err => res.json(err))
    },
    //get a user by id
    getUserById(req, res){
        User.findOne({_id: req.params.userId})
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: "User not found"})
                return
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
    },
    //create a new user
    createUser(req, res){
        User.create(req.body)
        .then(userData => {
            console.log(userData)
            res.json(userData)
        })
        .catch(err => res.json(err))
    },
    //update a user
    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            req.body,
            {new: true}
        )
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: "User not found"})
                return
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
    },
    //delete a user
    deleteUser(req, res){
        User.findOneAndDelete({_id: req.params.userId})
        .then(userData => {
            console.log(userData)

            if(!userData){
                res.status(404).jsom({message: "User not found"})
                return
            }
            else if(userData.thoughts){
                userData.thoughts.forEach(thought => {
                    Thought.findOneAndDelete({_id: thought})
                })
            }

            res.json(userData)
        })
        .catch(err => res.json(err))
    },
    //add a friend
    addFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendId}},
            {new: true}
        )
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: "User not found"})
                return
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
    },
    //remove a friend
    removeFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        )
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: "User not found"})
                return
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = userController