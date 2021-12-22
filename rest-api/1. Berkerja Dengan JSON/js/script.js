// Isi element ber-id daftar-menu dengan element menu yang didapat dari JSON
$.getJSON('json/pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
        $('#daftar-menu').append(`
        <div class="col-md-4">
        <div class="card mb-3">
            <img src="json/img/pizza/${data.gambar}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.nama}</h5>
                <p class="card-text">${data.deskripsi}</p>
                <h5 class="card-title"> Rp. ${data.harga}</h5>
                <a href="#" class="btn btn-primary">Order Now</a>
            </div>
        </div>
    </div>`)
    })
});

// menambah event listener pada pilihan navbar jika diklik
$('.nav-link').on('click', function (e) {
    // men-toggle kelas active pada pilihan navbar
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    // mengambil kategori yang diklik dan mengganti element h1 menjadi kategori tersebut
    let kategori = $(this).html();
    $('h1').html(kategori);

    // mengecek apakah kategori yang dipilih merupakan bukan kategori All menu, jika iya, filter diterapkan
    if (kategori != 'All Menu') {
        $.getJSON('json/pizza.json', function (data) {
            let menu = data.menu;
            let filtered = menu.filter(item => item.kategori === kategori.toLowerCase());
            // menghapus seluruh isi element yang terdapat di tag ber-id daftar-menu
            $('#daftar-menu').empty();
            $.each(filtered, function (i, data) {
                $('#daftar-menu').append(`
                <div class="col-md-4">
                <div class="card mb-3">
                    <img src="json/img/pizza/${data.gambar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.nama}</h5>
                        <p class="card-text">${data.deskripsi}</p>
                        <h5 class="card-title"> Rp. ${data.harga}</h5>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>`)
            })

        });
    }

    // jika tidak, maka tidak perlu diterapkan filter
    else {
        $('#daftar-menu').empty();
        $.getJSON('json/pizza.json', function (data) {
            let menu = data.menu;
            $.each(menu, function (i, data) {
                $('#daftar-menu').append(`
                <div class="col-md-4">
                <div class="card mb-3">
                    <img src="json/img/pizza/${data.gambar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.nama}</h5>
                        <p class="card-text">${data.deskripsi}</p>
                        <h5 class="card-title"> Rp. ${data.harga}</h5>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>`)
            })
        });
    }
});

