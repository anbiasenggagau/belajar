// server.js
// where your node app starts


// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages(),
    software: req.get('User-Agent')
  })
})

app.get('/api/:date', (req, res) => {
  const date = req.params.date

  let d

  let isNum = /^\d+$/.test(date)

  if (!isNum) {
    d = new Date(date)
  }
  else {
    d = new Date(parseInt(date))
  }

  if (d == "Invalid Date") {
    res.json({ error: 'Invalid Date' })
  }
  else {
    res.json({ unix: d.getTime(), utc: d.toUTCString() })
  }
})

app.get('/api/', (req, res) => {
  const d = new Date()
  res.json({ unix: d.getTime(), utc: d.toUTCString() })
})

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});



// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
