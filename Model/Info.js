const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InfoSchema = new Schema({
    about: {
        type: String,
        required: true,
        trim: true
    },
    refund: {
        type: String,
        required: true,
        trim: true
    },
    terms: {
        type: String,
        required: true,
        trim: true
    },
    privacy: {
        type: String,
        required: true,
        trim: true
    }
})
const Info = mongoose.model('info', InfoSchema)
module.exports = Info