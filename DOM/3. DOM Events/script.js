let p3 = document.querySelector('.p3');

//===========================================================================================

function ubahWarna(){
	p2.style.backgroundColor = 'lightblue'; 
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

//===========================================================================================
 let i = 0;
p3.addEventListener('click', function(){
	// menambah item baru pada list di section B ketika paragraf 3 di klik kanan
	let ul = document.querySelector('section#b ul');
	let li = document.createElement('li');
	let textLi = document.createTextNode('Item baru ' + (i + 1));
	li.appendChild(textLi);
	ul.appendChild(li);
	i++;

});

document.addEventListener('contextmenu',function(){
	alert('Dilarang untuk mengcopy dokumen')
});
document.addEventListener('contextmenu',event => event.preventDefault());

p3.style.backgroundColor = 'white';
p3.addEventListener('click',function(){
	if(p3.getAttribute('style') == 'background-color: white;'){
		p3.style.backgroundColor = 'lightblue';	
	}
	else{
		p3.style.backgroundColor = 'white';
	}
	
});