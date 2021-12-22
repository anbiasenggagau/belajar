//for .. of dibanding dengan for each

const mhs = ['Sandhika', 'Doddy', 'Erik'];

mhs.forEach(m => console.log(m));

for (const m of mhs) {
    console.log(m);
}

// iterasi masing-masing karakter dari string dengan menggunakan for .. of
const nama = 'Muhammad Anbia Senggagau';
for (const n of nama) {
    console.log(n);
}

// arguments
function jumlahkanAngka() {
    console.log(arguments); // ketika kita tidak meng-assign parameter pada function, maka secara default, argument yang kita assign akan tersimpan di variable bernama arguments
    let jumlah = 0;
    for (const a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));