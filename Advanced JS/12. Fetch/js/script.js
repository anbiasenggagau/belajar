// fetch 
const searchButton = document.querySelector('#search-button');
// ketika search button di klik
searchButton.addEventListener('click', function () {
    const keyword = document.querySelector('#search-input');
    fetch(`https://www.omdbapi.com/?apikey=d3016ea7&s=${keyword.value}`)
        .then(response => response.json())
        .then(response => {
            let cards = "";
            const movies = response.Search;
            movies.forEach(item => {
                cards += getCards(item);
            });

            const movieContainer = document.querySelector('#movie-list');
            movieContainer.innerHTML = cards;

            // Ketika tombol detail diklik
            const modalDetailButton = document.querySelectorAll('.see-details');
            modalDetailButton.forEach(item => {
                item.addEventListener('click', function () {
                    // mengambil data attibute dengan nama id dari tombol yang sedang di-klik (thia)
                    const imdbID = this.dataset.id;
                    console.log(imdbID);
                    fetch(`https://www.omdbapi.com/?apikey=d3016ea7&i=${imdbID}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            const movieDetal = getMovieDetails(data);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetal;
                        })
                })
            })
        });
})

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