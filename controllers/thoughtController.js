const { User, Thought } = require("../models")

const thougthController = {
    //get all thoughts
    getThougths(req, res) {
        Thought.find({})
            .then(thoughtData => {
                console.log(thoughtData)
                res.json(thoughtData)
            })
            .catch(err => res.json(err))
    },
    //get a thought by id
    getThougthById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: "no thought found" })
                    return
                }
                res.json(thoughtData)
            })
            .catch(err => res.json(err))
    },
    //create a new thought
    createThougth(req, res) {
        let tData
        User.findOne({ username: req.body.username })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: "No user found" })
                    return
                }
                Thought.create(req.body)
                    .then(thoughtData => {
                        tData = thoughtData
                        return User.findOneAndUpdate(
                            { username: thoughtData.username },
                            { $push: { thoughts: tData._id } },
                            { new: true }
                        )
                    })
                    .then(() => {
                        res.json(tData)
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },
    //update thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body,
            { new: true }
        )
            .then(thougthData => {
                console.log(thougthData)
                if (!thougthData) {
                    res.status(404).json("No thought found")
                }
                res.json(thougthData)
            })
            .catch(err => res.json(err))
    },
    //delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(thougthData => {
                console.log(thougthData)
                if (!thougthData) {
                    res.status(404).json("No thought found")
                    return
                }
                res.json(thougthData)
            })
            .catch(err => res.json(err))
    },
    //create a new reaction
    addReaction(req, res) {
        console.log(req)
        User.findOne({ username: req.body.username })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: "User not found" })
                    return
                }
                Thought.findOneAndUpdate(
                    { _id: req.params.thoughtId },
                    { $push: { reactions: req.body.reactionId } },
                    { new: true }
                )
                    .then(thougthData => {
                        console.log(thougthData)
                        if (!thougthData) {
                            res.status(404).json("No thought found")
                            return
                        }
                        res.json(thougthData)
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))

    },
    //removes a reaction
    removeReaction(req, res) {
        Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        )
            .then(thougthData => {
                console.log(thougthData)
                if (!thougthData) {
                    res.status(404).json("No thought found")
                    return
                }
                res.json(thougthData)
            })
            .catch(err => res.json(err))
    }
}

module.exports = thougthController