const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
    img: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    des: {
        type: String,
        required: true,
        trim: true
    }
})
const Service = mongoose.model('service', ServiceSchema)
module.exports = Service