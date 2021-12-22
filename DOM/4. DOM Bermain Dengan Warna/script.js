let tombol = document.getElementById('tombol');

let i = 0;
let j = 0;
let k = 0;
let warna = ['blue','red','green','yellow','black','white'];

tombol.addEventListener('click',function(){

	document.body.classList.toggle('biru-muda');
})

let rTombol = document.createElement('button');
let teksTombol = document.createTextNode('Acak Warna');
rTombol.appendChild(teksTombol);

rTombol.setAttribute('type','button');
rTombol.setAttribute('id','acak');
rTombol.style.marginLeft = '5px';

tombol.after(rTombol);

let br = document.createElement('br');

rTombol.after(br);
rTombol.after(br);

let sRed = document.querySelector('input[name=red]');
let sBlue = document.querySelector('input[name=blue]');
let sGreen = document.querySelector('input[name=green]');

i = sRed.value;
j = sGreen.value;
k = sBlue.value;

document.body.style.backgroundColor = 'rgb('+i+','+j+','+k+')' ;

sRed.addEventListener('input',function(){
	
	i = sRed.value;	
	document.body.style.backgroundColor = 'rgb('+i+','+j+','+k+')' ;
});

sGreen.addEventListener('input',function(){
	
	j = sGreen.value;	
	document.body.style.backgroundColor = 'rgb('+i+','+j+','+k+')' ;
});

sBlue.addEventListener('input',function(){
	
	k = sBlue.value;	
	document.body.style.backgroundColor = 'rgb('+i+','+j+','+k+')' ;
});

rTombol.addEventListener('click',function(){

	i = Math.floor(Math.random() * 256);
	sRed.value = i;
	j = Math.floor(Math.random() * 256);
	sGreen.value = j;
	k = Math.floor(Math.random() * 256);
	sBlue.value = k;
	document.body.style.backgroundColor = 'rgb('+i+','+j+','+k+')' ;

});

document.addEventListener('mousemove', function(event){

	let xPos = Math.floor((event.clientX / window.innerWidth) * 255);
	let yPos = Math.floor((event.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+k+')' ;
});