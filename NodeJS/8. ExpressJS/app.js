const express = require('express')
const app = express()
const port = 3000

// Menjalankan request GET ke halaman about, akan dijalankan fungsi yang memiliki parameter request dan response
app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: __dirname })
})
// method sendFile memiliki parameter kedua sebagai object root directory dari file yang ingin kita akses. sedangkan __dirname merupakan lokasi directory dari file app.js
app.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: __dirname })
})

// Mengecek parameter yang dikirimkan melalui URL
app.get('/product/id/:id/category/:idcat', (req, res) => {
    res.send(`Product Page with ID =  ${req.params.id} <br> Category = ${req.params.idcat}`)
    console.log(req.params.id, req.params.idcat)
})

// Mengecek query yang dikirimkan melalui URL
// contoh format query = www.facebook.com?id=10&category=100
app.get('/product', (req, res) => {
    res.send(`Produc Page with ID = ${req.query.id} <br> Category = ${req.query.category}`)
    console.log(req.query)
})

// Menggabungkan query dan params
app.get('/product/id/:id', (req, res) => {
    res.send(`Produc Page with ID = ${req.params.id} (Params) <br> Category = ${req.query.category} (Query)`)
    console.log(req.params, req.query)
})

app.use('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

// Memulai server
app.listen(port, () => {
    console.log(`Example app listeing at port ${port}`)
})
