/*const { Client }=require('pg')
const fs=require('fs')

const postgres=new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '123456789',
    database: 'testing'
})


const bacaData=() => {
    const buffer=fs.readFile("data.json", "utf-8", (err, data) => {
        // console.log(JSON.parse(data))
        global.data=JSON.parse(data)
    })
}

const simpanData=data => {
    fs.writeFile("data.json", JSON.stringify(data), err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Data Has Been Succesfully Stored")
        }
    })
}

async function queryData(query) {
    let data=await postgres.query(query, (err, res) => {
        return res.rows
    })
    return data
}

const queryDatabase=async (query) => {
    return await postgres.query(query, (err, res) => {
        if (err) {
            console.log(err.code)
            postgres.end()
        }
        else {
            postgres.end()
            return res.rows
        }
    })
}

postgres.connect();

// const dataSQL=queryDatabase('SELECT * FROM mahasiswa LIMIT 10').then(res => res)

const dataSQL=await postgres.query('SELECT * FROM mahasiwa LIMIT 10')
console.log(dataSQL)

// console.log(queryData('SELECT * FROM mahasiswa LIMIT 10'))

// setTimeout(() => {
    // console.log(dataSQL)
// }, 1000)


// bacaData()

// setTimeout(() => {
//     console.log(global.data)
// }, 1000)

// bacaData()

// console.log(global.data)
// setTimeout(() => { console.log(global.data) }, 1000)
// simpanData(res.rows)

*/

const { Client }=require('pg')
const client=new Client()
await client.connect()
const res=await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()