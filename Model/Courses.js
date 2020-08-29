const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    image: {
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

const Conurse = mongoose.model('course', CourseSchema)
module.exports = Conurse