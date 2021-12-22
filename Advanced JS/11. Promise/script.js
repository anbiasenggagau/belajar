// Promise
// Object yang merepresentasikan keberhasailan / kegagalan sebuah event asynchronous di masa yang akan datang
// States (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then jika tepenuhi / catch jika reject)

// Contoh 1
let ditepati = 1;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati');
    }
    else {
        reject('Ingkar janji')
    }
})

//janji1.then(response => console.log('OK! : ' + response))
//    .catch(response => console.log('NOT OK! : ' + response));
//console.log(jajni1);

// Contoh 2
ditepati = 0;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Janji telah ditepati');
        }, 2000);
    }
    else {
        setTimeout(() => {
            reject('Ingkar janji');
        }, 2000);
    }
})

// // Akan melakukan callback promise dengan state pending, setelah selesai, barulah akan dipanggil callback lagi dengan state fulfilled, PERIKSA CONSOLE LOG
// console.log('Mulai');
// console.log(janji2.finally(() => console.log("Sudah Selesai Menunggu"))
//     .then(() => console.log(janji2))
//     .catch(() => console.log(janji2)));
// console.log('Selesai');

// // callback finally merupakan callback yang dipanggil ketika waktu menunggu sudah selesai, salah satu contoh penggunaan fungsi ini adalah ketika saat melakukan animasi loading pada website

// Promise.all()
// Berfungsi untuk memanggil lebih dari 2 promise sekaligus dengan menjalankan fungsi then, catch dan finally yang sama

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Sandhika',
            pemeran: 'Doddy, Erik'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            lokasi: 'Bandar Lampung',
            temp: 26,
            kondisi: 'Cerah berawan'
        }])
    }, 500);
});

Promise.all([film, cuaca])
    .then(Response => {
        const [film, cuaca] = Response;
        console.log(film);
        console.log(cuaca);
    });