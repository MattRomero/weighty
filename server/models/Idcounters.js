const mongoose = require('mongoose')

const Idcounters = mongoose.Schema({
    collectionName: String,
    counter: Number
})

module.exports = mongoose.model('Idcounters', Idcounters)