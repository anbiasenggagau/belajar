const express=require('express')
const expressLayouts=require('express-ejs-layouts')
const app=express()
const port=3000;

const { loadContact, findContact }=require('./utils/contacts')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

// Mengecek query yang dikirimkan melalui URL
// contoh format query = www.facebook.com?id=10&category=100
app.get('/about', (req, res) => {
    const contact=findContact(req.query.nama);
    res.render('about', { title: "About Page", layout: 'layouts/main-layout', contact: contact })
})

app.get('/contact', (req, res) => {
    const contacts=loadContact();
    res.render('contact', { title: "Contact Page", layout: 'layouts/main-layout', contacts: contacts })
})

app.get('/', (req, res) => {
    res.render('index', { title: "Home Page", layout: 'layouts/main-layout' })
})

app.listen(port, () => {
    console.log(`The app is now listening to Port ${port}`)
})
