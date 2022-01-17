const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://anbiasenggagau:thatsmygirl@cluster0.vxsnx.mongodb.net/Contact?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

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

module.exports=Contact