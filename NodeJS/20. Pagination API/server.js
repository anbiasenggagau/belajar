const express = require('express')
const mongoose = require('mongoose')
const Users = require('./model/users')
const Posts = require('./model/posts')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/PaginationAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to Database')
})

const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
    { id: 8, name: 'User 8' },
    { id: 9, name: 'User 9' },
    { id: 10, name: 'User 10' },
    { id: 11, name: 'User 11' },
    { id: 12, name: 'User 12' },
]

const posts = [
    { id: 1, name: 'Post 1' },
    { id: 2, name: 'Post 2' },
    { id: 3, name: 'Post 3' },
    { id: 4, name: 'Post 4' },
    { id: 5, name: 'Post 5' },
    { id: 6, name: 'Post 6' },
    { id: 7, name: 'Post 7' },
    { id: 8, name: 'Post 8' },
    { id: 9, name: 'Post 9' },
    { id: 10, name: 'Post 10' },
    { id: 11, name: 'Post 11' },
    { id: 12, name: 'Post 12' },
]

mongoose.connection.once('open', async () => {
    if (await Users.estimatedDocumentCount() == 0) {
        const temp = [...users]
        temp.forEach(element => delete element.id)

        console.log('Added Users')

        Users.insertMany(temp)
    }

    if (await Posts.estimatedDocumentCount() == 0) {
        const temp = [...posts]
        temp.forEach(element => delete element.id)

        console.log('Added Posts')

        Posts.insertMany(temp)
    }
})

app.get('/posts', async (req, res) => {
    const result = await getPaginationDB(req, Posts)

    if (result.result.length == 0) return res.sendStatus(500)
    res.json(result)
})

app.get('/users', async (req, res) => {
    const result = await getPaginationDB(req, Users)

    if (result.result.length == 0) return res.sendStatus(500)
    res.json(result)
})

function getPagination(req, data) {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const result = {}

    if (endIndex < data.length) {
        result.next = {
            page: page + 1,
            limit
        }
    }

    if (startIndex > 0) {
        result.previous = {
            page: page - 1,
            limit
        }
    }

    result.result = data.slice(startIndex, endIndex)

    return result
}

async function getPaginationDB(req, model) {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const result = {}

    if (endIndex < await model.estimatedDocumentCount()) {
        result.next = {
            page: page + 1,
            limit
        }
    }

    if (startIndex > 0) {
        result.previous = {
            page: page - 1,
            limit
        }
    }

    result.result = await model.find().limit(limit).skip(startIndex)

    return result
}

const port = 3000
app.listen(3000, () => {
    console.log(`Listening to port ${port}`)
})