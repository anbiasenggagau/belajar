
//Jquery adalah library yang mampu mempersingkat syntax-syntax yang ada pada javascript DOM dan juga dapat mempermudah mekanisme selecting element javascript
//Jquery harus diload paling awal diantara source code lainnya

//===============================================================================

console.log($("h1").css("color"));  //mengambil element h1 dan mendapatkan value dari css attribute color

$("h1").css("color","red"); // mengambil element h1 dan mengubah css attribute color menjadi red

$('.1').on('click',function(){		// mengambil element yang memiliki class '1' dan menambahkan eventListener 'click'
	$("h1").css("color","blue");	
});

$('.2').on('click',function(){
	$("h1").css("color","purple");	
});

$('.3').on('click',function(){
	$("h1").css("color","green");	
});

$('.4').on('click',function(){
	$("h1").css("color","orange");	
});

$('.5').on('click',function(){
	$("h1").toggleClass("big-title");	// mengambil element h1 dan men-toggle class big-title
});

//===============================================================================

// $("h1").removeClass("big-title big-margin big-padding"); // mengambil element h1 dan menghapus 3 class yang terdaftar

//.addClass() - menambah class dari element
//.removeClass() - menghapus class dari element
//.hasClass() - memeriksa apa suatu element mempunyai class tertentu
//.toggleClass() -  menerapkan fungsi not pada element untuk attribute class

//===============================================================================

// $("button").html("<b>don't click me!<b>"); // merubah tulisan semua tag button menjadi don't click me

$("button:first").html("<b>don't click me!<b>");
$("button:last").html("<i>don't click me!<i>");
$(".2").text("<i>don't click me!<i>");

//===============================================================================

$("h1").after("<a href='https://www.facebook.com'>testing</a>"); // menambah element a setelah element h1

//$("h1").before()
//$("h1").after()
//$("h1").prepend()
//$("h1").append()

//===============================================================================
//animation

// $('h1').fadeToggle();
// $('h1').slideToggle();