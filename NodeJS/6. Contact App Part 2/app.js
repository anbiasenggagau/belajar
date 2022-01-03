// // Melakukan import local module yang masing-masing elemen object-nya diassign dengan menggunakan destructuring
// const { tulisPertanyaan, simpanIdentitas } = require('./identity')

// const main = async () => {
//     const nama = await tulisPertanyaan('nama');
//     const ktp = await tulisPertanyaan('ktp');
//     const email = await tulisPertanyaan('email');

//     simpanIdentitas(nama, ktp, email)
// }

// main();

// =============================================================================================

// menggunakan NPM yargs untuk menambahkan data baru ke file json pada command line

// Contoh command yang bisa digunakan
// node app add --nama="Anbia" --ktp="464654" --email="46451"
const yargs = require("yargs");
const { simpanIdentitas, identityList, identityDetail, deleteIdentity } = require("./identity");

yargs.command({
    command: 'add',
    describe: 'Menambahkan identitas baru',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        },
        ktp: {
            describe: "No KTP",
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: "email",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const identitas = {
            nama: argv.nama,
            ktp: argv.ktp,
            email: argv.email
        };
        simpanIdentitas(identitas.nama, identitas.ktp, identitas.email);
    },
}).demandCommand();

// menampilkan daftar identitas
yargs.command({
    command: 'list',
    describe: 'Menampilkan seluruh identitas di file json',
    handler() {
        identityList();
    },
});

// menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail salah seorang berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        identityDetail(argv.nama);
    },
});

// menghapus identitas
yargs.command({
    command: 'delete',
    describe: 'Menaghapus identitas seseorang berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        deleteIdentity(argv.nama);
    },
});

yargs.parse()