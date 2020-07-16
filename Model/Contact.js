const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    msg: {
        type: String,
        required: true,
        trim: true
    }
})

const Contact = mongoose.model('contact', ContactSchema)
module.exports = Contact