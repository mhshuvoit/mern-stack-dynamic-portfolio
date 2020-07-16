const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://mhshuvoit:mhshuvoit@cluster1.xbs5i.mongodb.net/msdp?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }
)
const db = mongoose.connection
db.on('Err', (err) => {
    console.log(err)
})
db.once("open", () => {
    console.log("Database connect Estabished")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})

// Router
// ================================================
const serviceRouter = require('./router/service')
const chartRouter = require('./router/chart')
const contactRouter = require('./router/contact')
const projectRouter = require('./router/project')
const courseRouter = require('./router/course')
const infoRouter = require('./router/info')
const etcsRouter = require('./router/etcs')

app.use('/service', serviceRouter)
app.use('/chart', chartRouter)
app.use('/contact', contactRouter)
app.use('/project', projectRouter)
app.use('/course', courseRouter)
app.use('/info', infoRouter)
app.use('/etcs', etcsRouter)