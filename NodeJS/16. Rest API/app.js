require('dotenv').config()

var util = require('util');
var encoder = new util.TextEncoder('utf-8');
const express = require('express')
const mongoose = require('mongoose')
// const jest = require('jest')

// jest.useFakeTimers()


const app = express()
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/issueTracker', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

//Routes for subscribers
const subscribersRouter = require('./routes/subscribers').router
app.use('/subscribers', subscribersRouter)

module.exports = app


// app.listen(3001, () => {
//     console.log('Server is Starting')
// })
