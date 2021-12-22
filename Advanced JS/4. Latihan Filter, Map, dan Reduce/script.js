// ambil semua li yang memiliki attribute data-duration
let durationList = document.querySelectorAll("li[data-duration]");
durationList = Array.from(durationList); // mengubah node list menjadi array

// filter daftar durasi yang didapat di mana kita hanya memilih yang merupakan video js lanjutan
let jsOnly = durationList.filter(durationList => durationList.textContent.includes("JAVASCRIPT"))

    //ambil durasi masing masing video, lalu totalkan
    .map(item => item.dataset.duration)
    .map(waktu => {
        let timeArray = waktu.split(':').map(timeArrays => parseFloat(timeArrays));
        return (timeArray[0] * 60 + timeArray[1]);
    })
    .reduce((total, time) => total + time, 0);

//Ubah menjadi format jam:menit:detik
let hours = Math.floor(jsOnly / 3600);
let minutes = Math.floor((jsOnly - hours * 3600) / 60);
let seconds = jsOnly - hours * 3600 - minutes * 60;

let totalDuration = `${hours} Jam ${minutes} Menit ${seconds} Detik`;


console.log(totalDuration);

//masukkan data yang didapatkan ke innerHTML
let jumlahVideo = document.querySelector('.jumlah-video');
jumlahVideo.innerHTML = `${durationList.filter(durationList => durationList.textContent.includes("JAVASCRIPT")).length} Video`;

let totalDurasi = document.querySelector('.total-durasi');
totalDurasi.innerHTML = totalDuration;