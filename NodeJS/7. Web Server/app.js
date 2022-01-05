// HTTP Core Module untuk web server
const http = require('http');
const fs = require('fs')

// method create sever memiliki 2 parameter yaitu request dan response
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    // URL request yang kita masukkan ke dalam url bar di web browser
    const url = req.url;

    if (url == '/about') {
        // Membaca file about.html di folder yang sama
        fs.readFile('about.html', (err, data) => {
            // Jika file tidak ditemukan
            if (err) {
                res.writeHead(404)
                res.write('Error : File not found')
            }
            else {
                res.write(data)
            }
            res.end();
        })
    }

    else if (url == '/contact') {
        fs.readFile('contact.html', (err, data) => {
            // Jika file tidak ditemukan
            if (err) {
                res.writeHead(404)
                res.write('Error : File not found')
            }
            else {
                res.write(data)
            }
            res.end();
        })
    }
    else {
        fs.readFile('index.html', (err, data) => {
            // Jika file tidak ditemukan
            if (err) {
                res.writeHead(404)
                res.write('Error : File not found')
            }
            else {
                res.write(data)
            }
            res.end();
        })
    }
});

const port = 3000;

// Secara default port dan host dari method listener berturut-turut adalah 3000 dan localhost
server.listen(port, 'localhost', () => {
    console.log(`Server is listening on port ${port}..`);
})
