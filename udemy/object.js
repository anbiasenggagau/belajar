//constructor

function BellBoy (name, age, language){
	this.name = name;
	this.age = age;
	this.language = language;
	this.moveTheCase = function(){
		alert('Cased moved out');
	}
}

let boy1 = new BellBoy('Muhammad Anbia', 25, 'Indonesia');
boy1.moveTheCase();