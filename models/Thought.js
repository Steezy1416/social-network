const {Schema, Types, default: mongoose} = require("mongoose")

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        match: /.{1,280}/
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]

})

const Thought = mongoose.model("thought", thoughtSchema)

module.exports = Thought