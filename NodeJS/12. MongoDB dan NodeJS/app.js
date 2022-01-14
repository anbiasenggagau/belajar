const { MongoClient }=require('mongodb');
const ObjectID=require('mongodb').ObjectID
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url='mongodb://localhost:27017';

// Database Name
const dbName='testing';


const client=new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi Gagal')
    }

    console.log('Berhasil Konek')
    // Pilih database
    const db=client.db(dbName)

    // Secara default, method collection merupakan object Promise
    // Sehingga harus dichaining untuk mengambil data-nya

    /*
    // Menambahkan 1 data ke collection testing
    db.collection('mahasiswa').insertOne(
        {
            nama: "Anbia",
            email: "anbia@gmail.com"
        },
        (error, result) => {
            if (error) {
                return console.log('Gagal Menambahkan Data')
            }

            console.log(result)
        }
    )
    */

    /*
    // Menambahkan data ke collection testing secara banyak
    db.collection('mahasiswa').insertMany(
        [
            {
                nama: "Andika",
                email: "anbika@gmail.com"
            },
            {
                nama: "Faidil",
                email: "faidil@gmail.coms"
            }
        ],
        (error, result) => {
            if (error) {
                return console.log('Gagal Menambahkan Data')
            }
            console.log('Berhasil Menambahkan Data, ')
            console.log(result)
        })
        */

    /*
    // Menampilkan Data Dari Database
    console.log(db
        .collection('mahasiswa')
        .find()
        .toArray((error, result) => {
            console.log(result)
        }))

    // Menampilkan Data Dari Database dengan limit 10
    console.log(db
        .collection('mahasiswa')
        .find()
        .limit(10)
        .toArray((error, result) => {
            console.log(result)
        }))

    // Menampilkan Data Dari Database yang bernama Anbia
    console.log(db
        .collection('mahasiswa')
        .find({ nama: "Anbia" }).
        toArray((error, result) => {
            console.log(result)
        }))
    */

    /*
    // Mengubah field nama pada ID tertentu
    db.collection('mahasiswa').updateOne(
        {
            _id: ObjectID('61e1183fac4d4d0bec790d16')
        },
        {
            $set: {
                nama: "Senggagau"
            }
        }
    )

    // Mengubah field nama pada ID tertentu
    let data;
    db.collection('mahasiswa').updateMany(
        {
            _id: ObjectID('61e1183fac4d4d0bec790d16')
        },
        {
            $set: {
                email: "gagau@gmail.com"
            }
        }
    ).then(result => { data=result })

    setTimeout(() => { console.log(data) }, 1000)
    */

    /*
    // Menghapus data
    db.collection('mahasiswa').deleteMany(
        {
            nama: "Senggagau"
        }
    ).then(result => { console.log(result) })
    */



})



