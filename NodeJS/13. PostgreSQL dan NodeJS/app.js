

const { Client }=require('pg')

const postgres=new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '12345678',
    database: 'testing'
})



const queryDatabase=async (query) => {
    const result=await postgres.query(query, (err, res) => {
        if (err) {
            console.log(err.code)
            postgres.end()
        }
        else {
            postgres.end()
            return res.rows
        }
    })

    return result
}

postgres.connect();

const dataSQL=queryDatabase('SELECT * FROM mahasiswa')
console.log(dataSQL)



