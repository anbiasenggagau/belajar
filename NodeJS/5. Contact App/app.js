// Import module file system
const fs = require('fs');

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Membuar folder data, jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file json, jika belum ada
const dataPath = './data/daftarIdentitas.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Menuliskan file JSON dari masukkan user

// rl.question('Tolong masukkan nama anda : ', nama => {
//     rl.question('Tolong masukkan No. KTP anda : ', ktp => {
//         const identitas = { "nama": nama, "ktp": ktp };
//         let fileJSON = fs.readFileSync(dataPath, 'utf-8')
//         fileJSON = JSON.parse(fileJSON);

//         fileJSON.push(identitas);

//         fs.writeFileSync(dataPath, JSON.stringify(fileJSON));

//         console.log("Terima kasih sudah memasukkan data");

//         rl.close();
//         // return `Terima Kasih ${nama} dengan nomor NIK ${ktp}`;
//     })
// })

// Menghindari callback hell

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(`Tolong masukkan ${pertanyaan} anda : `, (pertanyaan) => {
            resolve(pertanyaan);
        });
    });
};

const main = async () => {
    const nama = await tulisPertanyaan('nama');
    const ktp = await tulisPertanyaan('ktp');
    const email = await tulisPertanyaan('email');

    const identitas = { "nama": nama, "ktp": ktp, "email": email };
    let fileJSON = fs.readFileSync(dataPath, 'utf-8')
    fileJSON = JSON.parse(fileJSON);

    fileJSON.push(identitas);

    fs.writeFileSync(dataPath, JSON.stringify(fileJSON));

    console.log("Terima kasih sudah memasukkan data");

    rl.close();
}

main();