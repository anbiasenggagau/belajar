const nama = "Muhammad Anbia Senggagau";
const umur = 23;

// semua yang dieksport dari file module.js, akan disimpan pada variable object
const localModule = require('./module.js');

console.log(localModule.asal)
console.log(localModule.cetakNama(nama));
console.log(localModule.cetakUmur(umur));

// Inisialiasai class yang berada pada object yang sudah diexport dari file lain
const saya = new localModule.Orang();

console.log(saya.nama);
console.log(saya.umur);
console.log(saya.asal);
console.log(saya.perkenalan());
