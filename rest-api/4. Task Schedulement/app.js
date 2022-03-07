require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ msg: 'testing' })
})

const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Listening to Port : ${port}`)
// })

module.exports = { app }