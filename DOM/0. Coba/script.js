const inputUang=document.querySelectorAll('.input-uang');
const hasil=document.querySelectorAll('.hasil');
const total=document.querySelector('.total');
const arrayRupiah=[100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000, 1000, 500, 200, 100];
const tambah=document.querySelector('button.my-1');


for (let i=0; i<arrayRupiah.length; i++) {
    inputUang[i].addEventListener('input', function () {
        hasil[i].value=inputUang[i].value*arrayRupiah[i]
    });
}


tambah.addEventListener('click', function (e) {
    let result=0;
    for (let j=0; j<hasil.length; j++) {
        if (hasil[j].value=="") result+=0;
        else {
            result+=parseFloat(hasil[j].value);
        }
    }
    total.value=result;
});

