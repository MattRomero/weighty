const mongoose = require('mongoose')

const IDCounters = mongoose.Schema({
    _id: String,
    counter: Number
})

module.exports = mongoose.model('IDCounters', IDCounters)