// Import module file system
const fs = require('fs');

// // Menulis/membuat file baru secara synchronous
// fs.writeFileSync('text.txt', 'Hello World secara synchronous');

// // Menulis/membuat file baru secara asynchronous
// fs.writeFile('text1.txt', 'Hello World secara asynchronous', e => {
//     if (e) throw e;
//     // console.log("File has been saved");
// });

// // Membaca file secara synchronous
// const dataSync = fs.readFileSync('text.txt', 'utf-8');
// console.log(dataSync);

// // Membaca file secara asynchronous
// const dataAsync = fs.readFile('text1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Masukkan nama anda : ', nama => {
//     console.log(`Terima kasih ${nama}`);
//     rl.close();
// });

// Menuliskan file JSON dari masukkan user

rl.question('Tolong masukkan nama anda : ', nama => {
    rl.question('Tolong masukkan No. KTP anda : ', ktp => {
        const identitas = { nama, ktp };
        let fileJSON = fs.readFileSync('daftarIdentitas.json', 'utf8')
        fileJSON = JSON.parse(fileJSON);

        fileJSON.push(identitas);

        fs.writeFileSync('daftarIdentitas.json', JSON.stringify(fileJSON));

        console.log("Terima kasih sudah memasukkan data");

        rl.close();
        // return `Terima Kasih ${nama} dengan nomor NIK ${ktp}`;
    })
})

