// DOM Selection

// perintahnya di bawah ini adalah = ("javascrip tolong carikan saya sebuah element yang id nya ... ")
// document.getElementById() -> element

const jdl = document.getElementById('judul');
jdl.style.color = 'yellow'; //mengubah style dari judul dengan menambah attribure color yang bernilai yellow
jdl.style.backgroundColor = 'grey' // mengubah style dari judul dengan menambah attribure background-color yang bernilai grey
jdl.innerHTML = 'Muhammad Anbia Senggagau';


// perintahnya di bawah ini adalah = ("javascrip tolong carikan saya tag html ... ")
// document.getElementsByTagName() -> HTMLCollections

const p = document.getElementsByTagName('p');
// mewarnai semua background tag p menjadi biru muda
for(var i=0;i<p.length;i++){
p[i].style.backgroundColor = 'lightblue';
}

// perintahnya di bawah ini adalah = ("javascrip tolong carikan saya tag html yang mempunyai class ... ")
// document.getElementsByClassName() -> HTMLCollections

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Paragraf yang sudah diubah';


// perintah ini memanfaatkan syantax selector dari css
// document.querySelector() -> element

const p4 = document.querySelector('#b p'); //cari tag p yang memiliki/dibungkus tag be-id = b
p4.style.color = 'green';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)'); //cari tag li yang ke 2 dari child ul dan child section yang ber-id = b
li2.style.backgroundColor = 'red';

// perintah ini memanfaatkan syantax selector dari css
// document.querySelectorAll() -> Nodelist

const pp = document.querySelectorAll('p');
for(let i=0;i<p.length;i++){
	pp[i].style.backgroundColor = 'blue';
	pp[i].style.color = 'white';
}


// memanipulasi node root
const sectionB = document.getElementById('b');
const ppp = sectionB.getElementsByTagName('p');
ppp[0].innerHTML = 'Diubah dengan menggunakan manipulasi node root';