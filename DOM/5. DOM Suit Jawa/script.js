let info = document.getElementsByClassName('info')[0];

let suitComputer = document.getElementsByClassName('img-komputer')[0]

let pilihan = document.querySelectorAll('li img');

let suit = ['gajah','orang','semut'];
let i = 0;
let hasil;

let player;

function acakComputer(){

	i = Math.floor(Math.random() * 3);
	suitComputer.setAttribute('src','img/'+suit[i]+'.png');
}

function penentuan(comp,player){
	if(player == comp) return ' SERI! ';
	if(player == 'gajah') return ( comp == 'orang') ? ' MENANG! ' : ' KALAH! ';
	if(player == 'orang') return ( comp == 'semut') ? ' MENANG! ' : ' KALAH! ';
	if(player == 'semut') return ( comp == 'gajah') ? ' MENANG! ' : ' KALAH! ';
}

function putar(){

	let waktuMulai = new Date().getTime();

	setInterval(function(){

		if (new Date().getTime() - waktuMulai < 1000){
			suitComputer.setAttribute('src','img/'+suit[i++]+'.png');
			
			if(i==suit.length){
				i=0;
			}
		}

		else{
			clearInterval;
			return;
		}

	},100)
}

pilihan.forEach(function (pil) {
	pil.addEventListener('click', function(){

		putar();

		setTimeout(function(){

			acakComputer();
			player = pil.className;

			hasil = penentuan(suit[i],player);

			info.innerHTML = hasil;
		},1000);
	});

});