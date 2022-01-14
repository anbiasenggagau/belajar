const json=[
    {
        "nama": "Muhammad Anbia",
        "nohp": "87489312",
        "email": "asd@foo.com"
    },
    {
        "nama": "Senggagau",
        "nohp": "46843",
        "email": "23164"
    },
    {
        "nama": "Senggagau",
        "nohp": "46843",
        "email": "23164"
    },
    {
        "nama": "Agagagau",
        "nohp": "46843",
        "email": "23164"
    },
    {
        "nama": "adas",
        "nohp": "3214",
        "email": "asdawda"
    }
]

const findContact=(contacts, nama) => {
    let result=contacts.find(element => element.nama==nama)
    return result
}

console.log(findContact(json, "Senggagau"))

function l(json, nama) {
    for (let i=0; i<json.length; i++) {
        console.log(json.length)
        console.log(i)
        if (json[i].nama==nama) {
            return json[i]
        }
    }
}

//console.log(l(json, "Senggagau"))

function spinalCases(arar) {
    let a=arar.filter(element => element%2==0)

    // arar.forEach(element => {
    //     a.push(element*2)
    // });

    console.log(a);
}

// spinalCases([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 4]);
// spinalCases([1, 2, 3, 4, 5, 3, 2, 22, 12]);