const nama = "Muhammad Anbia Senggagau";
const umur = 23;

function cetakNama(item) {
    return `Hi, nama saya ${item}`;
}

console.log(cetakNama(nama));

// NodeJS tidak bisa mengakses global variable layaknya kita lakukan saat di browser
// console.log(window);

// fungsi cetak umur dari file module.js
const cetakUmur = require('./module.js');

console.log(cetakUmur(umur));