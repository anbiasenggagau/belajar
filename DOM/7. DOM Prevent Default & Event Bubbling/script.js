// DOM Traversal

const close = document.querySelectorAll('.close');

for(let i = 0; i<close.length; i++){
	close[i].addEventListener('click',function(event){
		// event.target.parentElement.style.display = 'none'; // menambahkan style display bernilai none pada parent dari close[i]
		event.preventDefault(); // men disable perilaku tag anchor yang pada keadaan normalnya, kita akan dibawa ke halaman lain, namun kali ini hal tersebut sudah di disable
		// event.stopPropagation(); // menghentikan seluruh event yang akan terjadi di masa depan sehingga, event yang akan terjadi hanya sampai pada syntax ini saja
	});
}

const container = document.querySelector('.container');
container.addEventListener('click',function(e){
	if(e.target.className == 'close'){
		e.target.parentElement.style.display = 'none';
	}
});


// pada suatu function, akan ter-assigned secara otomatis sebuah object bernama event (bisa dimodifikasi namanya).
// di mana event ini berisi properthy yaitu target yang bernilai element yang kita click pada mouse
// melalui object event ini kita dapat menggunakan method preventDefault() untuk men disbale perilaku tag html seperti tag anchor (<a>) yang membawa kita ke halaman lain
// terdapat juga method stopPropagation yang berguna untuk memberhentikan eksekusi program javascript sehingga source code akan berhenti peng-eksekusiannya pada titik tersebut
