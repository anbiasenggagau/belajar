const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))

mongoose.connect(
  "mongodb+srv://anbiasenggagau:thatsmygirl@cluster0.vxsnx.mongodb.net/Exercise?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const Exercise = mongoose.model('Exercise', {
  username: {
    type: String,
    required: true
  },
  log: [{
    description: String,
    duration: Number,
    date: String,
    _id: false
  }]
})

app.get('/api/users', async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*")

  const users = await Exercise.find({}, ['username', '__v'])
  res.json(users)
})

app.get('/api/users/:_id/logs/:from?/:to?/:limit?', async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*")

  let fixLimit = req.query.limit == undefined ? 1000 : parseInt(req.query.limit)
  let fixFrom = new Date(req.query.from) == 'Invalid Date' ? new Date(0) : new Date(req.query.from)
  let fixTo = new Date(req.query.to) == 'Invalid Date' ? new Date() : new Date(req.query.to)

  const user = await Exercise.findById(req.params._id)
  if (user == null) return res.json({ error: 'Cannot find the user' })

  const result = { ...user._doc }
  delete result.__v

  const filtered = result.log.filter((element, index) => (index < fixLimit) && (new Date(element.date) >= fixFrom) && (new Date(element.date) <= fixTo))

  result.log = filtered

  if (req.query.from != undefined) result.from = new Date(req.query.from).toDateString()
  if (req.query.to != undefined) result.to = new Date(req.query.to).toDateString()

  let count = result.log.length
  result.count = count

  console.log(result)

  res.json(result)
})

app.post('/api/users', async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*")

  const username = await req.body.username
  const test = await Exercise.findOne({ username })

  if (test != null) { console.log('Name already taken') }
  else {
    // Create User
    const user = { username: username }

    const wait = await Exercise.insertMany(user)
    console.log('saved')
  }

  const result = await Exercise.findOne({ username: username })

  res.json({
    username: result.username,
    _id: result._id
  })

})

app.post('/api/users/:_id/exercises', async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*")

  const id = req.params._id
  const user = await Exercise.findById(id)

  let d = new Date(req.body.date) == 'Invalid Date' ? new Date() : new Date(req.body.date)

  d = d.toDateString()

  const input = {
    description: req.body.description,
    duration: Number(req.body.duration),
    date: d
  }

  user.log.unshift(input)

  const wait = await Exercise.findByIdAndUpdate(id, user)

  res.json({
    username: user.username,
    description: req.body.description,
    duration: parseInt(req.body.duration),
    date: d,
    _id: user._id
  })
})


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
