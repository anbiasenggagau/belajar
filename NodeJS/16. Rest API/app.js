require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')

const app=express()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db=mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Database'))

console.log("Hello Users")

app.use(express.json())

//Routes for subscribers
const subscribersRouter=require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => {
    console.log('Server is Starting')
})