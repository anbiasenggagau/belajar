function cetakUmur(item) {
    return `Halo saya berumur ${item}`;
}

const cetakNama = item => `Halo nama saya ${item}`;

let asal = "Bandar Lampung";

class Orang {

    nama = "Muhammad Anbia Senggagau";
    umur = 23;
    asal = "Bandar Lampung";
    perkenalan = function () {
        return `Halo nama saya ${this.nama} umur ${this.umur}, Saya berasal dari ${this.asal}`;
    }
}

// ketika dieksport, kita perlu meng-assign yang ingin dieksport pada properthy/method yang kita tentukan sendiri
module.exports.asal = asal;
module.exports.cetakUmur = cetakUmur;
module.exports.cetakNama = cetakNama;
module.exports.Orang = Orang;

