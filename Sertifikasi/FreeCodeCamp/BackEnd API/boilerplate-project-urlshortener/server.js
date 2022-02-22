require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns')
const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://anbiasenggagau:thatsmygirl@cluster0.vxsnx.mongodb.net/Url?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).catch(error => {
  console.log(error)
})

const Url = mongoose.model('Url', {
  short_url: String,
  original_url: String
})

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', async (req, res) => {
  const body = req.body

  const regex = /^http/

  const test = regex.test(body.url)

  if (!test) {
    console.log('salah')
    res.json({ error: "invalid url" })
  } else {

    let rows = await Url.estimatedDocumentCount()

    console.log(rows)

    const result = {
      short_url: String(rows + 1),
      original_url: body.url
    }

    console.log(result)

    const wait = await Url.insertMany(result)
    res.json(result)
  }
})

app.get('/api/shorturl/:short', async (req, res) => {
  const query = await Url.findOne({ short_url: req.params.short })
  console.log(query)
  res.redirect(query.original_url)
  // res.redirect('https://www.facebook.com')
})

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
