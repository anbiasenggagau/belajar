/*const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/testing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
*/
/*
// Membuat Schema
const Contact=mongoose.model('Contact', {
    nama: {
        type: String,
        required: true
    },
    nohp: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

Contact.findOne({ nama: 'asd' }).then(result => console.log(result))

/*
// Menambah 1 Data
const contact1=new Contact({
    nama: "Anbia",
    nohp: '08124789321',
    email: 'anbia@gmail.com'
})

// Simpan ke collection
contact1.save().then(contact => console.log(contact))
*/