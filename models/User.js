const {Schema, default: mongoose} = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }]
},
{
    toJSON: {
        virtuals: true
    }
})

//counts how many friends a user har
userSchema.virtual("friendCount").get(function(){
    return this.friends.length
})

const User = mongoose.model("user", userSchema)

module.exports = User