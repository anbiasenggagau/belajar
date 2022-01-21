// async function getPhotos() {
//     for (let i=0; i<6; i++) {
//         await $.getJSON("https://api.thecatapi.com/v1/images/search", function (data) {
//             $(`.carousel-inner .carousel-item:nth-child(${i+1}) img`).attr('src', data[0].url)
//         })
//     }

// }

// getPhotos();
/*
$('.carousel-control-next').click(function () {
    let carouselItem=document.querySelectorAll('.carousel-item')
    let row=carouselItem.length-1
    let index
    console.log(row)
    carouselItem.forEach((element, i) => {
        if (element.classList.contains('active')) {
            index=i
        }
    })

    // index=index == row? row:index-1

    console.log(carouselItem[index])

    carouselItem.forEach(element => {
        element.classList.remove('disapear')
    })
    carouselItem[index].classList.add('disapear')

    // carouselItem.classList.removeClass('active')
    // carouselItem[index].classList.addClass('active')
    // carouselItem[index].classList.addClass('')



})
*/

/*
Permohonan aktivasi EFIN diajukan melalui email pajak resmi KPP Terdaftar Wajib Pajak. Satu email WP hanya untuk satu permohonan layanan aktivasi EFIN. Silakan mengisi dan menandatangani Formulir Aktivasi EFIN yang dapat dilihat pada Lampiran PER-06/PJ/2019 atau silakan lihat pada laman berikut: https://www.pajak.go.id/id/formulir-permohonan-efin

Wajib pajak juga perlu mengirimkan swafoto dengan memegang kartu NPWP dan KTP. Apabila semua data sesuai, EFIN akan dikirim dalam bentuk PDF melalui email oleh KPP Terdaftar.
Informasi email KPP dapat dilihat pada laman https://pajak.go.id/id/unit-kerja
*/