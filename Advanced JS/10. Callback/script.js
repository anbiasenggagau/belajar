// // Callback, merupakan function yang menggunakan argument function juga
// // Synchronous Callback

// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(halo);

// // Asynchronous dengan menggunakan JQuery
// // Asynchronous Callback memungkinkan kita untuk melompati Synchronous Callback

// console.log('mulai');
// $.ajax({
//     url: 'https://v2.jokeapi.dev/joke/Any?type=single',
//     success: (result) => {
//         console.log(result.joke);
//     },
//     error: (e) => {
//         console.log(e);
//     }
// })
// console.log('selesai')
// // Periksa Hasilnya di console log

//============================================================

