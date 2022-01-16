const { Client }=require('pg')
const fs=require('fs')

const postgres=new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '123456789',
    database: 'testing'
})

let query
let values
let table


const bacaData=() => {
    const buffer=fs.readFile("data.json", "utf-8", (err, data) => {
        console.log(JSON.parse(data))
        postgres.end(0)
    })
}

const simpanData=data => {
    fs.writeFile("data.json", JSON.stringify(data), err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Data Has Been Succesfully Stored")
            bacaData()
        }
    })
}

// Membuat Table Baru
const createTable=(query) => {
    postgres.query(query, (err, res) => {
        if (err) {

            console.log(err)
            console.log("Failed To Create Table")
        }
        else {

            console.log(res)
            console.log("Succesfully Create Table")
        }
    })
}

// Mengambil Data
const queryDatabase=(query) => {
    return postgres.query(query, (err, res) => {
        if (err) {
            console.log(err)
            postgres.end()
        }
        else {
            simpanData(res.rows)
        }
    })
}

// Menambahkan Data
const insertData=(query, values) => {
    postgres.query(query, values, (err, res) => {
        if (err) {
            console.log("Failed To Insert Data")

        }
        else {
            console.log("Succesfully Insert Data")

        }
    })
}

// Mengedit Data
const updateData=((query, values) => {
    postgres.query(query, values, (err, res) => {
        if (err) {
            console.log(err)
            console.log('Failed To Update Data')
        }
        else {
            console.log('Succesfully Update Data')
        }
    })
})

// Menghahpus Data
const deleteData=((query, values) => {
    postgres.query(query, values, (err, res) => {
        if (res.rowCount<1) {
            console.log('Failed To Delete Data')
        }
        else {
            console.log(res)
            console.log('Succesfully Delete Data')
        }
    })
})

// Menghapus Table
const deleteTable=query => {
    postgres.query(query, (err, res) => {
        if (err) {

            console.log(err)
            console.log("Failed To Delete Table")
        }
        else {

            console.log(res)
            console.log("Succesfully Delete Table")
        }
    })
}

postgres.connect();


// table=`
// CREATE TABLE "mahasiswa" (
//     "userid" SERIAL,
//     "name" VARCHAR(100) NOT NULL,
//     "email" VARCHAR(100) UNIQUE NOT NULL,
//     PRIMARY KEY ("userid")
// )
// `
// createTable(table)
// // Untuk membypass error, bisa ditambahkan syntax IF EXISTS
// table=`
// CREATE TABLE IF EXISTS "mahasiswa" (
//     "userid" SERIAL,
//     "name" VARCHAR(100) NOT NULL,
//     "email" VARCHAR(100) UNIQUE NOT NULL,
//     PRIMARY KEY ("userid")
// )
// `

// query=`INSERT INTO mahasiswa (nama,email) VALUES($1,$2) RETURNING *`
// values=['Dina Yulia Sari', 'dina@gmail.com']
// insertData(query, values)

// query=`UPDATE mahasiswa SET nama=$1 WHERE email=$2`
// values=['Andika Pratama', 'andika@gmail.com']
// updateData(query, values)

// query='DELETE FROM mahasiswa WHERE nama=$1'
// values=['Anbia']
// deleteData(query, values)

// table=`
//     DROP TABLE universitas
// `
// deleteTable(table)
// // Untuk membypass error, bisa ditambahkan syntax IF EXISTS
// table=`
//     DROP TABLE IF EXISTS universitas
// `

