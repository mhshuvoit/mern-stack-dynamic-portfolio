const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChartSchema = new Schema({
    technology: {
        type: String,
        required: true,
        trim: true
    },
    project: {
        type: String,
        required: true,
        trim: true
    },
    techDes: {
        type: String,
        required: true,
        trim: true
    }
})

const Chart = mongoose.model('chart', ChartSchema)
module.exports = Chart