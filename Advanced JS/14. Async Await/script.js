const coba = new Promise(resolve => {
    setTimeout(() => resolve('selesai'), 1000);
});

//coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve('selesai'), 1000);
    });
}

// const coba1 = cobaPromise();
// coba1.then(() => console.log(coba1));

async function cobaAsync() {
    const coba1 = await cobaPromise();
    console.log(coba1);
}

cobaAsync();

// Gunakan try dan catch untuk mengkondisikan state dari promise (try untuk resolved dan catch untuk rejected)
async function cobaAsync1() {
    try {
        const coba1 = await cobaPromise();
        console.log(coba1);
    }
    catch (err) {
        console.log(err);
    }
}