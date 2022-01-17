const { Client }=require('pg')

const postgres=new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '123456789',
    database: 'testing'
})

module.exports=postgres