const jumbo = document.querySelector('.jumbo');
const foto = document.querySelector('.thumbnail');
const fotoPilihan = document.querySelectorAll('.thumbnail img');

foto.addEventListener('click',function(e){
	let audio = new Audio('Closing.mp3');
	jumbo.setAttribute('src',e.target.getAttribute('src'));
	jumbo.classList.add('fade');

	fotoPilihan.forEach(function(thumb){
		thumb.classList.remove('active');
	});

	e.target.classList.add('active');
	setTimeout(function(){
		jumbo.classList.remove('fade');
	},500);

	audio.play();
	setTimeout(function(){
		audio.load();
	},5000);
});