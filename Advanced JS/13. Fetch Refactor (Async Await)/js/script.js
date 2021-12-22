// Tambahkan parameter async pada depan function parent, dan tambahkan parameter await pada function yang ingin ditunggu. tanpa 2 parameter tersebut, console log tidak akan menunggu event loop yang sedang dijalankan yaitu mengakses data di API. sehingga hasil dari console log adalah promise dengan state pending
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', async function () {
    const keyword = document.querySelector('#search-input').value;
    const movies = await getMovies(keyword);
    // console.log(movies);
    updateUI(movies);
});

// event binding
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('see-details')) {
        const imdbID = e.target.dataset.id;
        movieDetail(imdbID);
        console.log(imdbID);
        console.log(e.target);
    }
})

function movieDetail(id) {
    fetch(`https://www.omdbapi.com/?apikey=d3016ea7&i=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const movieDetail = getMovieDetails(data);
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = movieDetail;
        })
}

function getMovies(keyword) {
    return fetch(`https://www.omdbapi.com/?apikey=d3016ea7&s=${keyword}`)
        .then(response => response.json())
        .then(response => response.Search)
}

function updateUI(movies) {
    let cards = "";
    movies.forEach(item =>
        cards += getCards(item)
    );
    const movieContainer = document.querySelector('#movie-list');
    movieContainer.innerHTML = cards;
}

function getCards(item) {
    return `
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
    `;
}

function getMovieDetails(data) {
    return `
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
    ` ;
}