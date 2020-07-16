const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EtcsSchema = new Schema({
    topTitle: {
        type: String,
        required: true,
        trim: true
    },
    subTitle: {
        type: String,
        required: true,
        trim: true
    },
    sumNumber: {
        type: String,
        required: true,
        trim: true
    },
    facebook: {
        type: String,
        required: true,
        trim: true
    },
    youtube: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    footerCredit: {
        type: String,
        required: true,
        trim: true
    },
})
const Etcs = mongoose.model('etc', EtcsSchema)
module.exports = Etcs