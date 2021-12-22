// DOM Traversal

const close = document.querySelectorAll('.close');

for(let i = 0; i<close.length; i++){
	close[i].addEventListener('click',function(event){
		event.target.parentElement.style.display = 'none'; // menambahkan style display bernilai none pada parent dari close[i]
	});
}

//DOM Traversal Method : merupakan penelusuran suatu element berdasarkan suatu titik element tertentu
// element.parentNode
// element.parentElement
// element.nextElementSibling
// element.previousElementSibling