// // object literal
// let mahasiswa = {
//     nama: "Muhammad Anbia Senggagau",
//     umur: 23,
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Selamat Datang ${this.nama}, selamat makan`);
//     }
// }

//================================================================

// // function decleration
// function Mahasiswa(nama, umur, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.umur = umur;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Selamat Datang ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//     }
//     return mahasiswa;
// }

// let anbia = Mahasiswa('Muhammad Anbia', 23, 10);

//================================================================

// //constructor
// function Mahasiswa(nama, umur, energi) {
//     this.nama = nama;
//     this.umur = umur;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Selamat Datang ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//     }
// }

// let anbia = new Mahasiswa('Muhammad Anbia', 23, 10);

//================================================================

//metode penghematan memory

const methodMahasiswa = {

    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Selamat Datang ${this.nama}, selamat makan`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Selamat bermain ${this.nama}`);
    }
}

function Mahasiswa(nama, umur, energi) {

    let mahasiswa = Object.create(methodMahasiswa); // membuat object dengan mewariskan seluruh properthy dan method dari object methodMahasiswa
    mahasiswa.nama = nama;
    mahasiswa.umur = umur;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let anbia = Mahasiswa('Muhammad Anbia Senggagau', 23, 10);