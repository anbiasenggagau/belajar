function dikerjakan() {
    console.log("Tugas selesai dikerjakan");
}

function kerjakanTugas(mataKuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${mataKuliah}.`);
    selesai();
}

//kerjakanTugas("Pemograman Javascript", dikerjakan);

//===================================================================================

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//filter

let newAngka = angka.filter(function (a) {
    return a % 2 == 0;      // hanya mengambil angka genap
});

//cara arrow function
newAngka = angka.filter(a => a % 2 == 0    // hanya mengambil angka genap
);

//console.log(newAngka);

//map

newAngka = angka.map(function (a) {
    return a * 2;       //mengakilkan seluruh elemen array dengan angka dikali 2
})

//cara arrow function
newAngka = angka.map(a => a * 2);   //mengakilkan seluruh elemen array dengan angka dikali 2

//console.log(newAngka);

//reduce
// menjumlahkan seluruh angka dari elemen, dengan accumulator sebagai angka pertamanya, dan currentValue sebagai angka perulangannya
newAngka = angka.reduce((accumulator, currentValue) => accumulator += currentValue, 0); //0 merupakan angka inisialisasi

//console.log(newAngka);

//===================================================================================

//Method Chaining
newAngka = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((accumulator, currentValue) => accumulator += currentValue, 0);

console.log(newAngka);
