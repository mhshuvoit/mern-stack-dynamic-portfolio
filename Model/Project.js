const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
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
    shortdes: {
        type: String,
        required: true,
        trim: true
    },
    feature: {
        type: String,
        required: true,
        trim: true
    }
})

const Project = mongoose.model('porject', ProjectSchema)
module.exports = Project