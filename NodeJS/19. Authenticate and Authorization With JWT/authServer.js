require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const users = []

const posts = [
    {
        username: 'anbiasenggagau',
        title: 'post 1'
    },
    {
        username: 'gege',
        title: 'post 2'
    }
]

let refreshTokens = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    try {

        // let salt = bcrypt.genSaltSync()

        // Automatically, when we pass second parameter with 10, the hashing will work as same as we generate salt first
        let password = bcrypt.hashSync(req.body.password, 10)

        const user = {
            username: req.body.username,
            password: password
        }

        users.push(user)
        res.status(200).send()
    } catch (error) {

        res.status(500).send()
    }

})

app.post('/users/login', (req, res) => {
    const user = users.find(user => user.username === req.body.username)

    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (bcrypt.compareSync(req.body.password, user.password)) {

            // Create JWT Token with payload of user object and encrypt it with ACCESS_TOKEN_SECRET
            // Automatically, JWT Token will be stored in request headers
            const accessToken = getAccesToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

            // For best practice, we should store the refresh token in Database
            refreshTokens.push(refreshToken)
            res.json({ accessToken, refreshToken })
        } else {
            res.send('Not allowed')
        }
    } catch (error) {
        res.status(500).send()
    }
})

app.get('/token', (req, res) => {
    res.json(refreshTokens)
})

app.get('/token/verify', (req, res) => {
    const temp = []
    refreshTokens.forEach(element => {
        jwt.verify(element, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
            temp.push(data)
        })
    })

    res.json(temp)
})

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)

        // The current user will have additional property of iat
        // In order to store the same payload as before it's expired
        // We must delete the additional property
        delete user.iat

        let accessToken = getAccesToken(user)

        res.json(accessToken)
    })
})

app.delete('/logout', (req, res) => {
    // Basicly, when we logout, we delete the refresh token in the Database
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)

    res.sendStatus(204)
})

function getAccesToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' })
}

// app.get('/posts', (req, res) => {

//     authenticateToken(req, res)

//     res.json(posts.filter(post => post.username === req.user.username))
// })

// function authenticateToken(req, res) {

//     // Bearer TOKEN
//     // Get JWT Token that stored in headers
//     const authHeader = req.headers['authorization']

//     // Check if authHeader defined and get split operation value, otherwise will return undefined
//     const token = authHeader && authHeader.split(" ")[1]

//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         console.log('user: ')
//         console.log(user)
//         if (err) return res.sendStatus(403)
//         req.user = user
//     })
// }

const port = 4000
app.listen(port, () => {
    console.log(`Listening to Port ${port}`)
})