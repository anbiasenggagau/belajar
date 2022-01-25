let nextButton=document.querySelector('.next')
let prevButton=document.querySelector('.prev')
let slide=document.querySelectorAll('.carousel-item')
let row=slide.length-1
let index

nextButton.addEventListener('click', () => {
    for (let i=0; i<row+1; i++) {
        if (slide[i].classList.contains('active')==true) {
            console.log(slide[i])
            index=i+1>row? 0:i+1
            // slide[i].classList.remove('active')
            slide[i].classList.add('disappear')
            break
        }
    }

    slide[index].classList.remove('disappear')
    // slide[index].classList.add('active')
})

prevButton.addEventListener('click', () => {
    for (let i=0; i<row+1; i++) {
        if (slide[i].classList.contains('active')==true) {
            console.log(slide[i])
            index=i-1<0? row:i-1
            // slide[i].classList.remove('active')
            slide[i].classList.add('disappear')
            break
        }
    }

    slide[index].classList.remove('disappear')
    // slide[index].classList.add('active')
})






/*
Permohonan aktivasi EFIN diajukan melalui email pajak resmi KPP Terdaftar Wajib Pajak. Satu email WP hanya untuk satu permohonan layanan aktivasi EFIN. Silakan mengisi dan menandatangani Formulir Aktivasi EFIN yang dapat dilihat pada Lampiran PER-06/PJ/2019 atau silakan lihat pada laman berikut: https://www.pajak.go.id/id/formulir-permohonan-efin

Wajib pajak juga perlu mengirimkan swafoto dengan memegang kartu NPWP dan KTP. Apabila semua data sesuai, EFIN akan dikirim dalam bentuk PDF melalui email oleh KPP Terdaftar.
Informasi email KPP dapat dilihat pada laman https://pajak.go.id/id/unit-kerja
*/