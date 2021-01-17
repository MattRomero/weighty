const mongoose = require('mongoose')

const TrackingSchema = mongoose.Schema({
    id: Number,
    uidUser: String,
    entries:[],
    name: String,
    objective: Number,
    weightTarget: Number,
    diet: Number,
    physicalActivity: Number,
    birth: Date,
    sex: Number,
    height: Number
})

module.exports = mongoose.model('Tracking', TrackingSchema)