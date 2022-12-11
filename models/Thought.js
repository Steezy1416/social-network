const {Schema, Types, default: mongoose} = require("mongoose")
const {format_date} = require("../utils/formatDate")

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
        get: v => format_date(v)
    }
},
{
    toJSON: {
        getters: true
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
        default: Date.now,
        get: v => format_date(v)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]

},
{
    toJSON: {
        getters: true,
        virtuals: true
    }
})

//Counts how many reactions a thought has
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})

const Thought = mongoose.model("thought", thoughtSchema)

module.exports = Thought