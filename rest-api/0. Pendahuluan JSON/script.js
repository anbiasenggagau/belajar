const mahasiswa = {
    nama: "Muhammad Anbia Senggagau",
    nim: 13117056,
    email: "muhammadsenggagau@gmail.com"
}

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = this.responseText;
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'http://localho.st/rest-api/json/coba.json', true);
// xhr.send();

// Menggunakan AJAX untuk JSON akan secara otomatis membuat JSON menjadi Object
$.getJSON('http://localho.st/rest-api/json/coba.json', function (data) {
    console.log(data);
})