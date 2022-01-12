const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const app=express();
const port=3000;

// Memuat Menggunakan EJS
// secara otomatis, object app akan memeriksa file yang ada di folder views
app.set('view engine', 'ejs');
// Inisialisasi package express layouts
app.use(expressLayouts);

const mahasiswa=[
    {
        nama: "Anbia",
        prodi: "Teknik Elektro"
    },
    {
        nama: "Senggagau",
        prodi: "Teknik Lingkungan"
    },
    {
        nama: "Gagau",
        prodi: "Teknik Geomatika"
    },
]

app.get('/', (req, res) => {
    // Parameter kedua merupakan pengiriman variable, ke file index
    // Dengan menggunakan package express layouts, kita bisa mengirimkan file ejs yang kita request (yang saat ini adalah index.ejs),
    // ke dalam file main layouts yang kita siapakan (yang saat ini adalah file yang berada di layouts/main-layouts.ejs)
    res.render('index', { title: "Home", nama: 'Anbia', mahasiswa: mahasiswa, layout: 'layouts/main-layouts' });
});

// Menjalankan request GET ke halaman about, akan dijalankan fungsi yang memiliki parameter request dan response
app.get('/about', (req, res) => {
    res.render('about', { title: "About", layout: 'layouts/main-layouts' });
})
// method sendFile memiliki parameter kedua sebagai object root directory dari file yang ingin kita akses. sedangkan __dirname merupakan lokasi directory dari file app.js
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact", layout: 'layouts/main-layouts' });
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

/*
app.use('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})
*/

// Memulai server
app.listen(port, () => {
    console.log(`Example app listeing at port ${port}`)
})