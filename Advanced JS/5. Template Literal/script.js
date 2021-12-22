const mhs = [
    {
        nama: "Muhammad Anbia Senggagau",
        nim: 13117056
    },
    {
        nama: "Muhammad Senggagau",
        nim: 13117057
    },
    {
        nama: "Anbia Senggagau",
        nim: 13117058
    },

];

const el = `<div class="mhs">
            ${mhs.map(item => `<ul>
                <li> ${item.nama}</li>
                <li>${item.nim}</li>
                </ul>`).join('')}
            </div>`;

document.body.innerHTML = el;