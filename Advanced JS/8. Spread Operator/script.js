// Speread Operator
// Memecah iterable menjadi single element

const mhs = ['Sandhika', 'Doddy', 'Erik'];
console.log(...mhs);
console.log(...mhs[0]);

// Mengabungkan 2 orang
const dosen = ['Ade', "Hendra", "Wanda"];
let orang = [...mhs, ...dosen];
console.log(orang);

// Cara lain
orang = mhs.concat(dosen);
console.log(orang);

// Menambahkan elemen lain diantara 2 array
orang = [...mhs, 'Aji', ...dosen];
console.log(orang);

//// Meng-copy array
// const mhs1 = mhs;
// mhs1[0] = "Fajar"; // Element index ke-0 di mhs dan di mhs1 akan berubah dua-duanya
// console.log(mhs1, mhs)

const mhs1 = [...mhs];
mhs1[0] = 'Fajar';  // Hanya array dari mhs1 yang berubah nilainya
console.log(mhs1, mhs)

//// Mengambil element pada DOM untuk dijadikan array
// const liMhs = Array.from(document.querySelectorAll('li'));
// orang = liMhs.map(a => a.textContent);
// console.log(orang);
// liMhs[1].innerHTML = "Muhammad Anbia Senggagau";

//// Cara lain dengan menggunakan Spread Operator
const liMhs = Array.from(document.querySelectorAll('li'));
orang = [...liMhs].map(a => a.textContent);
console.log(orang);
liMhs[2].innerHTML = "Muhammad Anbia Senggagau";

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => h == ' ' ? `<span class="nama" style="width: 10px;">${h}</span>` : `<span class="nama">${h}</span>`);

nama.innerHTML = [...huruf].join('');
nama.classList.toggle("nama");
console.log(huruf);