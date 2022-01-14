const express=require('express')
const expressLayouts=require('express-ejs-layouts')
const app=express()
const { body, validationResult, check }=require('express-validator')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const flash=require('connect-flash')
const port=3001;

const { loadContact, findContact, tambahContact, cekDuplikat, hapusContact, editContact }=require('./utils/contacts')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

// Konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,

})
)

app.use(flash())

// untuk memparsing data dari method post, diperlukan middleware urlencoded
app.use(express.urlencoded({ extended: true }))

// Mengecek query yang dikirimkan melalui URL
// contoh format query = www.facebook.com?id=10&category=100
app.get('/about', (req, res) => {
    const contacts=loadContact()
    let nama=req.query.nama
    let contact=findContact(contacts, nama);
    res.render('about', { title: "About Page", layout: 'layouts/main-layout', contact: contact })
})

app.get('/assign', (req, res) => {
    if (req.query.edit!=undefined) {
        const contacts=loadContact()
        const contact=findContact(contacts, req.query.edit)
        if (contact==undefined) { res.send("Data Kontak Tidak Ditemukan"); }
        else {
            contact.tombol="Ubah Data"
            res.render('assign', {
                title: "Contact Page",
                layout: 'layouts/main-layout',
                contact: contact
            })
        }
    }
    else {
        let contact={ tombol: "Tambah Data" }
        res.render('assign', {
            title: "Contact Page",
            layout: 'layouts/main-layout',
            contact: contact
        })
    }

})

app.get('/contact', (req, res) => {
    if (req.query.delete!=undefined) {
        const dlt=req.query.delete
        const result=hapusContact(dlt)
        let msg=""
        if (result==false) {
            msg="Data Tidak Ditemukan"
        }
        else {
            msg="Berhasil Meghapus Contact"
        }

        const contacts=loadContact();
        res.render('contact', {
            title: "Contact Page",
            layout: 'layouts/main-layout',
            contacts: contacts,
            msg: msg
        })
    }
    else {
        const contacts=loadContact();
        res.render('contact', {
            title: "Contact Page",
            layout: 'layouts/main-layout',
            contacts: contacts,
            msg: req.flash('msg')
        })
    }
})

app.get('/', (req, res) => {
    res.render('index', { title: "Home Page", layout: 'layouts/main-layout' })
})

app.post('/assign/edit', [
    body('nama').custom((value) => {
        const duplicate=cekDuplikat(value)
        if (duplicate==undefined) {
            throw new Error("Nama contact tidak boleh diubah!")
        }
        return true
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
], (req, res) => {
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
        editContact(req.body)
        req.flash('msg', 'Data Contact Berhasil Diubah')
        res.redirect('/contact')
    }

})

// secara otomatis, data akan tersimpan pada variable request.body
app.post('/assign', [
    // nilai dari variable value sama seperti request.body.nama
    // method custom berguna untuk melakukan custom pada error message dan melakukan custom pengecekan
    body('nama').custom((value) => {
        const duplicate=cekDuplikat(value)
        if (duplicate) {
            throw new Error('Nama contact sudah ada')
        }
        return true
    }),
    // sedangkan object check hanya berguna untuk melakukan custom error message
    check('email', 'Email Tidak Valid').isEmail(),
    check('nohp', 'No HP Tidak Valid!').isMobilePhone('id-ID')
    // nama variable "nama" "email" "nohp", ditentukan dari attribute nama pada tag input pada elemen html
], (req, res) => {
    // Mengambil hasil error dari seluruh mekanisme pemeriksaan yang sebelumnya sudah disiapkan
    const errors=validationResult(req)

    // Ketika terjadi error, maka contact app akan mengembalikan kita ke halaman assign.ejs dengan mengirimkan variable tamabahan, yaitu errors.array()
    if (!errors.isEmpty()) {
        res.render('assign', {
            title: "Contact Page",
            layout: "layouts/main-layout",
            errors: errors.array(),
            contact: { tombol: "Tambah Data" }
        })
    }

    // Jika sukses, maka akan dibaawa ke halaman contact list berikut ditampilkan flash message 
    else {
        tambahContact(req.body)
        // Mengirimkan flash message
        req.flash('msg', 'Data Contact Berhasil Ditambahkan')
        // Redirect akan diurus oleh metode get
        res.redirect('/contact')
    }
})

app.listen(port, () => {
    console.log(`The app is now listening to Port ${port}`)
})
