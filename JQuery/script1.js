// $.getJSON('https://v2.jokeapi.dev/joke/Any?type=single', function(data) {
//     console.log(data);
//     $('.container').prepend('<strong>' + data.joke + '<strong>' );
// });

$('.3').on('click',function(e){
    $.getJSON('https://v2.jokeapi.dev/joke/Any?type=single', function(data) {
    console.log(data);
    $('div.container strong').html(data.joke);
    }); 
})

$('.4').on('click',function(e){
    $.getJSON('https://v2.jokeapi.dev/joke/Programming?type=single', function(data) {
    console.log(data);
    $('div.container strong').html(data.joke);
    }); 
})

$("[type='submit'").on('click',function(e) {

    let pilihan = $('[name="input"').val();
    $.getJSON(('https://v2.jokeapi.dev/joke/Programming?type=single&contains=' + pilihan), function(data) {
    console.log(data);
    $('[name="input"').val('');
    $('div.container strong').html(data.joke);
    });
});