// Dengan memanfaatkan command "npm (nama pada object script)", kita dapat menjalankan suatu perintah tertentu.
// contohnya adalah "npm start" (perhatikan file package.json object script), hal ini kan menjalankan file app.js
// "npm run dev" (perhatikan file package.json object script) untuk menjalankan script yang bukan nodeJS

// kunjungi https://www.npmjs.com/ untuk mendapatkan informasi package
// "npm install validator" untuk menginstall package validator
// "npm install validator@13.5.2" untuk menginstall package validator versi 13.5.2
// "npm uninstall validator" untuk un-install package validator

// console.log('Hello World!');

const validator = require('validator');

let val = validator.isEmail('foo@bar.com');
console.log(val);
val = validator.isMobilePhone('0856560789', 'id-ID');
console.log(val);
val = validator.isNumeric('072155685');
console.log(val);

const chalk = require('chalk');

console.log(chalk.blue('Hello world!')); // Tulisan biru
console.log(chalk.bgRed('Hello world!')); // Background merah
console.log(chalk.bgRed.yellow('Hello world!')); // Background merah dan tulisan kuning

let pesan = 'Muhammad Anbia Senggagau';

console.log(chalk.bgYellow.blue.bold.underline(pesan));

// Using template literals
const message = "form";
pesan = chalk`{red What was it?} Are {bgBlue.italic you} even sure it is a true {yellow.bgGreen ${message}} of yours?`;
console.log(pesan);

// package nodemon berguna untuk otomatisasi monitoring dari source code kita setiap kali kita melakukan save.
// ketika menjalankan nodemon secara lokal, kita harus meng-assign ke dalam object script di package.json command "nodemon (nama script js)"