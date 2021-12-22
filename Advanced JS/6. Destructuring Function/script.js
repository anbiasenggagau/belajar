function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b]; //mengembalikan array dengan 2 index
}

////assign hasil array ke variable
//let jumlah = kalkulasi(2, 3)[0];
//let kali = kalkulasi(2, 3)[1];

//console.log(jumlah, kali);

////cara lain jika menggunakan destructuring, dan juga hanya mengambil index tertentu saja
//[jumlah, , kali, ,] = kalkulasi(2, 3);

//console.log(jumlah, kali);

////mengambil nilai index pertama kemudian sisanya dijadikan array ke variable bertitik 3
//let [tambahan, ...sisaNya] = kalkulasi(2, 3);

//console.log(tambahan, sisaNya);

////Ketika terdapat variable berlebih, variable tersebut akan menjadi undefined, kecuali terdapat nilai default nya
//[jumlah, kurang, kali, bagi, gakTau = "Default value ketika terdapat variable yang tidak mendapat nilai"] = kalkulasi(2, 3);

//console.log(jumlah, kurang, kali, bagi, gakTau);

////ketika fungsi mengembalikan array, maka destructuring harus memperhatikan urutannya, berbeda ketika mengembalikan object
function newKalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kalian: a * b,
        bagi: a / b
    }
}

//let { bagi, kurang, tambah, kalian } = newKalkulasi(2, 3);

//console.log(tambah, kurang, kalian, bagi);

//Destructuring pada argument function
const mhs = {
    nama: "Muhammad Anbia Senggagau",
    umur: 23,
    nilai: {
        tugas: 80,
        uts: 75,
        uas: 65
    }
}

// nilai dari properthy langsung diassign ke dalam variable yang namanya sama dengan properthy tersebut
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur}, dan nilai UAS saya adalah ${uas}`;
}

console.log(cetakMhs(mhs));