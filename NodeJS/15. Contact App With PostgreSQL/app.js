const express=require('express')
const expressLayouts=require('express-ejs-layouts')
const session=require('express-session')
const cookieParser=require('cookie-parser')
const flash=require('connect-flash')
const { body, validationResult, check }=require('express-validator')

// Berguna untuk melakukan setup request menjadi GET POST PUT DELETE
const methodOverride=require('method-override')

const Contact=require('./model/contact')
const postgres=require('./model/contact')

const app=express()
const port=3000

let query
let values

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

postgres.connect()

app.put('/assign', [
    body('nama').custom(async (value) => {
        const duplicate=await Contact.query(`SELECT * FROM contact WHERE nama='${value}'`)
        if (duplicate.rows[0]==null) {
            throw new Error("Nama contact tidak boleh diubah!")
        }
        return true
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
], async (req, res) => {
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
        const contact=req.body
        contact.tombol="Ubah Data"
        res.render('assign', {
            title: "Contact Page",
            layout: "layouts/main-layout",
            errors: errors.array(),
            contact: contact
        })
    }
    else {
        query=`UPDATE contact SET nohp=$2, email=$3 WHERE nama=$1`
        values=[req.body.nama, req.body.nohp, req.body.email]
        Contact.query(query, values, (err, result) => {
            req.flash('msg', 'Data Contact Berhasil Diubah')
            res.redirect('/contact')
        })
    }
})

//==================================================

app.delete('/contact', async (req, res) => {
    Contact.query(`DELETE FROM contact WHERE nama='${req.body.nama}'`, (err, result) => {
        req.flash('msg', 'Data Contact Berhasil Dihapus')
        res.redirect('/contact')
    })
})

//==================================================

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', layout: 'layouts/main-layout' })
})

app.get('/contact', async (req, res) => {
    const contacts=await Contact.query(`SELECT * FROM contact`)
    res.render('contact', {
        title: 'Contact Page',
        layout: 'layouts/main-layout',
        contacts: contacts.rows,
        msg: req.flash('msg')
    })

})

app.get('/about', async (req, res) => {
    const contact=await Contact.query(`SELECT * FROM contact WHERE nama='${req.query.nama}'`)
    console.log(contact.rows)
    res.render('about', {
        title: 'About Page',
        layout: 'layouts/main-layout',
        contact: contact.rows[0]
    })
})

app.get('/assign', async (req, res) => {
    if (req.query.edit!=undefined) {
        let contact=await Contact.query(`SELECT * FROM contact WHERE nama='${req.query.edit}'`)
        if (contact.rows.length<1) {
            req.flash('msg', 'Data Contact Tidak Ditemukan')
            res.redirect('/contact')
        } else {
            contact.rows[0].tombol="Ubah Data"
            res.render('assign', {
                title: 'Contact Page',
                layout: 'layouts/main-layout',
                contact: contact.rows[0]
            })
        }
    }
    else {
        let contact={ tombol: 'Tambah Data' }
        res.render('assign', {
            title: 'Contact Page',
            layout: 'layouts/main-layout',
            contact: contact
        })
    }
})

//==================================================

app.post('/assign', [
    body('nama').custom(async value => {
        const duplikat=await Contact.query(`SELECT * FROM contact WHERE nama='${value}'`)
        console.log(duplikat.rows)
        if (duplikat.rows.length>0) {
            throw new Error('Nama contact sudah digunakan')
        }
        return true;
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
],
    async (req, res) => {
        const errors=validationResult(req);
        if (!errors.isEmpty()) {
            res.render('assign', {
                title: "Contact Page",
                layout: "layouts/main-layout",
                errors: errors.array(),
                contact: { tombol: "Tambah Data" }
            })
        } else {
            query=`INSERT INTO contact (nama,email,nohp) VALUES($1,$2,$3) RETURNING *`
            values=[req.body.nama, req.body.email, req.body.nohp]
            Contact.query(query, values, (err, result) => {
                req.flash('msg', 'Data Contact Berhasil Ditambahkan')
                res.redirect('contact')
            })
        }
    })

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})