const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    uid: String,
    name: String,
    mail: String,
    personalTrackerID: Number,
    friends: [],
    inscriptionDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UserSchema)