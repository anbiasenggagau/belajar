const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const { body, validationResult, check } = require('express-validator')

// Berguna untuk melakukan setup request menjadi GET POST PUT DELETE
const methodOverride = require('method-override')

const Contact = require('./model/contact')

const app = express()
const port = 3000

// SetUp Method Override
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('secret'))
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
)
app.use(flash())

app.put('/assign', [
    body('nama').custom(async (value) => {
        const duplicate = await Contact.findOne({ nama: value })
        if (duplicate == null) {
            throw new Error("Nama contact tidak boleh diubah!")
        }
        return true
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const contact = req.body
        contact.tombol = "Ubah Data"
        res.render('./assign/assign', {
            title: "Contact Page",
            layout: "layouts/main-layout",
            errors: errors.array(),
            contact: contact
        })
    }
    else {
        const filter = { nama: req.body.nama }
        const update = req.body
        Contact.findOneAndUpdate(filter, update).then(result => {
            req.flash('msg', 'Data Contact Berhasil Diubah')
            res.redirect('/contact')
        })
    }
})

//==================================================

app.delete('/contact', async (req, res) => {
    Contact.deleteOne({ nama: req.body.nama }).then(result => {
        req.flash('msg', 'Data Contact Berhasil Dihapus')
        res.redirect('/contact')
    })
})

//==================================================

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', layout: 'layouts/main-layout' })
})

app.get('/contact', async (req, res) => {
    if (req.query.delete != undefined) {
        const contact = await Contact.findOne({ nama: req.query.delete })
        if (contact == null) {
            req.flash('msg', 'Data Contact Tidak Ditemukan')
            res.redirect('/contact')
        } else {
            Contact.deleteOne({ nama: req.query.delete })
                .then(result => {
                    req.flash('msg', 'Data Contact Berhasil Dihapus')
                    res.redirect('/contact')
                })
        }
    }
    else {
        const contacts = await Contact.find()
        res.render('./contact/contact', {
            title: 'Contact Page',
            layout: 'layouts/main-layout',
            contacts: contacts,
            msg: req.flash('msg')
        })
    }
})

app.get('/about', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.query.nama })

    res.render('./about/about', {
        title: 'About Page',
        layout: 'layouts/main-layout',
        contact: contact
    })
})

app.get('/assign', async (req, res) => {
    if (req.query.edit != undefined) {
        let contact = await Contact.findOne({ nama: req.query.edit })
        if (contact == null) {
            req.flash('msg', 'Data Contact Tidak Ditemukan')
            res.redirect('/contact')
        } else {
            contact.tombol = "Ubah Data"
            res.render('./assign/assign', {
                title: 'Contact Page',
                layout: 'layouts/main-layout',
                contact: contact
            })
        }
    }
    else {
        let contact = { tombol: 'Tambah Data' }
        res.render('./assign/assign', {
            title: 'Contact Page',
            layout: 'layouts/main-layout',
            contact: contact
        })
    }
})

//==================================================

app.post('/assign', [
    body('nama').custom(async value => {
        const duplikat = await Contact.findOne({ nama: value })
        if (duplikat) {
            throw new Error('Nama contact sudah digunakan')
        }
        return true;
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('./assign/assign', {
                title: "Contact Page",
                layout: "layouts/main-layout",
                errors: errors.array(),
                contact: { tombol: "Tambah Data" }
            })
        } else {
            const wait = await Contact.insertMany(req.body)
            req.flash('msg', 'Data Contact Berhasil Ditambahkan')
            res.redirect('/contact')

        }
    })

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})