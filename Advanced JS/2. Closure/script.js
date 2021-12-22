function init() {
    let nama = "Muhammad Anbia";    //local variable
    function TampilNama() {          //inner function (closure*)
        console.log(nama);          //akses ke parent variable
    }
    TampilNama();
}

//init();

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

//selamatPagi('Muhammad Anbia Senggagau');
//selamatSiang('Muhammad Anbia Senggagau');

