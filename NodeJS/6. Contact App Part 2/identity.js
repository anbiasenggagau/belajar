// Import module file system
const chalk = require('chalk');
const fs = require('fs');
const validator = require('validator');

// const readLine = require('readline');
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

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

//// Menghindari callback hell

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(`Tolong masukkan ${pertanyaan} anda : `, (pertanyaan) => {
//             resolve(pertanyaan);
//         });
//     });
// };

// mengambil data identitas di json
const loadJSON = () => {
    let fileJSON = fs.readFileSync(dataPath, 'utf-8')
    fileJSON = JSON.parse(fileJSON);
    return fileJSON;
}

const simpanIdentitas = (nama, ktp, email) => {

    const identitas = { "nama": nama, "ktp": ktp, "email": email };
    const fileJSON = loadJSON();

    // cek data duplikat
    const duplikat = fileJSON.find((identitas) => identitas.nama === nama);

    if (duplikat) {
        console.log(chalk`{bgRed Identitas sudah terdaftar, gunakan nama lain!}`);
        return false;
    }

    //cek valid email
    if (!validator.isEmail(email)) {
        console.log(chalk`{bgRed Email tidak valid}`);
        return false;
    }

    fileJSON.push(identitas);

    fs.writeFileSync(dataPath, JSON.stringify(fileJSON));

    console.log(chalk.green.inverse("Terima kasih sudah memasukkan data"));

    // rl.close();
};

const identityList = () => {
    const fileJSON = loadJSON();
    console.log(chalk`{cyan.inverse Daftar Identitas : }`)
    fileJSON.forEach((element, i) => {
        console.log(`${i + 1}. ${element.nama} - ${element.email}`)
    })
    return true;
};

const identityDetail = (nama) => {
    const fileJSON = loadJSON();
    const foundData = fileJSON.find(identitas => identitas.nama.toLowerCase() === nama.toLowerCase());

    if (!foundData) {
        console.log(chalk`{red.inverse Data tidak ditemukan}`);
        return false;
    }

    console.log(foundData.nama);
    console.log(foundData.email);
    console.log(foundData.ktp);

};

const deleteIdentity = (nama) => {
    const fileJSON = loadJSON();
    const index = fileJSON.findIndex((identitas) => identitas.nama.toLowerCase() === nama.toLowerCase());

    if (index < 0) {
        console.log(chalk`{red.inverse Data tidak ditemukan}`);
        return false;
    }

    fileJSON.splice(index, 1);
    fs.writeFileSync(dataPath, JSON.stringify(fileJSON));
    console.log(chalk`{green.inverse Data berhasil dihapus}`);
}

module.exports = { /*tulisPertanyaan,*/ simpanIdentitas, identityList, identityDetail, deleteIdentity };