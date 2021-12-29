// Synchronous 

function getUserSync(id) {
    const nama = id === 1 ? 'Sandhika' : 'Galih';
    return { id, nama };
}

const getUserSync1 = function (id) {
    const nama = id === 1 ? 'Sandhika' : 'Galih';
    return { id, nama };

}

const getUserSync2 = id => {
    const nama = id === 1 ? 'Sandhika' : 'Galih';
    return { id, nama };
};

// console.log(getUserSync2(1));
// console.log(getUserSync(1));
// console.log(getUserSync1(2));

//===================================================================

// Asynchronous

const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;

    setTimeout(() => {
        const nama = id === 1 ? 'Sandhika' : 'Galih';
        callback({ id, nama });
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
})

const userDua = getUser(2, async (hasil) => {
    console.log(hasil);
    return console.log("Menunggu User ke 2");
})

const halo = "Hello World";
console.log('selesai');