// // Berbagai macam Query dengan parameter
// queryDatabase(`SELECT * FROM mahasiswa`)
// queryDatabase(`SELECT * FROM mahasiswa WHERE nama LIKE 'Anbia%'`)
// queryDatabase(`SELECT * FROM mahasiswa WHERE nama LIKE '%Anbia%'`)
// queryDatabase(`SELECT * FROM mahasiswa WHERE userid=106`)
// queryDatabase(`SELECT * FROM mahasiswa ORDER BY userid`)
// queryDatabase(`SELECT * FROM mahasiswa WHERE userid >= 101 AND userid <= 120 ORDER BY userid`)
// queryDatabase(`SELECT mahasiswa.userid, mahasiswa.nama, mahasiswa.email, universitas.nama_universitas FROM mahasiswa JOIN universitas ON mahasiswa.iduniv=universitas.iduniv`)
// queryDatabase(`SELECT mahasiswa.userid, mahasiswa.nama, mahasiswa.email, universitas.nama_universitas FROM mahasiswa LEFT JOIN universitas ON mahasiswa.iduniv=universitas.iduniv ORDER BY userid`)

// console.log(data.length)


//=================================================
//=================================================
// CHECKING AVAILABLE TABLE
/*
SELECT*FROM information_schema.tables WHERE table_schema='public'
*/

//=================================================
// ALTERING TABLE SYNTAX
/*
ALTER TABLE mahasiswa ADD COLUMN createdat timestamp DEFAULT NOW();
ALTER TABLE mahasiswa  DROP COLUMN createdat;
ALTER TABLE universitas RENAME COLUMN nama TO nama_universitas;

ALTER TABLE universitas ADD UNIQUE(nama);
ALTER TABLE universitas DROP COLUMN kota;
ALTER TABLE universitas ADD COLUMN kota VARCHAR(100);

ALTER TABLE universitas ADD COLUMN iduniv SERIAL NOT NULL PRIMARY KEY;
ALTER TABLE mahasiswa ADD CONSTRAINT fk_iduniv FOREIGN KEY(iduniv) REFERENCES universitas(iduniv);
*/

//=================================================
// JOINING TABLE
/*
SELECT*FROM mahasiswa JOIN universitas ON mahasiswa.iduniv=universitas.iduniv;
SELECT mahasiswa.userid, mahasiswa.nama, mahasiswa.email, universitas.nama FROM mahasiswa JOIN universitas ON mahasiswa.iduniv=universitas.iduniv;

SELECT*FROM mahasiswa LEFT JOIN universitas ON mahasiswa.iduniv=universitas.iduniv;
SELECT*FROM mahasiswa RIGHT JOIN universitas ON mahasiswa.iduniv=universitas.iduniv;
SELECT*FROM mahasiswa FULL JOIN universitas ON mahasiswa.iduniv=universitas.iduniv;
SELECT*FROM information_schema.tables WHERE table_schema='public'
*/

//=================================================
/*
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "universitas"(
    "userid" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    "nama" VARCHAR(100) NOT NULL,
    "kota" VARCHAR(100) UNIQUE NOT NULL,
    "createdat" TIMESTAMP DEFAULT Now()
)

INSERT INTO "universitas"(nama, kota) VALUES('Institut Teknologi Sumatera', 'Lampung Selatan');

INSERT INTO "universitas"(nama, kota) VALUES
    ('Universitas Gadjah Mada', 'Yogyakarta'),
    ('Institut Teknolog Bandung', 'Bandung'),
    ('Universitas Indonesa', 'Depok');

 UPDATE mahasiswa SET iduniv=1 WHERE userid=101;
 UPDATE mahasiswa SET iduniv=2 WHERE userid=105;
 UPDATE mahasiswa SET iduniv=1 WHERE userid=106;
 UPDATE mahasiswa SET iduniv=3 WHERE userid=107;
 UPDATE mahasiswa SET iduniv=3 WHERE userid=118;
 UPDATE mahasiswa SET iduniv=4 WHERE userid=122;

 INSERT INTO universitas(nama, kota) VALUES('Universitas Airlangga', 'Surabaya');

 UPDATE mahasiswa SET iduniv=5 WHERE userid=125;


SELECT*FROM mahasiswa ORDER BY userid;

SELECT*FROM universitas ORDER BY createdat DESC


SELECT*FROM mahasiswa ORDER BY userid;
SELECT*FROM universitas ORDER BY iduniv;
*/


