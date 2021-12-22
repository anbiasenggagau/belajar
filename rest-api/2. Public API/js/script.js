function searchMovies() {
    let keyword = $('#search-input').val();
    $.getJSON(`https://www.omdbapi.com/?apikey=d3016ea7&s=${keyword}`, function (data) {
        console.log(data);
        if (data.Response == "True") {
            $('#movie-list').empty();
            let movies = data.Search;
            $.each(movies, function (i, item) {
                $('#movie-list').append(`
                <div class="col-md-4">
                <div class="card">
                <img src="${item.Poster}" class="card-img-top" alt="No Poster Available">
                <div class="card-body">
                  <h5 class="card-title">${item.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${item.Year}</h6>
                  <a href="#" class="card-link see-details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${item.imdbID}" >See Details</a>
                </div>
              </div>
              </div>
                `)
            });

            $('#search-input').val('');

            $('.see-details').on('click', function () {
                $.getJSON(`https://www.omdbapi.com/?apikey=d3016ea7&i=${$(this).data('id')}`, function (data) {
                    if (data.Response === "True") {
                        $('.modal-body').html(`
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="${data.Poster}" class="img-fluid">
                                    </div>

                                    <div class="col-md-8">
                                        <ul class="list-group">
                                            <li class="list-group-item"><h3>${data.Title}</h3></li>
                                            <li class="list-group-item">Released : ${data.Released}</li>
                                            <li class="list-group-item">Genre : ${data.Genre}</li>
                                            <li class="list-group-item">Director : ${data.Director}</li>
                                            <li class="list-group-item">Actors : ${data.Actors}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `)
                    }
                })
            })

        }
        else {
            $('#movie-list').html(`<h1 class="text-center"> ${data.Error}`);
            $('#search-input').val('');
        }
    })
}

$('#search-button').on('click', function () {

    searchMovies();

    //// Dengan menggunakan AJAX
    // $.ajax({
    //     url: 'http://www.omdbapi.com/',
    //     type: 'get',
    //     dataType: 'json',
    //     data: {
    //         'apikey': 'd3016ea7',
    //         's': keyword
    //     },
    //     success: function (data) {
    //         console.log(data);
    //     }
    // })
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovies();
    }
});
