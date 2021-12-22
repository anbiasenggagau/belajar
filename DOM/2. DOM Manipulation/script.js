// MANIPULASI ELEMENT

// // // const judul = document.getElementById('judul');
// // // judul.innerHTML = '<b>Sudah diubah</b>';

// // // const sectionA = document.querySelector('section#a');
// // // sectionA.innerHTML = '<em>Sudah diubah</em>';

//=============================================================================================

// // let judul = document.querySelector('#judul');
// // judul.style.color = 'white';
// // judul.style.backgroundColor = 'blue';

// // judul = document.getElementsByTagName('h1')[0];
// // judul.setAttribute('href','www.facebook.com'); // menambah attribute baru bernama href yang bernilai www.facebook.com

// // let a = document.getElementsByTagName('a')[0];

// // console.log(a.getAttribute('href')); // mendapatkan nilai dari suatu attribute pada tag

// // a.setAttribute('href','https://www.linkedin.com');  // ketika memasukkan attribute yang sudah ada, maka attribute tersebut akan diubah nilainya

// // a.removeAttribute('href'); // menghapus suatu attribute

// // let p = document.getElementsByTagName('p');
// // for(let i=0; i<p.length;i++){
// // 	p[i].setAttribute('class','p'+(i+1));
// // }

// // let p2 = document.querySelector('.p2'); //mengambil element yang mempunyai kelas p2
// // p2.innerHTML = 'paragraf Sudah diubah dengan menggunakan setAttribute';

//=============================================================================================

// let p2 = document.querySelector('.p2');
// p2.classList.add('label');

// let p1 = document.querySelector('.p1');
// p1.classList.remove('p1');

// let p4 = document.querySelector('.p4');
// p4.classList.toggle('biru-muda') // mengecek apakah ada class biru-muda pada suatu elemen, jika tidak, maka akan dibuat class tersebut, jika iya, maka class tersebut akan dihapus
// p4.classList.toggle('p4') // mengecek apakah ada class p4 pada suatu elemen, jika tidak, maka akan dibuat class tersebut, jika iya, maka class tersebut akan dihapus

// p4.classList.add('satu');
// p4.classList.add('dua');
// p4.classList.add('tiga');
// console.log(p4.classList.item(3)); // meminta nama kelas pada index ke-3 (index mulai dari nol)

// console.log(p4.classList.contains('tiga')); // mengecek apakah terdapat kelas tiga pada element tersebut

// console.log(p4.classList.replace('satu','bukan-satu'));

// // element.setAttribute
// // element.getAttribute
// // element.removeAttribute

// // element.classList.add() - menambah
// // element.classList.remove() - menghapus
// // element.classList.toggle() - melakukan logika not
// // element.classList.item() - mengecek suatu element dari suatu index (jika element tersebut memiliki lebih dari 1 class)
// // element.classList.contains() - mengecek suatu element apakah terdapat suatu kelas tertentu
// // element.classList.replace() - menimpa suatu kelas menjadi yang lain


//=============================================================================================
//=============================================================================================
//=============================================================================================

// MANIPULASI NODE

let pBaru = document.createElement('p');
let teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// menambah element yang sudah disiapkan menjadi sebagai child dari element sectionA
let sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // menyimpan di bagian akhir dari element tersebut

//=============================================================================================

let liBaru = document.createElement('li');
let teksLiBaru = document.createTextNode('Item Baru');

// simpan tulisan ke dalam paragraf
liBaru.appendChild(teksLiBaru);

let ul = document.querySelector('section#b ul');
let li2 = ul.querySelector('li:nth-child(2)');

// menambah element libaru untuk dimasukkan ke dalam parent ul sebagai child dengan penempatannya sebelum child li2
ul.insertBefore(liBaru,li2);

//=============================================================================================

let link = document.getElementsByTagName('a')[0];

// menghapus child node link dari parent sectionA
sectionA.removeChild(link);

//=============================================================================================

let sectionB = document.getElementById('b');
let p4 = sectionB.querySelector('p');

let aBaru = document.createElement('a');
let teksA = document.createTextNode('tag paragraf 4 yang tadinya p sudah diubah menjadi tag a');
aBaru.appendChild(teksA);
aBaru.setAttribute('href','https://linkedin.com');

sectionB.replaceChild(aBaru,p4)

//=============================================================================================

aBaru.style.backgroundColor = 'red';
liBaru.style.backgroundColor = 'red';
pBaru.style.backgroundColor = 'red';

aBaru.style.color = 'white';
liBaru.style.color = 'white';
pBaru.style.color = 'white';