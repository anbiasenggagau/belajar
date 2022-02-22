//const { Schema } = require('mongoose')

//=========================================
/*
let schema = new mongoose.Schema({
  username: String,
  exercices: [
    {
      description: { type: String },
      duration: { type: Number },
      date: { type: String, required: false }
    }
  ]
})
let Users = mongoose.model("Users", schema)

let newSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  exercices: [
    {
      description: { type: String },
      duration: { type: Number },
      date: { type: String, required: false }
    }
  ]
})

app.use(express.urlencoded({ extended: true }))

const defaultDate = () => new Date().toISOString().slice(0, 10)

app.post("/api/users", (req, res) => {
  let user = new Users({
    username: req.body.username
  })
  user.save((err, data) => {
    if (err) return console.log(err)
    console.log("User saved successfully")
  })

  res.json(user)
})
app.get("/api/users", (req, res) => {
  Users.find({ username: /\w/ }, (err, data) => {
    if (err) return console.log(err)
    res.json(data)
  })
})
app.post("/api/users/:_id/exercises", (req, res) => {

  const userId = req.params._id


  // Users.findOneAndUpdate({_id:id},{
  //   descritpion: req.body.description,
  //   duration: req.body.duration,
  //   date: dat.split("T", "")
  //   },{new: true},(err,data) => {
  //    if(err) return console.log(err);
  //   res.json(data)
  //  })
  let exercises = {
    description: req.body.description,
    duration: Number(req.body.duration),
    date: req.body.date || defaultDate()
  }
  Users.findByIdAndUpdate(
    userId, // find user by _id
    { $push: { exercices: exercises } }, // add exObj to exercices[]
    { new: true },
    (err, data) => {
      if (err) return console.log(err)
      let returnObj = {
        username: data.username,
        description: exercises.description,
        duration: exercises.duration,
        _id: userId,
        date: new Date(exercises.date).toDateString()
      };
      res.json(returnObj);
    }
  );

})
app.get("/api/users/:_id/logs", (req, res) => {
  const userId = req.params._id;
  console.log(userId)
  Users.findById(userId, (err, data) => {
    if (err) return console.log(err)
    let user = new Users({
      username: data.username,
      exercices: [
        data.duration,
        data.description,
        data.date
      ]
    })
    console.log(data)
    res.json(user)
  })
})
*/
//=========================================
/*
//Excercise Schema
const exSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: String
})
//User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    log: [exSchema]
})
const User = mongoose.model("User", userSchema)
const ExModel = mongoose.model("Excercise", exSchema)

//app.use(cors())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});


//Endpoind Of user
app.post("/api/users").post(async (req, res) => {
    const { username } = req.body
    const user = await User.create({ username: username })
    res.json(user)
}).get(async (req, res) => {

    const user = await User.find()

    res.json(user)
})

//Excercise Endpoint

app.post("/api/users/:_id/exercises", async (req, res) => {
    const { description, duration, date } = req.body
    const { _id } = req.params
    let excercise = await ExModel.create({ description, duration: parseInt(duration), date })
    if (excercise.date === "") {
        excercise.date = new Date(Date.now()).toISOString().substr(0, 10)
    }
    await User.findByIdAndUpdate(_id, { $push: { log: excercise } }, { new: true }, (err, user) => {
        let responseObj = {}
        responseObj["_id"] = user._id
        responseObj["username"] = user.username
        responseObj["date"] = new Date(excercise.date).toDateString(),
            responseObj["description"] = excercise.description,
            responseObj["duration"] = excercise.duration

        res.json(responseObj)
    })

    res.json({})

})

//Logs Endpoint
app.get("/api/users/:_id/logs", async (req, res) => {
    if (req.params._id) {
        await User.findById(req.params._id, (err, result) => {
            if (!err) {
                let responseObj = {}
                responseObj["_id"] = result._id
                responseObj["username"] = result.username
                responseObj["count"] = result.log.length

                if (req.query.limit) {
                    responseObj["log"] = result.log.slice(0, req.query.limit)
                } else {
                    responseObj["log"] = result.log.map(log => ({
                        description: log.description,
                        duration: log.duration,
                        date: new Date(log.date).toDateString()
                    }))
                }
                if (req.query.from || req.query.to) {
                    let fromDate = new Date(0)
                    let toDate = new Date()
                    if (req.query.from) {
                        fromDate = new Date(req.query.from)
                    }
                    if (req.query.to) {
                        toDate = new Date(req.query.to)
                    }
                    fromDate = fromDate.getTime()
                    toDate = toDate.getTime()
                    responseObj["log"] = result.log.filter((session) => {
                        let sessionDate = new Date(session.date).getTime()

                        return sessionDate >= fromDate && sessionDate <= toDate
                    })
                }
                res.json(responseObj)
            } else {
                res.json({ err: err })
            }
        })
    } else {
        res.json({ user: "user not found with this id" })
    }
})
*/
//===========================================

let a = [
    {
        "description": "test",
        "duration": 60,
        "date": "Mon Jan 01 1990"
    },
    {
        "description": "test",
        "duration": 60,
        "date": "Wed Jan 03 1990"
    },
    {
        "description": "test",
        "duration": 60,
        "date": "Mon Jan 01 1990"
    }
]

a.sort()

console.log(a)