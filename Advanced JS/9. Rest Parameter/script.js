// Rest Parameter

// Menyimpan sisa argumen ke dalam array myArgs
function myFunc(a, b, ...myArgs) {
    return `Nilai ke-1 = ${a} Nilai ke-2 = ${b} Nilai sisanya = ${myArgs}`;
}
console.log(myFunc(1, 2, 3, 4, 5, 6));


// Rest parameter untuk menambahkan seluruh nilai
function jumlahkan(...angka) {
    let total = angka.reduce((total, acc) => total + acc);
    return total;
}
console.log(jumlahkan(1, 2, 4, 5, 3));


// Array destructuring
const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
const [ketua, wakil, ...anggota] = kelompok1; // Index 0 dimasukkan ke dalam variable ketua, index 1 dimasukkan ke dalam variable wakil, dan sisanya akan dimasukkan ke array anggota
console.log(ketua, wakil, anggota);


//Object destructuring
const team = {
    pm: 'Sandhika',
    frondEnd1: 'Doddy',
    frontEnd2: 'Erik',
    backEnd: 'Fajar',
    ux: 'Hendra',
    devOps: 'Ferry'
}
const { pm, devOps, ...myTeam } = team;
console.log(pm, devOps, myTeam);


// Filter
function filterBy(type, ...values) {
    return values.filter(v => typeof (v) === type)
}
console.log(filterBy('boolean', 8, 4, true, false, 'Anbia'));